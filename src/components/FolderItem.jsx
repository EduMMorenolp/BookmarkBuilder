import { useState } from 'react';
import { ChevronRight, ChevronDown, Folder, Link as LinkIcon, Edit2, Trash2, Plus } from 'lucide-react';

function FolderItem({ item, onUpdate, onDelete, path = [] }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.name);
  const [editUrl, setEditUrl] = useState(item.url || '');

  const handleSave = () => {
    onUpdate(path, { ...item, name: editValue, url: editUrl });
    setIsEditing(false);
  };

  const handleAddChild = (type) => {
    const newItem = {
      id: `${Date.now()}_${Math.random()}`,
      type,
      name: type === 'folder' ? 'Nueva Carpeta' : 'Nuevo Enlace',
      ...(type === 'folder' ? { children: [] } : { url: 'https://example.com' })
    };
    
    const updatedItem = {
      ...item,
      children: [...(item.children || []), newItem]
    };
    
    onUpdate(path, updatedItem);
  };

  if (isEditing) {
    return (
      <div className="folder-item editing">
        <div className="edit-form">
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder="Nombre"
            className="edit-input"
            autoFocus
          />
          {item.type === 'link' && (
            <input
              type="text"
              value={editUrl}
              onChange={(e) => setEditUrl(e.target.value)}
              placeholder="URL"
              className="edit-input"
            />
          )}
          <div className="edit-actions">
            <button onClick={handleSave} className="btn-save">Guardar</button>
            <button onClick={() => setIsEditing(false)} className="btn-cancel">Cancelar</button>
          </div>
        </div>
      </div>
    );
  }

  if (item.type === 'folder') {
    return (
      <div className="folder-item">
        <div className="folder-header">
          <button 
            className="expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          
          <Folder size={16} className="item-icon folder-icon" />
          <span className="item-name">{item.name}</span>
          
          <div className="item-actions">
            <button 
              onClick={() => handleAddChild('folder')} 
              className="action-icon"
              title="Añadir carpeta"
            >
              <Plus size={14} />
            </button>
            <button 
              onClick={() => handleAddChild('link')} 
              className="action-icon"
              title="Añadir enlace"
            >
              <LinkIcon size={14} />
            </button>
            <button 
              onClick={() => setIsEditing(true)} 
              className="action-icon"
              title="Editar"
            >
              <Edit2 size={14} />
            </button>
            <button 
              onClick={() => onDelete(path)} 
              className="action-icon delete"
              title="Eliminar"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>
        
        {isExpanded && item.children && item.children.length > 0 && (
          <div className="folder-children">
            {item.children.map((child, index) => (
              <FolderItem
                key={child.id}
                item={child}
                onUpdate={onUpdate}
                onDelete={onDelete}
                path={[...path, index]}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Link item
  return (
    <div className="folder-item link-item">
      <LinkIcon size={16} className="item-icon link-icon" />
      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="item-name link"
      >
        {item.name}
      </a>
      <span className="item-url">{item.url}</span>
      
      <div className="item-actions">
        <button 
          onClick={() => setIsEditing(true)} 
          className="action-icon"
          title="Editar"
        >
          <Edit2 size={14} />
        </button>
        <button 
          onClick={() => onDelete(path)} 
          className="action-icon delete"
          title="Eliminar"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
}

export default FolderItem;
