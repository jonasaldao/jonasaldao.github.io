#!/bin/bash
# Despliegue automático de Next.js en jonasaldao.github.io (auto-despliegue local)

# Detener el script ante cualquier error
set -e

echo "========================================="
echo "  1. Compilando aplicación Next.js...  "
echo "========================================="
pnpm run build

echo ""
echo "========================================="
echo "  2. Copiando compilado a la raíz del repositorio...  "
echo "========================================="
# Copiamos el contenido de out/ a la raíz del mismo repositorio, protegiendo carpetas críticas
rsync -av --exclude='.git' --exclude='node_modules' --exclude='.next' --exclude='out' out/ ./

# Nos aseguramos de mantener CNAME y .nojekyll en la raíz
echo "www.amira.ar" > CNAME
echo "# Bypass Jekyll" > .nojekyll

echo ""
echo "========================================="
echo "  3. Subiendo cambios a GitHub Pages...  "
echo "========================================="
git add -A
git commit -m "Deploy automático: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No hay cambios nuevos que commitear."
git push origin main

echo ""
echo "========================================="
echo "  ¡Listo! Despliegue completado con éxito."
echo "  El sitio se actualizará en https://amira.ar en 1-2 minutos."
echo "========================================="
