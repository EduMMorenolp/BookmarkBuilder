import { FolderOpen, Layout, MessageSquare, Download, Moon, Sun, FileUp, List } from 'lucide-react';

function Sidebar({ activeView, setActiveView, onExport, onImport, darkMode, toggleDarkMode }) {
  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.html';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          onImport(event.target.result);
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const menuItems = [
    { id: 'templates', icon: <Layout size={20} />, label: 'Plantillas', color: 'blue' },
    { id: 'editor', icon: <FolderOpen size={20} />, label: 'Mis Marcadores', color: 'green' },
    { id: 'lists', icon: <List size={20} />, label: 'Mis Listas', color: 'orange' },
    { id: 'chat', icon: <MessageSquare size={20} />, label: 'Chat IA', color: 'purple' },
  ];

  return (
    <aside className={`sidebar ${darkMode ? 'dark' : ''}`}>
      <div className="sidebar-header">
        <h1 className="sidebar-title">📚 BookmarkBuilder</h1>
        <p className="sidebar-subtitle">Generador de Marcadores</p>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activeView === item.id ? 'active' : ''} ${item.color}`}
            onClick={() => setActiveView(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-actions">
        <button className="action-btn import-btn" onClick={handleImport}>
          <FileUp size={18} />
          <span>Importar HTML</span>
        </button>
        
        <button className="action-btn export-btn" onClick={onExport}>
          <Download size={18} />
          <span>Exportar HTML</span>
        </button>

        <button className="action-btn theme-btn" onClick={toggleDarkMode}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          <span>{darkMode ? 'Modo Claro' : 'Modo Oscuro'}</span>
        </button>
      </div>

      <div className="sidebar-footer">
        <p>v1.0.0 | 2025</p>
      </div>
    </aside>
  );
}

export default Sidebar;
