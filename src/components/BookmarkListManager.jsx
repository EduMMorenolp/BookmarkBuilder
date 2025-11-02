import { useState } from 'react';
import { Plus, FolderOpen, Edit3, Trash2, Copy, Download } from 'lucide-react';

function BookmarkListManager({ 
  bookmarkLists, 
  activeListId, 
  onCreateList, 
  onLoadList, 
  onDeleteList, 
  onDuplicateList, 
  onRenameList,
  onExportList,
}) {
  const [showNewListDialog, setShowNewListDialog] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [editingListId, setEditingListId] = useState(null);
  const [editingName, setEditingName] = useState('');

  const handleCreateList = () => {
    if (newListName.trim()) {
      onCreateList(newListName.trim());
      setNewListName('');
      setShowNewListDialog(false);
    }
  };

  const handleRename = (listId) => {
    if (editingName.trim()) {
      onRenameList(listId, editingName.trim());
      setEditingListId(null);
      setEditingName('');
    }
  };

  const startRename = (list) => {
    setEditingListId(list.id);
    setEditingName(list.name);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bookmark-list-manager">
      <div className="manager-header">
        <h2>📚 Mis Listas de Marcadores</h2>
        <button 
          className="btn-primary"
          onClick={() => setShowNewListDialog(true)}
        >
          <Plus size={18} />
          Nueva Lista
        </button>
      </div>

      {showNewListDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <h3>Crear Nueva Lista</h3>
            <input
              type="text"
              placeholder="Nombre de la lista..."
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleCreateList()}
              autoFocus
            />
            <div className="dialog-buttons">
              <button onClick={() => setShowNewListDialog(false)} className="btn-secondary">
                Cancelar
              </button>
              <button onClick={handleCreateList} className="btn-primary">
                Crear
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="lists-grid">
        {bookmarkLists.length === 0 ? (
          <div className="empty-state">
            <FolderOpen size={48} />
            <h3>No hay listas de marcadores</h3>
            <p>Crea tu primera lista para organizar tus marcadores</p>
            <button 
              className="btn-primary"
              onClick={() => setShowNewListDialog(true)}
            >
              <Plus size={18} />
              Crear Primera Lista
            </button>
          </div>
        ) : (
          bookmarkLists.map(list => (
            <div 
              key={list.id} 
              className={`list-card ${activeListId === list.id ? 'active' : ''}`}
            >
              <div className="list-header">
                {editingListId === list.id ? (
                  <input
                    type="text"
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleRename(list.id)}
                    onBlur={() => handleRename(list.id)}
                    autoFocus
                  />
                ) : (
                  <h3 onClick={() => onLoadList(list.id)}>{list.name}</h3>
                )}
              </div>

              <div className="list-info">
                <p>Elementos: {countElements(list.bookmarks)}</p>
                <p>Modificado: {formatDate(list.lastModified)}</p>
              </div>

              <div className="list-actions">
                <button
                  onClick={() => onLoadList(list.id)}
                  className="btn-icon"
                  title="Abrir lista"
                >
                  <FolderOpen size={16} />
                </button>
                
                <button
                  onClick={() => startRename(list)}
                  className="btn-icon"
                  title="Renombrar"
                >
                  <Edit3 size={16} />
                </button>
                
                <button
                  onClick={() => onDuplicateList(list.id)}
                  className="btn-icon"
                  title="Duplicar"
                >
                  <Copy size={16} />
                </button>
                
                <button
                  onClick={() => onExportList(list)}
                  className="btn-icon"
                  title="Exportar"
                >
                  <Download size={16} />
                </button>
                
                <button
                  onClick={() => onDeleteList(list.id)}
                  className="btn-icon btn-danger"
                  title="Eliminar"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// Función auxiliar para contar elementos
function countElements(bookmarks) {
  let count = 0;
  bookmarks.forEach(item => {
    count++;
    if (item.type === 'folder' && item.children) {
      count += countElements(item.children);
    }
  });
  return count;
}

export default BookmarkListManager;