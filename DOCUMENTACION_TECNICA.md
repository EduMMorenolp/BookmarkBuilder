# 🔧 Documentación Técnica - BookmarkBuilder

## Arquitectura del Proyecto

### Stack Tecnológico

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 5.4
- **Gestión de Estado**: React Hooks (useState, useEffect)
- **Persistencia**: localStorage API
- **Iconos**: Lucide React
- **Estilos**: CSS Variables + CSS Modules approach

### Estructura de Datos

#### Bookmark Object Schema

```javascript
{
  id: string,              // Unique identifier
  type: 'folder' | 'link', // Item type
  name: string,            // Display name
  url?: string,            // Required for links
  children?: Array         // Required for folders
}
```

**Ejemplo de Estructura Completa:**

```javascript
[
  {
    id: 'folder_1',
    type: 'folder',
    name: '🚀 Frontend',
    children: [
      {
        id: 'link_1',
        type: 'link',
        name: 'React Docs',
        url: 'https://react.dev/'
      },
      {
        id: 'folder_2',
        type: 'folder',
        name: 'CSS Frameworks',
        children: [
          {
            id: 'link_2',
            type: 'link',
            name: 'Tailwind CSS',
            url: 'https://tailwindcss.com/'
          }
        ]
      }
    ]
  }
]
```

---

## Componentes

### Sidebar.jsx

**Propósito**: Navegación principal y acciones globales

**Props**:
```javascript
{
  activeView: string,           // 'templates' | 'editor' | 'chat'
  setActiveView: function,      // Cambiar vista activa
  onExport: function,           // Exportar marcadores
  onImport: function,           // Importar archivo HTML
  darkMode: boolean,            // Estado del tema
  toggleDarkMode: function      // Toggle tema
}
```

**Funcionalidades**:
- Navegación entre vistas
- Botón de importación con file picker
- Botón de exportación
- Toggle de tema oscuro/claro

---

### TemplateSelector.jsx

**Propósito**: Mostrar y seleccionar plantillas predefinidas

**Props**:
```javascript
{
  onSelectTemplate: function    // Callback al seleccionar plantilla
}
```

**Funcionalidades**:
- Grid responsivo de tarjetas
- Vista previa de contenido de plantilla
- Botón "Usar plantilla" que clona la estructura

**Datos**: Consume `templates.js` para obtener plantillas

---

### Editor.jsx

**Propósito**: Interfaz principal de edición de marcadores

**Props**:
```javascript
{
  bookmarks: Array,             // Array de bookmarks
  setBookmarks: function        // Actualizar bookmarks
}
```

**Funcionalidades**:
- Renderizado recursivo de árbol
- Añadir items en nivel raíz
- Actualización inmutables del estado
- Manejo de paths para navegación en árbol

**Operaciones de Estado**:
```javascript
// Actualizar item en path específico
updateItem(path, newItem)

// Eliminar item en path específico
deleteItem(path)

// Añadir item en raíz
addRootItem(type)
```

---

### FolderItem.jsx

**Propósito**: Componente recursivo para carpetas y enlaces

**Props**:
```javascript
{
  item: Object,                 // Bookmark item
  onUpdate: function,           // Actualizar callback
  onDelete: function,           // Eliminar callback
  path: Array                   // Path en el árbol [0, 2, 1]
}
```

**Estados Locales**:
- `isExpanded`: Control de collapse/expand
- `isEditing`: Modo edición activado
- `editValue`: Valor temporal del nombre
- `editUrl`: Valor temporal de URL

**Funcionalidades**:
- Renderizado condicional según tipo
- Edición inline
- Añadir hijos (folders/links)
- Eliminación con propagación del path

---

### ChatIA.jsx

**Propósito**: Interfaz de chat con asistente IA

**Props**:
```javascript
{
  onApplySuggestion: function   // Aplicar estructura sugerida
}
```

**Estados Locales**:
- `messages`: Array de mensajes {role, content}
- `input`: Input del usuario
- `suggestedStructure`: Estructura pendiente de aplicar

**Funcionalidades**:
- Sistema de mensajes user/assistant
- Procesamiento de keywords
- Botones de sugerencia rápida
- Aplicación de estructura al editor

**Flujo de Interacción**:
1. Usuario escribe mensaje
2. `processAiMessage()` analiza keywords
3. Retorna respuesta + estructura (opcional)
4. Si hay estructura, muestra botón "Aplicar"
5. Al aplicar, pasa estructura al App.jsx

---

## Utilidades

### bookmarkParser.js

**Funciones Principales**:

#### `jsonToHtml(bookmarks, title)`
Convierte estructura JSON a HTML Netscape

