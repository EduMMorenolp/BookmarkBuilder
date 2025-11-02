// Respuestas simuladas del Chat IA
export const aiResponses = {
  react: {
    keywords: ['react', 'reactjs', 'hooks', 'jsx'],
    response: '¡Perfecto! Te recomiendo marcadores para desarrollo con React:',
    structure: [
      {
        id: 'react-essentials',
        type: 'folder',
        name: '⚛️ React Essentials',
        children: [
          { id: 'react-docs', type: 'link', name: 'React Documentation', url: 'https://react.dev/' },
          { id: 'react-patterns', type: 'link', name: 'React Patterns', url: 'https://reactpatterns.com/' },
          { id: 'usehooks', type: 'link', name: 'useHooks', url: 'https://usehooks.com/' },
        ]
      }
    ]
  },
  
  firebase: {
    keywords: ['firebase', 'backend', 'database', 'auth'],
    response: 'Genial, aquí tienes recursos para Firebase:',
    structure: [
      {
        id: 'firebase',
        type: 'folder',
        name: '🔥 Firebase',
        children: [
          { id: 'firebase-docs', type: 'link', name: 'Firebase Docs', url: 'https://firebase.google.com/docs' },
          { id: 'firebase-auth', type: 'link', name: 'Firebase Auth', url: 'https://firebase.google.com/docs/auth' },
          { id: 'firestore', type: 'link', name: 'Firestore', url: 'https://firebase.google.com/docs/firestore' },
        ]
      }
    ]
  },
  
  testing: {
    keywords: ['testing', 'test', 'qa', 'cypress', 'jest'],
    response: 'Te sugiero estas herramientas de testing:',
    structure: [
      {
        id: 'testing-tools',
        type: 'folder',
        name: '🧪 Testing Tools',
        children: [
          { id: 'vitest', type: 'link', name: 'Vitest', url: 'https://vitest.dev/' },
          { id: 'cypress', type: 'link', name: 'Cypress', url: 'https://www.cypress.io/' },
          { id: 'testing-library', type: 'link', name: 'Testing Library', url: 'https://testing-library.com/' },
        ]
      }
    ]
  },
  
  design: {
    keywords: ['design', 'figma', 'ui', 'ux', 'diseño'],
    response: 'Aquí tienes recursos para diseño UI/UX:',
    structure: [
      {
        id: 'design-resources',
        type: 'folder',
        name: '🎨 Design Resources',
        children: [
          { id: 'figma', type: 'link', name: 'Figma', url: 'https://www.figma.com/' },
          { id: 'dribbble', type: 'link', name: 'Dribbble', url: 'https://dribbble.com/' },
          { id: 'tailwind', type: 'link', name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
        ]
      }
    ]
  },
  
  ai: {
    keywords: ['ai', 'inteligencia artificial', 'openai', 'chatgpt', 'llm'],
    response: 'Te recomiendo estos recursos de IA:',
    structure: [
      {
        id: 'ai-resources',
        type: 'folder',
        name: '🤖 AI Resources',
        children: [
          { id: 'openai', type: 'link', name: 'OpenAI Platform', url: 'https://platform.openai.com/' },
          { id: 'huggingface', type: 'link', name: 'Hugging Face', url: 'https://huggingface.co/' },
          { id: 'langchain', type: 'link', name: 'LangChain', url: 'https://www.langchain.com/' },
        ]
      }
    ]
  },
  
  python: {
    keywords: ['python', 'django', 'flask', 'fastapi'],
    response: 'Recursos para desarrollo con Python:',
    structure: [
      {
        id: 'python-dev',
        type: 'folder',
        name: '🐍 Python Development',
        children: [
          { id: 'python-docs', type: 'link', name: 'Python Docs', url: 'https://docs.python.org/' },
          { id: 'django', type: 'link', name: 'Django', url: 'https://www.djangoproject.com/' },
          { id: 'fastapi', type: 'link', name: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
        ]
      }
    ]
  },

  default: {
    response: 'Puedo ayudarte con recursos para: React, Firebase, Testing, Design, AI, Python, Node.js, y más. ¿Qué necesitas específicamente?',
    structure: []
  }
};

// Procesa el mensaje del usuario y retorna una respuesta
export const processAiMessage = (message) => {
  const lowerMessage = message.toLowerCase();
  
  // Busca coincidencias en las keywords
  for (const [key, value] of Object.entries(aiResponses)) {
    if (key === 'default') continue;
    
    const hasMatch = value.keywords.some(keyword => 
      lowerMessage.includes(keyword)
    );
    
    if (hasMatch) {
      return {
        message: value.response,
        structure: value.structure,
        hasStructure: value.structure.length > 0
      };
    }
  }
  
  // Respuesta por defecto
  return {
    message: aiResponses.default.response,
    structure: [],
    hasStructure: false
  };
};
