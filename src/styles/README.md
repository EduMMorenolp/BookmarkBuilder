# 📁 Estructura de Estilos CSS

Esta carpeta contiene los archivos CSS organizados por componente para mejorar la mantenibilidad del código.

## 🗂️ Archivos CSS

### **base.css**
- **CSS Reset** global (`*` selector)
- **Variables CSS** (colores, tipografía, sombras, etc.)
- **Modo oscuro** (dark-mode)
- **Estilos base** del body y layout principal
- **Container principal** (.app, .main-content)

### **sidebar.css**
- **Sidebar** principal de navegación
- **Menú hamburguesa** para móvil
- **Items de navegación** (.nav-item)
- **Acciones del sidebar** (botones de acción)
- **Header y footer** del sidebar
- **Overlay** para móvil

### **template-selector.css**
- **Grid de plantillas** (.template-grid)
- **Cards de plantillas** (.template-card)
- **Header de selector** de plantillas
- **Iconos y previsualizaciones** de plantillas
- **Botones de plantilla**

### **editor.css**
- **Editor** principal de marcadores
- **Header del editor** con acciones
- **Árbol de marcadores** (.bookmarks-tree)
- **Items de carpeta** (.folder-item)
- **Formularios de edición** (.edit-form)
- **Estados vacíos** (.empty-state)

### **chat-ia.css**
- **Contenedor del chat** (.chat-ia)
- **Mensajes** (.message, .message-content)
- **Input del chat** (.chat-input)
- **Sugerencias rápidas** (.quick-buttons)
- **Banner beta** de fase de prueba
- **Botones de aplicar** sugerencias

### **bookmark-list-manager.css**
- **Gestor de listas** de marcadores
- **Grid de listas** (.lists-grid)
- **Cards de lista** (.list-card)
- **Acciones de lista** (.list-actions)
- **Estados vacíos** específicos

### **components.css**
- **Botones** reutilizables (.btn-primary, .btn-secondary)
- **Diálogos** modales (.dialog, .dialog-overlay)
- **Notificaciones** (.notification)
- **Componentes** transversales

### **responsive.css**
- **Media queries** para tablet (768px)
- **Estilos móvil** específicos
- **Pantallas extra pequeñas** (480px)
- **Optimizaciones táctiles** para móvil

## 🔄 Cómo funciona

El archivo principal `App.css` importa todos estos archivos usando `@import`:

```css
@import './styles/base.css';
@import './styles/sidebar.css';
@import './styles/template-selector.css';
@import './styles/editor.css';
@import './styles/chat-ia.css';
@import './styles/bookmark-list-manager.css';
@import './styles/components.css';
@import './styles/responsive.css';
```

## ✅ Beneficios

- **📦 Modularidad**: Cada componente tiene sus propios estilos
- **🔍 Mantenibilidad**: Fácil de encontrar y modificar estilos específicos
- **👥 Colaboración**: Varios desarrolladores pueden trabajar sin conflictos
- **📱 Responsive**: Estilos móvil centralizados
- **🎨 Consistencia**: Variables globales reutilizables
- **🚀 Performance**: Los imports se procesan en tiempo de build

## 🛠️ Modificaciones

Para añadir o modificar estilos:

1. **Identifica el componente** al que pertenece el estilo
2. **Edita el archivo CSS** correspondiente
3. **Usa las variables CSS** definidas en `base.css`
4. **Considera el responsive** en `responsive.css`
5. **Testea en diferentes** tamaños de pantalla