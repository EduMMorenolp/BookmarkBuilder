# 🚀 Scripts Útiles - BookmarkBuilder

Este archivo contiene scripts y comandos útiles para el desarrollo y mantenimiento del proyecto.

## 📦 Scripts npm Disponibles

### Desarrollo
```bash
# Iniciar servidor de desarrollo (con hot reload)
npm run dev

# Servidor en modo debug
npm run dev -- --debug

# Servidor exponiendo en red local
npm run dev -- --host
```

### Build
```bash
# Crear build de producción
npm run build

# Preview del build (probar antes de deploy)
npm run preview

# Build + Preview en un solo comando
npm run build && npm run preview
```

### Linting
```bash
# Ejecutar ESLint
npm run lint

# Auto-fix de errores de linting
npm run lint -- --fix
```

### Otros
```bash
# Ver información del paquete
npm info

# Actualizar dependencias
npm update

# Auditar seguridad
npm audit

# Arreglar vulnerabilidades
npm audit fix
```

---

## 🔧 Scripts de Utilidad

### Limpiar y Reinstalar

**PowerShell (Windows)**:
```powershell
# Limpiar completamente el proyecto
Remove-Item -Recurse -Force node_modules, dist, .vite
npm install
```

**Bash (Linux/Mac)**:
```bash
# Limpiar completamente el proyecto
rm -rf node_modules dist .vite
npm install
```

### Build Optimizado

```bash
# Build con análisis de bundle
npm run build -- --mode production

# Build con sourcemaps
npm run build -- --sourcemap
```

### Desarrollo con Puerto Específico

```bash
# Usar puerto 3000 en lugar de 5173
npm run dev -- --port 3000
```

---

## 🗂️ Gestión de Datos

### Backup de localStorage

**En la consola del navegador**:
```javascript
// Exportar todos los datos
const backup = {
  bookmarks: localStorage.getItem('bookmarks'),
  darkMode: localStorage.getItem('darkMode'),
  timestamp: new Date().toISOString()
};
console.log(JSON.stringify(backup, null, 2));

// O descargar como archivo
const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'bookmarkbuilder-backup.json';
a.click();
```

### Restaurar localStorage

```javascript
// Restaurar desde backup
const backup = {
  bookmarks: '...', // Tu backup aquí
  darkMode: 'true'
};

localStorage.setItem('bookmarks', backup.bookmarks);
localStorage.setItem('darkMode', backup.darkMode);
location.reload();
```

### Limpiar localStorage

```javascript
// Limpiar solo BookmarkBuilder
localStorage.removeItem('bookmarks');
localStorage.removeItem('darkMode');
location.reload();

// O limpiar todo (¡cuidado!)
localStorage.clear();
```

---

## 🧪 Testing (Futuro)

### Setup de Testing

```bash
# Instalar dependencias de testing
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom

# Ejecutar tests
npm test

# Tests en modo watch
npm test -- --watch

# Coverage
npm test -- --coverage
```

### Estructura de Tests

```bash
src/
├── components/
│   ├── Editor.jsx
│   └── Editor.test.jsx
├── utils/
│   ├── bookmarkParser.js
│   └── bookmarkParser.test.js
```

---

## 📊 Análisis de Bundle

### Instalar Herramienta

```bash
npm install --save-dev rollup-plugin-visualizer
```

### Configurar en vite.config.js

```javascript
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  plugins: [
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ]
}
```

### Generar Análisis

```bash
npm run build
# Se abrirá stats.html con el análisis visual
```

---

## 🚀 Deployment

### Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

**vercel.json**:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "framework": "vite"
}
```

### Netlify

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Autenticar
netlify login

# Deploy
netlify deploy

# Deploy a producción
netlify deploy --prod
```

**netlify.toml**:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Añadir script a package.json
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

**Configurar vite.config.js**:
```javascript
export default {
  base: '/BookmarkBuilder/' // Nombre del repo
}
```

---

