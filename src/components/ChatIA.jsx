import { useState } from 'react';
import { Send, Bot, User, CheckCircle } from 'lucide-react';
import { processAiMessage } from '../utils/aiHelper';

function ChatIA({ onApplySuggestion }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '¡Hola! 👋 Soy tu asistente IA. Puedo ayudarte a encontrar marcadores específicos. ¿Qué necesitas? Por ejemplo: "Dame recursos para React y Firebase" o "Necesito herramientas de testing".'
    }
  ]);
  const [input, setInput] = useState('');
  const [suggestedStructure, setSuggestedStructure] = useState(null);

  const handleSend = () => {
    if (!input.trim()) return;

    // Añadir mensaje del usuario
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    // Procesar con IA
    const aiResponse = processAiMessage(input);
    
    // Añadir respuesta de IA
    const assistantMessage = { role: 'assistant', content: aiResponse.message };
    setMessages(prev => [...prev, assistantMessage]);

    // Guardar estructura sugerida
    if (aiResponse.hasStructure) {
      setSuggestedStructure(aiResponse.structure);
    } else {
      setSuggestedStructure(null);
    }

    setInput('');

    // Hacer scroll al final en dispositivos móviles
    setTimeout(() => {
      const chatMessages = document.querySelector('.chat-messages');
      if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }, 100);
  };

  const handleApply = () => {
    if (suggestedStructure) {
      onApplySuggestion(suggestedStructure);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '✅ ¡Perfecto! He añadido los marcadores sugeridos a tu editor.'
      }]);
      setSuggestedStructure(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-ia">
      <div className="chat-header">
        <h2>💬 Chat IA - Asistente de Marcadores</h2>
        <p className="chat-subtitle">Pregúntame sobre marcadores que necesites</p>
      </div>

      {/* Banner de advertencia - Fase de prueba */}
      <div className="beta-banner">
        <div className="beta-icon">⚠️</div>
        <div className="beta-content">
          <h3>Fase de Prueba</h3>
          <p>Esta funcionalidad está en desarrollo. No está conectada con un modelo de IA real.</p>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <div className="message-icon">
              {message.role === 'user' ? <User size={18} /> : <Bot size={18} />}
            </div>
            <div className="message-content">
              <p>{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {suggestedStructure && (
        <div className="suggestion-box">
          <div className="suggestion-header">
            <CheckCircle size={18} />
            <span>Sugerencia lista para aplicar</span>
          </div>
          <button className="apply-btn" onClick={handleApply}>
            Aplicar sugerencia al editor
          </button>
        </div>
      )}

      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Ej: Dame marcadores para desarrollo con React..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button 
          className="send-btn"
          onClick={handleSend}
          disabled={!input.trim()}
        >
          <Send size={20} />
        </button>
      </div>

      <div className="chat-suggestions">
        <p className="suggestions-title">💡 Sugerencias rápidas:</p>
        <div className="quick-buttons">
          <button onClick={() => setInput('Dame recursos para React y TypeScript')}>
            React + TypeScript
          </button>
          <button onClick={() => setInput('Necesito herramientas de testing')}>
            Testing Tools
          </button>
          <button onClick={() => setInput('Recursos de diseño UI/UX')}>
            Design Resources
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatIA;
