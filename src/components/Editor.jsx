import { Plus } from 'lucide-react';
import FolderItem from './FolderItem';

function Editor({ bookmarks, setBookmarks }) {
  
  const updateItem = (path, newItem) => {
    const newBookmarks = [...bookmarks];
    
    if (path.length === 0) {
      // Actualizar raíz (no debería pasar normalmente)
      return;
    }
    
    if (path.length === 1) {
      newBookmarks[path[0]] = newItem;
    } else {
      let current = newBookmarks[path[0]];
      for (let i = 1; i < path.length - 1; i++) {
        current = current.children[path[i]];
      }
      current.children[path[path.length - 1]] = newItem;
    }
    
    setBookmarks(newBookmarks);
  };

  const deleteItem = (path) => {
    const newBookmarks = [...bookmarks];
    
    if (path.length === 1) {
      newBookmarks.splice(path[0], 1);
    } else {
      let current = newBookmarks[path[0]];
      for (let i = 1; i < path.length - 1; i++) {
        current = current.children[path[i]];
      }
      current.children.splice(path[path.length - 1], 1);
    }
    
    setBookmarks(newBookmarks);
  };

  const addRootItem = (type) => {
    const newItem = {
      id: `${Date.now()}_${Math.random()}`,
      type,
      name: type === 'folder' ? '📁 Nueva Carpeta' : '🔗 Nuevo Enlace',
      ...(type === 'folder' ? { children: [] } : { url: 'https://example.com' })
    };
    
    setBookmarks([...bookmarks, newItem]);
  };

  return (
    <div className="editor">
      <div className="editor-header">
        <h2>📝 Editor de Marcadores</h2>
        <div className="editor-actions">
          <button 
            className="add-btn folder"
            onClick={() => addRootItem('folder')}
          >
            <Plus size={16} />
            Carpeta
          </button>
          <button 
            className="add-btn link"
            onClick={() => addRootItem('link')}
          >
            <Plus size={16} />
            Enlace
          </button>
        </div>
      </div>

      <div className="editor-content">
        {bookmarks.length === 0 ? (
          <div className="empty-state">
            <p>📭 No hay marcadores</p>
            <p className="empty-hint">Selecciona una plantilla o crea uno nuevo</p>
          </div>
        ) : (
          <div className="bookmarks-tree">
            {bookmarks.map((item, index) => (
              <FolderItem
                key={item.id}
                item={item}
                onUpdate={updateItem}
                onDelete={deleteItem}
                path={[index]}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Editor;