**Parámetros**:
- `bookmarks`: Array de bookmarks
- `title`: Título del archivo (default: 'My Bookmarks')

**Retorna**: String HTML válido

**Proceso**:
1. Genera timestamp actual
2. Recorre recursivamente la estructura
3. Genera tags HTML según tipo (H3 para folders, A para links)
4. Respeta indentación para legibilidad

#### `htmlToJson(htmlString)`
Parsea HTML Netscape a estructura JSON

**Parámetros**:
- `htmlString`: Contenido del archivo HTML

**Retorna**: Array de bookmarks

**Proceso**:
1. Crea DOMParser
2. Encuentra tag `<DL>` raíz
3. Recorre recursivamente nodos
4. Identifica H3 (folders) y A (links)
5. Construye estructura JSON con IDs generados

#### `generateFilename()`
Genera nombre de archivo con timestamp

**Retorna**: `mis_marcadores_YYYY-MM-DD.html`

#### `downloadHtml(htmlContent, filename)`
Crea y descarga archivo HTML

**Proceso**:
1. Crea Blob con tipo `text/html`
2. Genera URL temporal con `URL.createObjectURL()`
3. Crea elemento `<a>` con download attribute
4. Dispara click programático
5. Limpia URL temporal

#### `deepClone(obj)`
Clona profundamente objetos/arrays

**Implementación**: `JSON.parse(JSON.stringify(obj))`

**Uso**: Evitar mutaciones del estado original

---

### templates.js

**Estructura de Exportación**:

```javascript
export const templates = {
  templateId: {
    id: string,
    name: string,
    description: string,
    structure: Array<Bookmark>
  }
}
```

**Helpers**:
- `getTemplateById(id)`: Obtiene plantilla por ID
- `getAllTemplates()`: Retorna array de todas las plantillas

**Añadir Nueva Plantilla**:

```javascript
newtemplate: {
  id: 'newtemplate',
  name: '🔥 New Template',
  description: 'Description here',
  structure: [
    {
      id: 'unique_id',
      type: 'folder',
      name: 'Folder Name',
      children: [...]
    }
  ]
}
```

---

### aiHelper.js

**Estructura de Respuestas**:

```javascript
export const aiResponses = {
  category: {
    keywords: Array<string>,
    response: string,
    structure: Array<Bookmark>
  }
}
```

**Función Principal**:

#### `processAiMessage(message)`

**Parámetros**:
- `message`: String con consulta del usuario

**Retorna**:
```javascript
{
  message: string,          // Respuesta del IA
  structure: Array,         // Estructura sugerida
  hasStructure: boolean     // Si tiene estructura para aplicar
}
```

**Algoritmo**:
1. Convierte mensaje a lowercase
2. Itera sobre categorías en `aiResponses`
3. Busca coincidencia de keywords con `includes()`
4. Retorna primera coincidencia
5. Si no hay match, retorna respuesta default

**Añadir Nueva Respuesta**:

```javascript
newcategory: {
  keywords: ['keyword1', 'keyword2'],
  response: 'Tu respuesta aquí',
  structure: [
    // Bookmarks sugeridos
  ]
}
```

---

## Gestión de Estado

### Estado Global (App.jsx)

```javascript
const [activeView, setActiveView] = useState('templates')
const [bookmarks, setBookmarks] = useState([])
const [darkMode, setDarkMode] = useState(false)
const [notification, setNotification] = useState(null)
```

### Persistencia

#### Guardar en localStorage

```javascript
useEffect(() => {
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}, [bookmarks])

useEffect(() => {
  localStorage.setItem('darkMode', darkMode.toString())
}, [darkMode])
```

#### Cargar desde localStorage

```javascript
useEffect(() => {
  const savedBookmarks = localStorage.getItem('bookmarks')
  const savedDarkMode = localStorage.getItem('darkMode')
  
  if (savedBookmarks) {
    try {
      setBookmarks(JSON.parse(savedBookmarks))
    } catch (e) {
      console.error('Error loading bookmarks:', e)
    }
  }
  
  if (savedDarkMode) {
    setDarkMode(savedDarkMode === 'true')
  }
}, [])
```

---

## Manejo de Paths

Los paths son arrays que representan la ubicación en el árbol:

```javascript
// Ejemplo de árbol
[
  { // Path: [0]
    id: 'folder1',
    children: [
      { id: 'link1' },      // Path: [0, 0]
      {                     // Path: [0, 1]
        id: 'folder2',
        children: [
          { id: 'link2' }   // Path: [0, 1, 0]
        ]
      }
    ]
  },
  { id: 'link3' }           // Path: [1]
]
```

### Navegación con Path