## 🔍 Debug

### Source Maps

En producción, si necesitas debug:

```bash
npm run build -- --sourcemap
```

### React DevTools

1. Instala extensión de React DevTools
2. Abre la app en desarrollo
3. Inspecciona componentes y estado

### Console Logging

```javascript
// En cualquier componente
console.log('Estado actual:', bookmarks);
console.table(bookmarks); // Tabla visual
console.group('Grupo de logs');
console.log('Info 1');
console.log('Info 2');
console.groupEnd();
```

---

## 🔄 Git Workflows

### Setup Inicial

```bash
git init
git add .
git commit -m "Initial commit: BookmarkBuilder v1.0.0"
git branch -M main
git remote add origin https://github.com/tu-usuario/BookmarkBuilder.git
git push -u origin main
```

### Feature Branch

```bash
# Crear nueva rama
git checkout -b feature/nueva-funcionalidad

# Trabajar...
git add .
git commit -m "feat: añadir nueva funcionalidad"

# Push
git push origin feature/nueva-funcionalidad

# Abrir PR en GitHub
```

### Hotfix

```bash
# Crear rama de hotfix
git checkout -b hotfix/corregir-bug

# Corregir y commitear
git add .
git commit -m "fix: corregir bug crítico"

# Merge rápido
git checkout main
git merge hotfix/corregir-bug
git push
```

---

## 📈 Mantenimiento

### Actualizar Dependencias

```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar todas (minor/patch)
npm update

# Actualizar una específica
npm install react@latest

# Actualizar todas (incluyendo major)
npm install -g npm-check-updates
ncu -u
npm install
```

### Auditoría de Seguridad

```bash
# Ver vulnerabilidades
npm audit

# Fix automático
npm audit fix

# Fix forzado (puede romper cosas)
npm audit fix --force
```

---

## 💾 Backup del Proyecto

### Crear Backup Completo

**PowerShell**:
```powershell
$date = Get-Date -Format "yyyy-MM-dd"
Compress-Archive -Path . -DestinationPath "../BookmarkBuilder-backup-$date.zip" -Force
```

**Bash**:
```bash
DATE=$(date +%Y-%m-%d)
tar -czf ../BookmarkBuilder-backup-$DATE.tar.gz \
  --exclude=node_modules \
  --exclude=dist \
  --exclude=.git \
  .
```

---

## 🎨 Customización Rápida

### Cambiar Colores Principales

Edita `src/App.css`:

```css
:root {
  --color-primary: #3b82f6;    /* Azul */
  --color-secondary: #8b5cf6;  /* Púrpura */
  --color-success: #10b981;    /* Verde */
}
```

### Añadir Nueva Plantilla

Edita `src/utils/templates.js`:

```javascript
export const templates = {
  // ... plantillas existentes
  
  miPlantilla: {
    id: 'mi-plantilla',
    name: '🔥 Mi Plantilla',
    description: 'Descripción corta',
    structure: [
      {
        id: 'folder1',
        type: 'folder',
        name: '📁 Mi Carpeta',
        children: []
      }
    ]
  }
}
```

---

## 🐛 Solución Rápida de Problemas

### Puerto 5173 ya en uso

```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5173 | xargs kill -9

# O usar otro puerto
npm run dev -- --port 3000
```

### Errores de CORS (si usas API externa)

```javascript
// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://api-externa.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}
```

### Build falla por memoria

```bash
# Aumentar límite de memoria de Node
$env:NODE_OPTIONS="--max-old-space-size=4096"  # PowerShell
export NODE_OPTIONS="--max-old-space-size=4096" # Bash

npm run build
```

---

## 📚 Recursos Adicionales

### Documentación
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)

### Herramientas
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Vite Plugin PWA](https://vite-pwa-org.netlify.app/)
- [Bundle Analyzer](https://www.npmjs.com/package/rollup-plugin-visualizer)

---

**¡Happy Coding!** 🚀✨
