import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TemplateSelector from './components/TemplateSelector';
import Editor from './components/Editor';
import ChatIA from './components/ChatIA';
import { jsonToHtml, htmlToJson, generateFilename, downloadHtml, deepClone } from './utils/bookmarkParser';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('templates');
  const [bookmarks, setBookmarks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [notification, setNotification] = useState(null);

  // Cargar estado desde localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedBookmarks) {
      try {
        setBookmarks(JSON.parse(savedBookmarks));
      } catch (e) {
        console.error('Error loading bookmarks:', e);
      }
    }
    
    if (savedDarkMode) {
      setDarkMode(savedDarkMode === 'true');
    }
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Mostrar notificación
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Seleccionar plantilla
  const handleSelectTemplate = (template) => {
    setBookmarks(deepClone(template.structure));
    setActiveView('editor');
    showNotification(`Plantilla "${template.name}" cargada correctamente`);
  };

  // Aplicar sugerencia de IA
  const handleApplySuggestion = (structure) => {
    setBookmarks(prev => [...prev, ...deepClone(structure)]);
    setActiveView('editor');
    showNotification('Marcadores sugeridos añadidos al editor');
  };

  // Exportar a HTML
  const handleExport = () => {
    if (bookmarks.length === 0) {
      showNotification('No hay marcadores para exportar', 'error');
      return;
    }

    const html = jsonToHtml(bookmarks, '🚀 My Custom Bookmarks');
    const filename = generateFilename();
    downloadHtml(html, filename);
    showNotification(`Archivo ${filename} descargado correctamente`);
  };

  // Importar HTML
  const handleImport = (htmlContent) => {
    try {
      const parsed = htmlToJson(htmlContent);
      
      if (parsed.length > 0) {
        // Contar elementos recursivamente
        const countElements = (items) => {
          let count = 0;
          items.forEach(item => {
            count++;
            if (item.type === 'folder' && item.children) {
              count += countElements(item.children);
            }
          });
          return count;
        };
        
        const totalElements = countElements(parsed);
        
        setBookmarks(parsed);
        setActiveView('editor');
        showNotification(`Archivo importado: ${parsed.length} carpetas principales, ${totalElements} elementos totales`);
      } else {
        showNotification('No se encontraron marcadores válidos en el archivo', 'error');
      }
    } catch (e) {
      showNotification('Error al importar el archivo', 'error');
      console.error('Error al importar:', e);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Sidebar
        activeView={activeView}
        setActiveView={setActiveView}
        onExport={handleExport}
        onImport={handleImport}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="main-content">
        {activeView === 'templates' && (
          <TemplateSelector onSelectTemplate={handleSelectTemplate} />
        )}
        
        {activeView === 'editor' && (
          <Editor bookmarks={bookmarks} setBookmarks={setBookmarks} />
        )}
        
        {activeView === 'chat' && (
          <ChatIA onApplySuggestion={handleApplySuggestion} />
        )}
      </main>

      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
}

export default App;
