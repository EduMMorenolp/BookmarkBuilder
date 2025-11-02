# 📚 BookmarkBuilder

**Generador de Marcadores Personalizados** - Una aplicación web moderna para crear, organizar y exportar marcadores de navegador.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript)

## 🚀 Demo en Vivo

**[Ver Demo](https://tu-usuario.github.io/BookmarkBuilder/)**

## 🎯 Características

### ✨ Funcionalidades Principales

- **� Sistema de Múltiples Listas**
  - Crea y gestiona múltiples colecciones de marcadores
  - Duplica, renombra y elimina listas fácilmente
  - Navegación intuitiva entre diferentes proyectos
  - Persistencia automática de todas tus listas

- **�📁 Plantillas Predefinidas**: 6 plantillas profesionales listas para usar
  - 🚀 Full Stack Developer
  - 🎨 Frontend Developer
  - ⚙️ Backend Developer
  - 🧪 QA & Testing
  - 🤖 AI & Machine Learning
  - 🎨 UX/UI Designer

- **🛠️ Editor Visual Interactivo**
  - Crear y organizar carpetas jerárquicas
  - Añadir, editar y eliminar enlaces
  - Vista en árbol expandible
  - Edición inline con previsualización
  - IDs únicos automáticos para evitar conflictos

- **💬 Chat IA Integrado** *(En desarrollo)*
  - Asistente inteligente para sugerencias
  - Respuestas contextuales según tus necesidades
  - Banner informativo de estado de desarrollo
  - Búsqueda por keywords (React, Firebase, Testing, etc.)

- **📤 Exportación e Importación Mejorada**
  - Parser HTML robusto con soporte para estructuras complejas
  - Compatible con Chrome, Firefox, Edge, Safari
  - Importa archivos HTML grandes sin pérdida de datos
  - Exportación individual de listas específicas
  - Generación automática de nombres de archivo

- **🎨 Personalización**
  - Modo claro/oscuro con persistencia
  - Interfaz moderna y responsive
  - Animaciones suaves y efectos hover
  - Notificaciones en tiempo real
  - Botones de acción siempre visibles

- **💾 Persistencia Local Avanzada**
  - Auto-guardado inteligente sin bucles infinitos
  - Recuperación automática al recargar
  - Gestión optimizada de estado React
  - Sin necesidad de backend

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📖 Uso

### 1. Crear Lista desde Plantilla

Ve a la sección **Plantillas** y selecciona una plantilla predefinida:

- **Full Stack**: Para desarrolladores que trabajan en frontend y backend
- **Frontend**: React, Vue, Angular, CSS frameworks
- **Backend**: Node.js, Python, APIs, Bases de datos
- **QA**: Herramientas de testing y automatización
- **AI**: LLMs, ML frameworks, plataformas de IA
- **Design**: Figma, recursos de diseño, accesibilidad

Al hacer clic en "Usar plantilla", automáticamente:
- Se crea una nueva lista con el contenido de la plantilla
- Te redirige a **Mis Listas** para gestionar la nueva colección
- La lista queda lista para editar y personalizar

### 2. Gestionar Múltiples Listas

En **Mis Listas**:

- **Crear nueva**: Lista vacía para empezar desde cero
- **Duplicar**: Copia una lista existente con todo su contenido
- **Renombrar**: Cambiar el nombre de tus listas
- **Eliminar**: Borrar listas que ya no necesites
- **Cargar**: Abrir una lista específica en el editor

### 3. Editar Marcadores

En **Mis Marcadores**:

- **Añadir carpeta**: Organiza tus marcadores por categorías
- **Añadir enlace**: Crea nuevos enlaces con nombre y URL
- **Editar**: Haz clic en el ícono de lápiz para modificar
- **Eliminar**: Usa el ícono de papelera para borrar
- **Expandir/Contraer**: Navega por la estructura jerárquica
- **Auto-guardado**: Los cambios se guardan automáticamente

### 4. Chat IA *(En desarrollo)*

**⚠️ Nota**: Esta funcionalidad está en fase de prueba y no está conectada con un modelo de IA real.

Pide recomendaciones al asistente:

```
"Dame recursos para React y Firebase"
"Necesito herramientas de testing para JavaScript"
"Quiero marcadores de diseño UI/UX"
```

El simulador de IA sugerirá marcadores relevantes que puedes aplicar con un clic.

### 5. Exportar e Importar

**Exportar:**
1. Ve a **Mis Listas** y selecciona una lista
2. Haz clic en el botón de descarga en la tarjeta de la lista
3. El archivo HTML se descargará automáticamente

**Importar:**
1. Haz clic en **Importar HTML** en el sidebar
2. Selecciona tu archivo HTML de marcadores
3. Los marcadores se cargarán automáticamente en el editor
4. Guárdalos como una nueva lista si deseas

**Usar en navegadores:**
- Chrome: `chrome://bookmarks` → Menú → Importar marcadores
- Firefox: Marcadores → Mostrar todos → Importar y respaldar → Importar
- Edge: Configuración → Perfiles → Importar datos del explorador

Cuando termines:

1. Haz clic en **Exportar HTML**
2. El archivo se descargará automáticamente
3. Importa el archivo en tu navegador:
   - Chrome: `chrome://bookmarks` → Menú → Importar marcadores
   - Firefox: Marcadores → Mostrar todos → Importar y respaldar → Importar

## 🏗️ Estructura del Proyecto

```
BookmarkBuilder/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx              # Barra lateral con navegación
│   │   ├── TemplateSelector.jsx     # Selector de plantillas
│   │   ├── Editor.jsx               # Editor principal de marcadores
│   │   ├── FolderItem.jsx           # Componente de carpeta/enlace
│   │   ├── ChatIA.jsx               # Chat con asistente IA
│   │   └── BookmarkListManager.jsx  # Gestión de múltiples listas
│   ├── utils/
│   │   ├── templates.js             # Plantillas predefinidas
│   │   ├── bookmarkParser.js        # Conversión JSON ↔ HTML mejorada
│   │   └── aiHelper.js              # Lógica del asistente IA
│   ├── App.jsx                      # Componente principal con gestión de estado
│   ├── App.css                      # Estilos principales y componentes
│   ├── index.css                    # Estilos globales
│   └── main.jsx                     # Entry point
├── public/
├── .github/
│   └── workflows/
│       └── deploy.yml               # GitHub Actions para deploy
├── package.json
├── CHANGELOG.md                     # Registro de cambios
└── README.md
```

## 🔧 Tecnologías

- **React 18.3**: Library principal
- **Vite 5.4**: Build tool y dev server
- **@dnd-kit**: Drag and drop (preparado para futuras versiones)
- **Lucide React**: Iconos modernos
- **localStorage**: Persistencia de datos

## 📋 Formato de Exportación

Los archivos exportados siguen el formato estándar **Netscape Bookmark File Format**:

```html
<!DOCTYPE NETSCAPE-Bookmark-file-1>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>🚀 My Custom Bookmarks</H1>
<DL><p>
  <DT><H3>📁 Carpeta</H3>
  <DL><p>
    <DT><A HREF="https://example.com">Enlace</A>
  </DL><p>
</DL><p>
```

Este formato es compatible con todos los navegadores modernos.

## 🚀 Build para Producción

```bash
# Crear build optimizado
npm run build

# Preview del build
npm run preview
```

Los archivos se generarán en la carpeta `dist/`.

## � Deploy con GitHub Pages

Este proyecto está configurado para deploy automático con GitHub Pages mediante GitHub Actions.

### Configuración de GitHub Pages

1. Ve a la configuración de tu repositorio en GitHub
2. En la sección "Pages", selecciona:
   - **Source**: GitHub Actions
3. El deploy se ejecutará automáticamente con cada push a main/master

### Deploy Manual

También puedes hacer deploy manual:

```bash
npm run build
```

Luego sube la carpeta `dist` a tu servidor web.

### URL del Proyecto

Una vez configurado, tu proyecto estará disponible en:
`https://tu-usuario.github.io/BookmarkBuilder/`

##  Futuras Mejoras

### ✅ Implementado en v1.0.1
- [x] **Múltiples listas de marcadores**: Sistema completo de gestión de colecciones
- [x] **Parser HTML mejorado**: Soporte robusto para importación de estructuras complejas
- [x] **Gestión de estado optimizada**: Eliminación de bucles infinitos y mejoras de rendimiento
- [x] **Integración plantillas-listas**: Flujo mejorado desde plantillas hasta listas editables

### 🚧 En Desarrollo
- [ ] Conexión real con API de OpenAI para Chat IA
- [ ] Drag & drop para reordenar elementos
- [ ] Búsqueda y filtrado dentro de listas

### 🔮 Planificado
- [ ] Exportación a otros formatos (JSON, CSV, Markdown)
- [ ] Sincronización con servicios cloud (Firebase/Supabase)
- [ ] Colaboración en tiempo real
- [ ] PWA para uso offline
- [ ] Extensión de navegador (Chrome/Firefox)
- [ ] Compartir listas vía URL
- [ ] Importación desde servicios (Pocket, Raindrop.io)
- [ ] Temas personalizables
- [ ] Atajos de teclado
- [ ] Tutorial interactivo

## 📝 Licencia

MIT License - Siéntete libre de usar este proyecto como desees.

---

**¿Encontraste útil este proyecto?** ⭐ Dale una estrella en GitHub!

