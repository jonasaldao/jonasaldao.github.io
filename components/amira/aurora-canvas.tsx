"use client"

import { useEffect, useRef } from "react"

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`

// Flowing teal aurora over deep ink, fbm noise. Rendered at reduced resolution
// (it's intentionally soft), DPR capped, paused when offscreen.
const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
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

  vec3 ink   = vec3(0.020, 0.125, 0.114); // #05201D
  vec3 deep  = vec3(0.045, 0.290, 0.263); // deep teal
  vec3 teal  = vec3(0.051, 0.580, 0.533); // #0D9488
  vec3 light = vec3(0.800, 0.984, 0.945); // #CCFBF1

  vec3 col = ink;
  col = mix(col, deep, smoothstep(0.25, 0.75, n1));
  col = mix(col, teal * 0.75, smoothstep(0.45, 0.95, n2) * 0.8);
  col = mix(col, light * 0.5, smoothstep(0.72, 1.0, ridge * n2) * 0.55);

  // soft vignette so edges melt into the section background
  float v = smoothstep(1.25, 0.35, length(uv - vec2(0.5, 0.45)));
  col = mix(ink, col, v);

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
    if (!gl) return // no WebGL → CSS gradient background underneath stays

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }
    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG))
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

    // Render at 55% of layout size — the aurora is soft, nobody sees pixels
    const RES_SCALE = 0.55
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    const resize = () => {
      const w = Math.max(1, Math.floor(canvas.clientWidth * dpr * RES_SCALE))
      const h = Math.max(1, Math.floor(canvas.clientHeight * dpr * RES_SCALE))
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
      resize()
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, (performance.now() - t0) / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      if (!reduced && visible) raf = requestAnimationFrame(frame)
    }
    frame()

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
      gl.getExtension("WEBGL_lose_context")?.loseContext()
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
