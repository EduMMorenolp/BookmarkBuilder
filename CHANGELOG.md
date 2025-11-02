# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.0.0] - 2025-11-02

### 🎉 Lanzamiento Inicial

#### ✨ Añadido
- **Interfaz de Usuario**
  - Sidebar con navegación principal
  - Tres vistas: Plantillas, Editor, Chat IA
  - Modo claro/oscuro con persistencia
  - Sistema de notificaciones

- **Plantillas Predefinidas**
  - 🚀 Full Stack Developer (Frontend, Backend, Databases, DevOps)
  - 🎨 Frontend Developer (Frameworks, Styling, Build Tools)
  - ⚙️ Backend Developer (Languages, Frameworks, Databases, APIs)
  - 🧪 QA & Testing (Testing Frameworks, Automation, Performance)
  - 🤖 AI & Machine Learning (LLMs, ML Frameworks, Plataformas)
  - 🎨 UX/UI Designer (Design Tools, Inspiration, Accessibility)

- **Editor Visual**
  - Creación de carpetas y enlaces
  - Estructura jerárquica con anidación ilimitada
  - Edición inline de nombres y URLs
  - Eliminación de items
  - Expandir/contraer carpetas
  - Vista en árbol interactiva

- **Chat IA**
  - Asistente inteligente con respuestas contextuales
  - Reconocimiento de keywords (React, Firebase, Testing, Design, AI, Python)
  - Sugerencias de marcadores aplicables directamente
  - Botones de sugerencias rápidas
  - Interfaz de chat con historial

- **Exportación e Importación**
  - Exportar a formato HTML Netscape Bookmark File
  - Compatible con Chrome, Firefox, Edge, Safari
  - Importar archivos HTML existentes
  - Parser bidireccional JSON ↔ HTML
  - Generación automática de nombres con timestamp

- **Persistencia Local**
  - Auto-guardado en localStorage
  - Recuperación automática al recargar
  - Guardado de preferencia de tema

- **Utilidades**
  - `bookmarkParser.js`: Conversión de formatos
  - `templates.js`: Gestión de plantillas
  - `aiHelper.js`: Lógica del asistente IA
  - Sistema de paths para navegación en árbol

- **Documentación**
  - README completo con instrucciones
  - GUIA_USUARIO con casos de uso detallados
  - DOCUMENTACION_TECNICA para desarrolladores
  - Archivo de ejemplo de marcadores exportados

#### 🎨 Diseño
- Paleta de colores profesional (azul, púrpura, verde)
- Tipografía Inter de Google Fonts
- Animaciones suaves en transiciones
- Iconos de Lucide React
- Diseño responsive (mobile-ready)
- Efectos hover en elementos interactivos

#### 🔧 Tecnología
- React 18.3
- Vite 5.4
- @dnd-kit/core y @dnd-kit/sortable
- lucide-react para iconos
- CSS Variables para temas
- localStorage API

#### 📦 Estructura del Proyecto
```
src/
├── components/
│   ├── Sidebar.jsx
│   ├── TemplateSelector.jsx
│   ├── Editor.jsx
│   ├── FolderItem.jsx
│   └── ChatIA.jsx
├── utils/
│   ├── templates.js
│   ├── bookmarkParser.js
│   └── aiHelper.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## [Unreleased]

### 🔮 Planificado para v1.1.0
- [ ] Búsqueda y filtrado de marcadores
- [ ] Opción de múltiples proyectos guardados
- [ ] Exportación a otros formatos (JSON, CSV)
- [ ] Atajos de teclado
- [ ] Tutorial interactivo para nuevos usuarios

### 🔮 Planificado para v2.0.0
- [ ] Drag & drop para reordenar elementos
- [ ] Integración con API de OpenAI real
- [ ] Sincronización con servicios cloud (Firebase/Supabase)
- [ ] Colaboración en tiempo real
- [ ] PWA con soporte offline
- [ ] Extensión de navegador (Chrome/Firefox)
- [ ] Compartir proyectos vía URL

### 🔮 Planificado para v3.0.0
- [ ] Backend con autenticación
- [ ] Aplicación móvil con React Native
- [ ] Dashboard con estadísticas de uso
- [ ] Temas personalizables
- [ ] Soporte multiidioma (i18n)
- [ ] Import desde servicios (Pocket, Raindrop.io)

---

## Tipos de Cambios

- `Añadido` para nuevas funcionalidades
- `Cambiado` para cambios en funcionalidades existentes
- `Deprecado` para funcionalidades que serán eliminadas
- `Eliminado` para funcionalidades eliminadas
- `Arreglado` para corrección de bugs
- `Seguridad` para vulnerabilidades

---

## Versiones

- **Major** (X.0.0): Cambios incompatibles con versiones anteriores
- **Minor** (0.X.0): Nuevas funcionalidades compatibles
- **Patch** (0.0.X): Correcciones de bugs

---

**Última actualización**: 2 de noviembre de 2025
