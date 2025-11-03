import { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Play, CheckCircle } from 'lucide-react';

function Tutorial({ isOpen, onClose, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const tutorialSteps = [
    {
      id: 'welcome',
      title: '¡Bienvenido a BookmarkBuilder! 🎉',
      content: 'Te guiaremos por las principales funcionalidades para que puedas organizar tus marcadores como un profesional.',
      target: null,
      position: 'center',
      action: null
    },
    {
      id: 'sidebar',
      title: 'Navegación Principal 🧭',
      content: 'En la barra lateral encontrarás todas las secciones principales: Plantillas, Mis Marcadores, Mis Listas y Chat IA.',
      target: '.sidebar-nav',
      position: 'right',
      action: null
    },
    {
      id: 'templates',
      title: 'Plantillas Predefinidas 📋',
      content: 'Comienza rápidamente con plantillas profesionales. Cada plantilla crea automáticamente una nueva lista.',
      target: '.nav-item.blue',
      position: 'right',
      action: null
    },
    {
      id: 'my-lists',
      title: 'Gestionar Listas 📚',
      content: 'En "Mis Listas" puedes crear, duplicar, renombrar y eliminar tus colecciones de marcadores.',
      target: '.nav-item.orange',
      position: 'right',
      action: null
    },
    {
      id: 'editor',
      title: 'Editor de Marcadores ✏️',
      content: 'En "Mis Marcadores" puedes editar la estructura de tus marcadores: añadir carpetas, enlaces, y organizarlos.',
      target: '.nav-item.green',
      position: 'right',
      action: null
    },
    {
      id: 'import-export',
      title: 'Importar y Exportar 📤',
      content: 'Puedes importar marcadores desde tu navegador y exportar tus listas como archivos HTML.',
      target: '.sidebar-actions',
      position: 'right',
      action: null
    },
    {
      id: 'completion',
      title: '¡Tutorial Completado! 🎊',
      content: 'Ya conoces las funcionalidades principales. ¡Ahora puedes comenzar a organizar tus marcadores como un profesional!',
      target: null,
      position: 'center',
      action: null
    }
  ];

  const currentStepData = tutorialSteps[currentStep];

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      setCurrentStep(currentStep + 1);
    } else {
      completeTutorial();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipTutorial = () => {
    onClose();
  };

  const completeTutorial = () => {
    setCompletedSteps(prev => new Set([...prev, currentStep]));
    localStorage.setItem('tutorialCompleted', 'true');
    onComplete && onComplete();
    onClose();
  };

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  // Highlight target element (más sutil)
  useEffect(() => {
    if (currentStepData.target) {
      const element = document.querySelector(currentStepData.target);
      if (element) {
        element.classList.add('tutorial-highlight');
        // No hacer scroll automático para evitar molestias
        // element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    return () => {
      // Remove highlight from all elements
      document.querySelectorAll('.tutorial-highlight').forEach(el => {
        el.classList.remove('tutorial-highlight');
      });
    };
  }, [currentStep, currentStepData.target]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay más sutil */}
      <div className="tutorial-overlay" onClick={skipTutorial} />
      
      {/* Tutorial Modal */}
      <div className={`tutorial-modal ${currentStepData.position}`}>
        <div className="tutorial-header">
          <div className="tutorial-progress">
            <span className="tutorial-step-counter">
              {currentStep + 1} de {tutorialSteps.length}
            </span>
            <button className="tutorial-close" onClick={skipTutorial}>
              <X size={18} />
            </button>
          </div>
          
          <div className="tutorial-progress-bar">
            <div 
              className="tutorial-progress-fill"
              style={{ width: `${((currentStep + 1) / tutorialSteps.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="tutorial-content">
          <h3 className="tutorial-title">{currentStepData.title}</h3>
          <p className="tutorial-description">{currentStepData.content}</p>
          
          {currentStepData.action && (
            <div className="tutorial-action">
              <span className="tutorial-action-icon">
                {currentStepData.action.type === 'click' && <Play size={16} />}
                {currentStepData.action.type === 'hover' && '👆'}
                {currentStepData.action.type === 'highlight' && '👀'}
              </span>
              <span className="tutorial-action-text">{currentStepData.action.text}</span>
            </div>
          )}
        </div>

        <div className="tutorial-navigation">
          <button 
            className="tutorial-btn tutorial-btn-secondary"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            <ArrowLeft size={16} />
            Anterior
          </button>

          <div className="tutorial-dots">
            {tutorialSteps.map((_, index) => (
              <button
                key={index}
                className={`tutorial-dot ${index === currentStep ? 'active' : ''} ${completedSteps.has(index) ? 'completed' : ''}`}
                onClick={() => goToStep(index)}
                title={`Paso ${index + 1}: ${tutorialSteps[index].title}`}
              >
                {completedSteps.has(index) ? (
                  <CheckCircle size={14} />
                ) : (
                  index + 1
                )}
              </button>
            ))}
          </div>

          {currentStep === tutorialSteps.length - 1 ? (
            <button 
              className="tutorial-btn tutorial-btn-primary"
              onClick={completeTutorial}
            >
              <CheckCircle size={16} />
              ¡Empezar!
            </button>
          ) : (
            <button 
              className="tutorial-btn tutorial-btn-primary"
              onClick={nextStep}
            >
              Siguiente
              <ArrowRight size={16} />
            </button>
          )}
        </div>

        {currentStep > 0 && (
          <button 
            className="tutorial-skip"
            onClick={skipTutorial}
          >
            Saltar tutorial
          </button>
        )}
      </div>
    </>
  );
}

export default Tutorial;