# 📚 BookmarkBuilder

**Generador de Marcadores Personalizados** - Una aplicación web moderna para crear, organizar y exportar marcadores de navegador.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript)

## 🎯 Características

### ✨ Funcionalidades Principales

- **📁 Plantillas Predefinidas**: 6 plantillas profesionales listas para usar
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

- **💬 Chat IA Integrado**
  - Asistente inteligente para sugerencias
  - Respuestas contextuales según tus necesidades
  - Aplicación automática de sugerencias
  - Búsqueda por keywords (React, Firebase, Testing, etc.)

- **📤 Exportación e Importación**
  - Exporta en formato HTML estándar Netscape
  - Compatible con Chrome, Firefox, Edge
  - Importa archivos HTML existentes
  - Generación automática de nombres de archivo

- **🎨 Personalización**
  - Modo claro/oscuro
  - Interfaz moderna y responsive
  - Animaciones suaves
  - Notificaciones en tiempo real

- **💾 Persistencia Local**
  - Auto-guardado en localStorage
  - Recuperación automática al recargar
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

### 1. Seleccionar una Plantilla

Ve a la sección **Plantillas** y selecciona una plantilla predefinida según tu área:

- **Full Stack**: Para desarrolladores que trabajan en frontend y backend
- **Frontend**: React, Vue, Angular, CSS frameworks
- **Backend**: Node.js, Python, APIs, Bases de datos
- **QA**: Herramientas de testing y automatización
- **AI**: LLMs, ML frameworks, plataformas de IA
- **Design**: Figma, recursos de diseño, accesibilidad

### 2. Editar Marcadores

En **Mis Marcadores**:

- **Añadir carpeta**: Organiza tus marcadores por categorías
- **Añadir enlace**: Crea nuevos enlaces con nombre y URL
- **Editar**: Haz clic en el ícono de lápiz para modificar
- **Eliminar**: Usa el ícono de papelera para borrar
- **Expandir/Contraer**: Navega por la estructura jerárquica

### 3. Chat IA

Pide recomendaciones al asistente:

```
"Dame recursos para React y Firebase"
"Necesito herramientas de testing para JavaScript"
"Quiero marcadores de diseño UI/UX"
```

El IA sugerirá marcadores relevantes que puedes aplicar con un clic.

### 4. Exportar

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
│   │   ├── Sidebar.jsx          # Barra lateral con navegación
│   │   ├── TemplateSelector.jsx # Selector de plantillas
│   │   ├── Editor.jsx           # Editor principal de marcadores
│   │   ├── FolderItem.jsx       # Componente de carpeta/enlace
│   │   └── ChatIA.jsx           # Chat con asistente IA
│   ├── utils/
│   │   ├── templates.js         # Plantillas predefinidas
│   │   ├── bookmarkParser.js    # Conversión JSON ↔ HTML
│   │   └── aiHelper.js          # Lógica del asistente IA
│   ├── App.jsx                  # Componente principal
│   ├── App.css                  # Estilos principales
│   ├── index.css                # Estilos globales
│   └── main.jsx                 # Entry point
├── public/
├── package.json
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

## 🔮 Futuras Mejoras

- [ ] Drag & drop para reordenar elementos
- [ ] Exportación a otros formatos (JSON, CSV)
- [ ] Sincronización con servicios cloud
- [ ] Colaboración en tiempo real
- [ ] Integración con API de OpenAI real
- [ ] PWA para uso offline
- [ ] Extensión de navegador
- [ ] Compartir vía URL
- [ ] Múltiples proyectos guardados
- [ ] Búsqueda y filtrado avanzado

## 📝 Licencia

MIT License - Siéntete libre de usar este proyecto como desees.

---

**¿Encontraste útil este proyecto?** ⭐ Dale una estrella en GitHub!