```javascript
// Actualizar item en [0, 1, 0]
const path = [0, 1, 0]
let current = bookmarks[0]      // Primera carpeta
current = current.children[1]   // Segunda carpeta anidada
current.children[0] = newItem   // Actualizar tercer nivel
```

---

## Estilos y Temas

### CSS Variables

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
  /* ... */
}

body.dark-mode {
  --bg-primary: #0f172a;
  --text-primary: #f1f5f9;
  /* ... */
}
```

### Toggle Dark Mode

```javascript
const toggleDarkMode = () => {
  setDarkMode(!darkMode)
}

useEffect(() => {
  document.body.classList.toggle('dark-mode', darkMode)
}, [darkMode])
```

---

## Sistema de Notificaciones

### Mostrar Notificación

```javascript
const showNotification = (message, type = 'success') => {
  setNotification({ message, type })
  setTimeout(() => setNotification(null), 3000)
}
```

### Tipos de Notificación
- `success`: Verde, para operaciones exitosas
- `error`: Rojo, para errores

### Uso

```javascript
showNotification('Archivo exportado correctamente', 'success')
showNotification('No hay marcadores para exportar', 'error')
```

---

## Optimizaciones

### Prevención de Re-renders

- Uso de `useState` para estado local aislado
- `useEffect` con dependencias específicas
- Operaciones inmutables en arrays/objetos

### Performance

- Clonación profunda solo cuando necesario
- localStorage escribe solo en cambios
- Renderizado condicional de componentes grandes

### Mejoras Futuras

**useMemo**:
```javascript
const filteredBookmarks = useMemo(() => {
  return bookmarks.filter(/* ... */)
}, [bookmarks, filterCriteria])
```

**useCallback**:
```javascript
const handleUpdate = useCallback((path, item) => {
  // Lógica de actualización
}, [bookmarks])
```

---

## Testing (Pendiente)

### Setup Recomendado

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

### Tests a Implementar

#### bookmarkParser.js
```javascript
describe('jsonToHtml', () => {
  it('should convert simple structure to HTML', () => {
    const input = [{ type: 'link', name: 'Test', url: 'http://test.com' }]
    const output = jsonToHtml(input)
    expect(output).toContain('<A HREF="http://test.com">Test</A>')
  })
})
```

#### Components
```javascript
describe('Editor', () => {
  it('should render empty state when no bookmarks', () => {
    render(<Editor bookmarks={[]} setBookmarks={jest.fn()} />)
    expect(screen.getByText(/No hay marcadores/i)).toBeInTheDocument()
  })
})
```

---

## Build y Deploy

### Build Local

```bash
npm run build
```

Genera archivos optimizados en `dist/`

### Preview Build

```bash
npm run preview
```

### Deploy Options

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

#### GitHub Pages
```javascript
// vite.config.js
export default {
  base: '/BookmarkBuilder/'
}
```

```bash
npm run build
# Sube contenido de dist/ a gh-pages branch
```

---

## Contribuir

### Setup de Desarrollo

1. Fork el repo
2. Clon tu fork
3. `npm install`
4. `npm run dev`
5. Crea branch: `git checkout -b feature/nueva-funcionalidad`
6. Commit: `git commit -m "Add nueva funcionalidad"`
7. Push: `git push origin feature/nueva-funcionalidad`
8. Abre Pull Request

### Convención de Commits

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Formato, punto y coma, etc
- `refactor:` Refactorización de código
- `test:` Añadir tests
- `chore:` Tareas de mantenimiento

---

## Troubleshooting de Desarrollo

### Hot Reload no Funciona

```bash
# Limpia caché y reinstala
rm -rf node_modules
npm install
```

### Errores de ESLint

```bash
# Desactiva regla temporalmente
/* eslint-disable-next-line no-unused-vars */
```

### Build Falla

```bash
# Verifica versión de Node
node --version  # Debe ser 18+

# Limpia y reconstruye
rm -rf dist
npm run build
```

---

## Roadmap Técnico

### v2.0
- [ ] Implementar drag & drop con @dnd-kit
- [ ] Añadir tests unitarios
- [ ] Migrar a TypeScript
- [ ] Implementar Context API

### v2.1
- [ ] PWA con Service Workers
- [ ] Sync con Firebase
- [ ] Backend con Express
- [ ] Autenticación OAuth

### v3.0
- [ ] Real-time con WebSockets
- [ ] Extensión de navegador
- [ ] App móvil con React Native
- [ ] IA con OpenAI API real

---

## Licencia

MIT License - Ver archivo `LICENSE` para más detalles

---

**Mantener documentación actualizada es crítico para el éxito del proyecto** 📝
