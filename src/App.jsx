import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TemplateSelector from './components/TemplateSelector';
import Editor from './components/Editor';
import ChatIA from './components/ChatIA';
import BookmarkListManager from './components/BookmarkListManager';
import Tutorial from './components/Tutorial';
import { jsonToHtml, htmlToJson, generateFilename, downloadHtml, deepClone } from './utils/bookmarkParser';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('templates');
  const [bookmarks, setBookmarks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [notification, setNotification] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Sistema de múltiples listas de marcadores
  const [bookmarkLists, setBookmarkLists] = useState([]);
  const [activeListId, setActiveListId] = useState(null);

  // Tutorial interactivo
  const [showTutorial, setShowTutorial] = useState(false);

  // Cargar estado desde localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedBookmarkLists = localStorage.getItem('bookmarkLists');
    const savedActiveListId = localStorage.getItem('activeListId');
    
    if (savedBookmarks) {
      try {
        setBookmarks(JSON.parse(savedBookmarks));
      } catch (e) {
        console.error('Error loading bookmarks:', e);
      }
    }
    
    if (savedBookmarkLists) {
      try {
        const lists = JSON.parse(savedBookmarkLists);
        setBookmarkLists(lists);
        
        // Si hay listas y un ID activo, cargar esa lista
        if (savedActiveListId && lists.length > 0) {
          const activeList = lists.find(list => list.id === savedActiveListId);
          if (activeList) {
            setActiveListId(savedActiveListId);
            setBookmarks(activeList.bookmarks);
          }
        }
      } catch (e) {
        console.error('Error loading bookmark lists:', e);
      }
    }
    
    if (savedDarkMode) {
      setDarkMode(savedDarkMode === 'true');
    }

    // Verificar si debe mostrar el tutorial
    const tutorialCompleted = localStorage.getItem('tutorialCompleted');
    if (!tutorialCompleted) {
      setTimeout(() => setShowTutorial(true), 1500); // Delay para mejor UX
    }
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    
    // Si hay una lista activa, actualizar sus marcadores
    if (activeListId) {
      setBookmarkLists(prevLists => {
        if (prevLists.length === 0) return prevLists;
        
        const updatedLists = prevLists.map(list => 
          list.id === activeListId 
            ? { ...list, bookmarks: bookmarks, lastModified: new Date().toISOString() }
            : list
        );
        localStorage.setItem('bookmarkLists', JSON.stringify(updatedLists));
        return updatedLists;
      });
    }
  }, [bookmarks, activeListId]);

  useEffect(() => {
    localStorage.setItem('bookmarkLists', JSON.stringify(bookmarkLists));
  }, [bookmarkLists]);

  useEffect(() => {
    if (activeListId) {
      localStorage.setItem('activeListId', activeListId);
    }
  }, [activeListId]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Mostrar notificación
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Funciones del tutorial
  const startTutorial = () => {
    setShowTutorial(true);
  };

  const closeTutorial = () => {
    setShowTutorial(false);
  };

  const completeTutorial = () => {
    setShowTutorial(false);
    showNotification('¡Tutorial completado! Ya puedes organizar tus marcadores como un profesional 🎉');
  };

  // Crear nueva lista de marcadores
  const createNewList = (name, fromTemplate = null) => {
    const newList = {
      id: `list_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: name,
      bookmarks: fromTemplate ? deepClone(fromTemplate) : [],
      created: new Date().toISOString(),
      lastModified: new Date().toISOString()
    };
    
    const updatedLists = [...bookmarkLists, newList];
    setBookmarkLists(updatedLists);
    setActiveListId(newList.id);
    
    // Limpiar los marcadores globales para evitar que se precarguen desde plantillas anteriores
    setBookmarks([]);
    
    showNotification(`Lista "${name}" creada correctamente`);
    // No cambiar de vista automáticamente para que el usuario vea la lista creada
  };

  // Cargar lista existente
  const loadList = (listId) => {
    const list = bookmarkLists.find(l => l.id === listId);
    if (list) {
      setActiveListId(listId);
      setBookmarks(list.bookmarks);
      setActiveView('editor');
      showNotification(`Lista "${list.name}" cargada`);
    }
  };

  // Eliminar lista
  const deleteList = (listId) => {
    const list = bookmarkLists.find(l => l.id === listId);
    if (list && window.confirm(`¿Estás seguro de que quieres eliminar la lista "${list.name}"?`)) {
      const updatedLists = bookmarkLists.filter(l => l.id !== listId);
      setBookmarkLists(updatedLists);
      
      if (activeListId === listId) {
        setActiveListId(null);
        setBookmarks([]);
      }
      
      showNotification(`Lista "${list.name}" eliminada`);
    }
  };

  // Duplicar lista
  const duplicateList = (listId) => {
    const list = bookmarkLists.find(l => l.id === listId);
    if (list) {
      const newName = `${list.name} (Copia)`;
      const duplicatedBookmarks = deepClone(list.bookmarks);
      
      // Crear nueva lista duplicada
      const newList = {
        id: `list_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name: newName,
        bookmarks: duplicatedBookmarks,
        created: new Date().toISOString(),
        lastModified: new Date().toISOString()
      };
      
      const updatedLists = [...bookmarkLists, newList];
      setBookmarkLists(updatedLists);
      setActiveListId(newList.id);
      setBookmarks(duplicatedBookmarks); // Cargar los marcadores duplicados
      
      showNotification(`Lista "${newName}" creada correctamente`);
    }
  };

  // Renombrar lista
  const renameList = (listId, newName) => {
    const updatedLists = bookmarkLists.map(list => 
      list.id === listId 
        ? { ...list, name: newName, lastModified: new Date().toISOString() }
        : list
    );
    setBookmarkLists(updatedLists);
    showNotification('Lista renombrada correctamente');
  };

    // Seleccionar plantilla
  const handleSelectTemplate = (template) => {
    const templateStructure = deepClone(template.structure);
    
    // Crear nueva lista con la plantilla
    const newList = {
      id: `list_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: template.name,
      bookmarks: templateStructure,
      created: new Date().toISOString(),
      lastModified: new Date().toISOString()
    };
    
    const updatedLists = [...bookmarkLists, newList];
    setBookmarkLists(updatedLists);
    setActiveListId(newList.id);
    
    // Establecer los marcadores de la plantilla SOLO cuando se crea desde plantilla
    setBookmarks(templateStructure);
    
    showNotification(`Lista "${template.name}" creada desde plantilla`);
    setActiveView('lists');
  };

  // Exportar lista específica
  const handleExportList = (list) => {
    const html = jsonToHtml(list.bookmarks, `🚀 ${list.name}`);
    const filename = `${list.name.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}.html`;
    downloadHtml(html, filename);
    showNotification(`Lista "${list.name}" exportada correctamente`);
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && sidebarOpen) {
      closeSidebar();
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`} onKeyDown={handleKeyDown}>
      {/* Hamburger menu button for mobile */}
      <button className="hamburger-btn" onClick={toggleSidebar} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar} role="presentation" aria-hidden="true"></div>}

      <Sidebar
        activeView={activeView}
        setActiveView={setActiveView}
        onExport={handleExport}
        onImport={handleImport}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />

      <main className="main-content">
        {activeView === 'templates' && (
          <TemplateSelector onSelectTemplate={handleSelectTemplate} />
        )}
        
        {activeView === 'editor' && (
          <Editor bookmarks={bookmarks} setBookmarks={setBookmarks} />
        )}
        
        {activeView === 'lists' && (
          <BookmarkListManager
            bookmarkLists={bookmarkLists}
            activeListId={activeListId}
            onCreateList={createNewList}
            onLoadList={loadList}
            onDeleteList={deleteList}
            onDuplicateList={duplicateList}
            onRenameList={renameList}
            onExportList={handleExportList}
            currentBookmarks={bookmarks}
            onSaveCurrentList={() => {
              if (activeListId && bookmarkLists.length > 0) {
                const updatedLists = bookmarkLists.map(list => 
                  list.id === activeListId 
                    ? { ...list, bookmarks: bookmarks, lastModified: new Date().toISOString() }
                    : list
                );
                setBookmarkLists(updatedLists);
                showNotification('Lista guardada correctamente');
              }
            }}
          />
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

      {/* Tutorial interactivo */}
      <Tutorial
        isOpen={showTutorial}
        onClose={closeTutorial}
        onComplete={completeTutorial}
      />

      {/* Botón de ayuda flotante */}
      {!showTutorial && (
        <button
          className="tutorial-help-button"
          onClick={startTutorial}
          title="Iniciar tutorial"
          aria-label="Abrir tutorial interactivo"
        >
          <span style={{fontSize: '20px', fontWeight: 'bold'}}>?</span>
        </button>
      )}
    </div>
  );
}

export default App;
