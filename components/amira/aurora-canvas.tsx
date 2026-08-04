"use client"

import { useEffect, useRef } from "react"

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`

// Flowing verde aurora over deep tinta, fbm noise. Rendered at reduced resolution
// (it's intentionally soft), DPR capped, paused when offscreen.
const FRAG = `
// highp is optional for fragment shaders in OpenGL ES 2 — asking for it
// unconditionally means a GPU without it either fails to compile or silently
// drops to mediump. Declare what the device actually has.
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 u_res;
uniform float u_time;

// Precision-tolerant hash. The usual sin(dot(p,k)) * 43758.5453 needs ~23 bits
// of mantissa to stay random; at mediump it collapses into visible blocks.
// This keeps every intermediate small, so it survives low precision.
float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.02 + vec2(13.7, 7.3);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 p = vec2(uv.x * u_res.x / u_res.y, uv.y);
  float t = u_time * 0.05;

  float n1 = fbm(p * 1.4 + vec2(t, -t * 0.6));
  float n2 = fbm(p * 2.2 - vec2(t * 0.7, t * 0.4) + n1 * 1.4);
  float ridge = fbm(p * 0.9 + vec2(-t * 0.3, t * 0.2) + n2);

  vec3 tinta = vec3(0.090, 0.192, 0.176); // #17312D
  vec3 deep  = vec3(0.043, 0.303, 0.262); // intermedio tinta/verde
  vec3 verde = vec3(0.031, 0.498, 0.416); // #087F6A
  vec3 menta = vec3(0.875, 0.969, 0.937); // #DFF7EF

  vec3 col = tinta;
  col = mix(col, deep, smoothstep(0.25, 0.75, n1));
  col = mix(col, verde * 0.75, smoothstep(0.45, 0.95, n2) * 0.8);
  col = mix(col, menta * 0.5, smoothstep(0.72, 1.0, ridge * n2) * 0.55);

  // soft vignette so edges melt into the section background
  float v = smoothstep(1.25, 0.35, length(uv - vec2(0.5, 0.45)));
  col = mix(tinta, col, v);

  // Ordered dither, ±1/255. The palette spans a very narrow band of dark teal,
  // so 8-bit quantisation lays down wide flat steps; scaled up on a phone those
  // steps read as blocks. Breaking the boundary costs one instruction.
  float d = fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))) - 0.5;
  col += d / 255.0;

  gl_FragColor = vec4(col, 1.0);
}
`

export function AuroraCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      depth: false,
      powerPreference: "low-power",
    })
    // A canvas hands back the *same* context object on every getContext call,
    // so one that was previously lost comes back non-null but dead — every
    // create* call on it returns null. Check explicitly.
    if (!gl || gl.isContextLost()) return // no WebGL → CSS gradient underneath stays

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)
      if (!s) return null
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }
    const vert = compile(gl.VERTEX_SHADER, VERT)
    const frag = compile(gl.FRAGMENT_SHADER, FRAG)
    const prog = gl.createProgram()
    if (!vert || !frag || !prog) return
    gl.attachShader(prog, vert)
    gl.attachShader(prog, frag)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    )
    const loc = gl.getAttribLocation(prog, "a_pos")
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, "u_res")
    const uTime = gl.getUniformLocation(prog, "u_time")

    // Size the buffer to a fixed pixel budget rather than a fraction of the
    // layout. The old `clientWidth * dpr * 0.55` with dpr capped at 1.5 quietly
    // punished phones: a 390x1290 hero on a dpr-3 screen rendered 321px across
    // and was then stretched 3.6x to fill 1170 physical pixels, so the gradient
    // arrived as blocks. A budget spends the same GPU work everywhere and lets
    // a tall, narrow viewport keep its horizontal detail.
    // Two budgets, not one: a single figure either starves the desktop or asks
    // a phone GPU for three times the fill it does today. The desktop number is
    // what the old formula already produced there, so that view is unchanged;
    // phones roughly double theirs, which buys ~37% more horizontal detail
    // without tripling the per-frame cost of a 60-hash fragment shader.
    const coarse =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: coarse)").matches
    const PIXEL_BUDGET = coarse ? 640_000 : 1_000_000
    const MAX_SCALE = 1.5 // never supersample past this, even on tiny viewports
    const resize = () => {
      const cssW = canvas.clientWidth
      const cssH = canvas.clientHeight
      if (!cssW || !cssH) return
      const scale = Math.min(MAX_SCALE, Math.sqrt(PIXEL_BUDGET / (cssW * cssH)))
      const w = Math.max(1, Math.floor(cssW * scale))
      const h = Math.max(1, Math.floor(cssH * scale))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
      }
    }
    resize()

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let visible = true
    let raf = 0
    const t0 = performance.now()

    const frame = () => {
      if (gl.isContextLost()) return
      resize()
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, (performance.now() - t0) / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      if (!reduced && visible) raf = requestAnimationFrame(frame)
    }
    frame()

    // The GPU can drop the context on its own (tab backgrounded, driver reset).
    // Preventing the default marks it restorable instead of permanently dead.
    const onContextLost = (e: Event) => {
      e.preventDefault()
      cancelAnimationFrame(raf)
    }
    canvas.addEventListener("webglcontextlost", onContextLost)

    const io = new IntersectionObserver(([entry]) => {
      const nowVisible = entry.isIntersecting
      if (nowVisible && !visible && !reduced) {
        visible = true
        raf = requestAnimationFrame(frame)
      } else {
        visible = nowVisible
      }
    })
    io.observe(canvas)

    window.addEventListener("resize", resize)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("webglcontextlost", onContextLost)
      // Free the GPU objects but leave the context alive: React can reuse this
      // same canvas element on the next route, and a force-lost context would
      // poison it for good (createShader would return null on re-init).
      if (!gl.isContextLost()) {
        gl.deleteBuffer(buf)
        gl.deleteProgram(prog)
        gl.deleteShader(vert)
        gl.deleteShader(frag)
      }
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className={className}
      aria-hidden="true"
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  )
}
