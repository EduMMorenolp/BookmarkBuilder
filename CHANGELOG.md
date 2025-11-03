# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.0.2] - 2025-11-02

### ✨ Añadido
- **Sistema de Tutorial Interactivo para Nuevos Usuarios**
  - Tutorial paso a paso de 7 etapas guiando a través de todas las funcionalidades
  - Modal con navegación intuitiva (botones Anterior/Siguiente)
  - Indicadores visuales de progreso con números y estados completados
  - Tooltips informativos mostrando el título de cada paso
  - Botón de ayuda flotante para acceder al tutorial en cualquier momento
  - Destacado automático de elementos durante la guía
  - Persistencia del estado de completado en localStorage

### 🎨 Mejorado
- **Experiencia de Usuario del Tutorial**
  - Diseño responsive optimizado para diferentes tamaños de pantalla
  - Animaciones suaves de entrada y transición entre pasos
  - Colores contrastantes para mejor accesibilidad visual
  - Modal con dimensiones optimizadas (450px máximo, 380px mínimo)
  - Navegación que se mantiene siempre dentro de los límites del modal
  - Botones más compactos con mejor distribución del espacio

### 🔧 Arreglado
- **Layout y Estilos del Tutorial**
  - Solucionado el problema de botones que se salían del modal
  - Mejorado el contraste del texto blanco en botones primarios
  - Ajustado el espaciado interno para mejor presentación
  - Corregida la visualización de estados activos y completados en indicadores

## [1.0.1] - 2025-11-02

### ✨ Añadido
- **Sistema de Múltiples Listas de Marcadores**
  - Componente `BookmarkListManager` para gestionar colecciones de marcadores
  - Creación, eliminación, duplicación y renombrado de listas
  - Navegación entre diferentes listas desde el sidebar ("Mis Listas")
  - Persistencia de múltiples listas en localStorage
  - Interfaz visual con tarjetas para cada lista
  - Estado activo visual para la lista seleccionada

- **Integración Mejorada de Plantillas con Listas**
  - Las plantillas ahora crean automáticamente nuevas listas
  - Redirección a "Mis Listas" al usar plantillas
  - Cada plantilla genera una lista independiente y editable

- **Banner Informativo en Chat IA**
  - Advertencia visual de que está en fase de prueba
  - Mensaje claro sobre la no conexión con modelo real
  - Estilos adaptativos para modo claro y oscuro

### 🔧 Arreglado
- **Parser de Marcadores HTML Mejorado**
  - Reescrito completamente el algoritmo de parsing en `bookmarkParser.js`
  - Soporte para múltiples métodos de búsqueda de elementos DL anidados
  - Manejo robusto de estructuras complejas de marcadores de diferentes navegadores
  - Solución a problema donde solo se importaban 7 elementos de archivos grandes
  - Mejor manejo de espacios en blanco y caracteres especiales en nombres

- **Gestión de Estado Corregida**
  - Eliminado bucle infinito en useEffect de actualización de listas
  - Corrección de referencia circular en dependencies de React
  - Solución a problema de keys duplicadas en renderizado de elementos

- **Funcionalidad de Plantillas**
  - Corregido acceso a `template.structure` en lugar de `template.bookmarks`
  - Arreglado manejo de valores undefined en función `deepClone`
  - Generación automática de IDs únicos para evitar conflictos

- **Duplicación de Listas**
  - Corregida función `duplicateList` para mantener contenido original
  - Clonado profundo correcto de marcadores en duplicación
  - Eliminada precarga no deseada de plantillas en nuevas listas

### 🧹 Limpieza
- Eliminación de todos los `console.log` de debugging
- Optimización de efectos React para prevenir bucles infinitos
- Mejora en la gestión de estado para múltiples listas
- Validación de datos en función `deepClone` para valores null/undefined

### 🎨 Interfaz
- Nuevo icono y color naranja para "Mis Listas" en el sidebar
- Botones de acción visibles en tarjetas de lista (70% opacidad por defecto)
- Efectos hover mejorados en elementos interactivos
- Grid responsivo para visualización de múltiples listas
- Banner de advertencia estilizado para Chat IA con colores de alerta

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
