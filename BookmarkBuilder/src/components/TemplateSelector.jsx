import { getAllTemplates } from '../utils/templates';
import { CheckCircle } from 'lucide-react';

function TemplateSelector({ onSelectTemplate }) {
  const templates = getAllTemplates();

  return (
    <div className="template-selector">
      <div className="template-header">
        <h2>🎯 Plantillas Predefinidas</h2>
        <p>Selecciona una plantilla para comenzar rápidamente</p>
      </div>

      <div className="template-grid">
        {templates.map(template => (
          <div key={template.id} className="template-card">
            <div className="template-card-header">
              <h3>{template.name}</h3>
              <span className="template-icon">{template.name.charAt(0)}</span>
            </div>
            
            <p className="template-description">{template.description}</p>
            
            <div className="template-preview">
              <p className="preview-title">Incluye:</p>
              <ul>
                {template.structure.slice(0, 3).map((folder, idx) => (
                  <li key={idx}>
                    <CheckCircle size={14} />
                    <span>{folder.name}</span>
                  </li>
                ))}
                {template.structure.length > 3 && (
                  <li className="more-items">
                    +{template.structure.length - 3} categorías más
                  </li>
                )}
              </ul>
            </div>

            <button 
              className="template-btn"
              onClick={() => onSelectTemplate(template)}
            >
              Usar esta plantilla
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelector;
