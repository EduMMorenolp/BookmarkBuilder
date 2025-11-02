// Plantillas predefinidas de marcadores
export const templates = {
  fullstack: {
    id: 'fullstack',
    name: '🚀 Full Stack Developer',
    description: 'MERN, Python/Django, Vue/Vite',
    structure: [
      {
        id: 'frontend',
        type: 'folder',
        name: '🧩 FRONTEND',
        children: [
          { id: 'react', type: 'link', name: 'React Docs', url: 'https://react.dev/' },
          { id: 'vite', type: 'link', name: 'Vite', url: 'https://vitejs.dev/' },
          { id: 'tailwind', type: 'link', name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
          { id: 'vue', type: 'link', name: 'Vue.js', url: 'https://vuejs.org/' },
          { id: 'next', type: 'link', name: 'Next.js', url: 'https://nextjs.org/' },
        ]
      },
      {
        id: 'backend',
        type: 'folder',
        name: '⚙️ BACKEND',
        children: [
          { id: 'node', type: 'link', name: 'Node.js', url: 'https://nodejs.org/' },
          { id: 'express', type: 'link', name: 'Express.js', url: 'https://expressjs.com/' },
          { id: 'django', type: 'link', name: 'Django', url: 'https://www.djangoproject.com/' },
          { id: 'fastapi', type: 'link', name: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
          { id: 'nestjs', type: 'link', name: 'NestJS', url: 'https://nestjs.com/' },
        ]
      },
      {
        id: 'database',
        type: 'folder',
        name: '💾 DATABASES',
        children: [
          { id: 'mongodb', type: 'link', name: 'MongoDB', url: 'https://www.mongodb.com/' },
          { id: 'postgresql', type: 'link', name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
          { id: 'mysql', type: 'link', name: 'MySQL', url: 'https://www.mysql.com/' },
          { id: 'redis', type: 'link', name: 'Redis', url: 'https://redis.io/' },
        ]
      },
      {
        id: 'tools',
        type: 'folder',
        name: '🛠️ TOOLS & DEVOPS',
        children: [
          { id: 'git', type: 'link', name: 'Git', url: 'https://git-scm.com/' },
          { id: 'docker', type: 'link', name: 'Docker', url: 'https://www.docker.com/' },
          { id: 'github', type: 'link', name: 'GitHub', url: 'https://github.com/' },
          { id: 'vscode', type: 'link', name: 'VS Code', url: 'https://code.visualstudio.com/' },
        ]
      }
    ]
  },
  
  frontend: {
    id: 'frontend',
    name: '🎨 Frontend Developer',
    description: 'React, Vue, Angular, CSS',
    structure: [
      {
        id: 'frameworks',
        type: 'folder',
        name: '⚛️ FRAMEWORKS',
        children: [
          { id: 'react', type: 'link', name: 'React', url: 'https://react.dev/' },
          { id: 'vue', type: 'link', name: 'Vue.js', url: 'https://vuejs.org/' },
          { id: 'angular', type: 'link', name: 'Angular', url: 'https://angular.io/' },
          { id: 'svelte', type: 'link', name: 'Svelte', url: 'https://svelte.dev/' },
        ]
      },
      {
        id: 'styling',
        type: 'folder',
        name: '🎨 STYLING',
        children: [
          { id: 'tailwind', type: 'link', name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
          { id: 'bootstrap', type: 'link', name: 'Bootstrap', url: 'https://getbootstrap.com/' },
          { id: 'sass', type: 'link', name: 'Sass', url: 'https://sass-lang.com/' },
          { id: 'materialui', type: 'link', name: 'Material-UI', url: 'https://mui.com/' },
        ]
      },
      {
        id: 'tools',
        type: 'folder',
        name: '🔧 BUILD TOOLS',
        children: [
          { id: 'vite', type: 'link', name: 'Vite', url: 'https://vitejs.dev/' },
          { id: 'webpack', type: 'link', name: 'Webpack', url: 'https://webpack.js.org/' },
          { id: 'npm', type: 'link', name: 'npm', url: 'https://www.npmjs.com/' },
        ]
      },
      {
        id: 'resources',
        type: 'folder',
        name: '📚 LEARNING',
        children: [
          { id: 'mdn', type: 'link', name: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
          { id: 'css-tricks', type: 'link', name: 'CSS-Tricks', url: 'https://css-tricks.com/' },
          { id: 'freecodecamp', type: 'link', name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/' },
        ]
      }
    ]
  },

  backend: {
    id: 'backend',
    name: '⚙️ Backend Developer',
    description: 'Node, Python, APIs, Databases',
    structure: [
      {
        id: 'languages',
        type: 'folder',
        name: '💻 LANGUAGES',
        children: [
          { id: 'nodejs', type: 'link', name: 'Node.js', url: 'https://nodejs.org/' },
          { id: 'python', type: 'link', name: 'Python', url: 'https://www.python.org/' },
          { id: 'go', type: 'link', name: 'Go', url: 'https://golang.org/' },
          { id: 'java', type: 'link', name: 'Java', url: 'https://www.java.com/' },
        ]
      },
      {
        id: 'frameworks',
        type: 'folder',
        name: '🏗️ FRAMEWORKS',
        children: [
          { id: 'express', type: 'link', name: 'Express.js', url: 'https://expressjs.com/' },
          { id: 'django', type: 'link', name: 'Django', url: 'https://www.djangoproject.com/' },
          { id: 'fastapi', type: 'link', name: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
          { id: 'spring', type: 'link', name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot' },
        ]
      },
      {
        id: 'databases',
        type: 'folder',
        name: '💾 DATABASES',
        children: [
          { id: 'mongodb', type: 'link', name: 'MongoDB', url: 'https://www.mongodb.com/' },
          { id: 'postgresql', type: 'link', name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
          { id: 'redis', type: 'link', name: 'Redis', url: 'https://redis.io/' },
          { id: 'elasticsearch', type: 'link', name: 'Elasticsearch', url: 'https://www.elastic.co/' },
        ]
      },
      {
        id: 'apis',
        type: 'folder',
        name: '🌐 APIs & DOCS',
        children: [
          { id: 'swagger', type: 'link', name: 'Swagger', url: 'https://swagger.io/' },
          { id: 'postman', type: 'link', name: 'Postman', url: 'https://www.postman.com/' },
          { id: 'graphql', type: 'link', name: 'GraphQL', url: 'https://graphql.org/' },
        ]
      }
    ]
  },

  qa: {
    id: 'qa',
    name: '🧪 QA & Testing',
    description: 'Testing tools, automation, CI/CD',
    structure: [
      {
        id: 'testing',
        type: 'folder',
        name: '🔬 TESTING FRAMEWORKS',
        children: [
          { id: 'jest', type: 'link', name: 'Jest', url: 'https://jestjs.io/' },
          { id: 'vitest', type: 'link', name: 'Vitest', url: 'https://vitest.dev/' },
          { id: 'cypress', type: 'link', name: 'Cypress', url: 'https://www.cypress.io/' },
          { id: 'playwright', type: 'link', name: 'Playwright', url: 'https://playwright.dev/' },
          { id: 'selenium', type: 'link', name: 'Selenium', url: 'https://www.selenium.dev/' },
        ]
      },
      {
        id: 'automation',
        type: 'folder',
        name: '🤖 AUTOMATION',
        children: [
          { id: 'github-actions', type: 'link', name: 'GitHub Actions', url: 'https://github.com/features/actions' },
          { id: 'jenkins', type: 'link', name: 'Jenkins', url: 'https://www.jenkins.io/' },
          { id: 'gitlab-ci', type: 'link', name: 'GitLab CI', url: 'https://docs.gitlab.com/ee/ci/' },
        ]
      },
      {
        id: 'performance',
        type: 'folder',
        name: '⚡ PERFORMANCE',
        children: [
          { id: 'lighthouse', type: 'link', name: 'Lighthouse', url: 'https://developer.chrome.com/docs/lighthouse/' },
          { id: 'jmeter', type: 'link', name: 'Apache JMeter', url: 'https://jmeter.apache.org/' },
          { id: 'k6', type: 'link', name: 'k6', url: 'https://k6.io/' },
        ]
      },
      {
        id: 'tools',
        type: 'folder',
        name: '🛠️ TOOLS',
        children: [
          { id: 'browserstack', type: 'link', name: 'BrowserStack', url: 'https://www.browserstack.com/' },
          { id: 'saucelabs', type: 'link', name: 'Sauce Labs', url: 'https://saucelabs.com/' },
        ]
      }
    ]
  },

  ai: {
    id: 'ai',
    name: '🤖 AI & Machine Learning',
    description: 'AI Models, ML frameworks, LLMs',
    structure: [
      {
        id: 'llms',
        type: 'folder',
        name: '🧠 LLMs & AI PLATFORMS',
        children: [
          { id: 'openai', type: 'link', name: 'OpenAI', url: 'https://platform.openai.com/' },
          { id: 'anthropic', type: 'link', name: 'Anthropic Claude', url: 'https://www.anthropic.com/' },
          { id: 'huggingface', type: 'link', name: 'Hugging Face', url: 'https://huggingface.co/' },
          { id: 'cohere', type: 'link', name: 'Cohere', url: 'https://cohere.com/' },
        ]
      },
      {
        id: 'frameworks',
        type: 'folder',
        name: '🔧 ML FRAMEWORKS',
        children: [
          { id: 'tensorflow', type: 'link', name: 'TensorFlow', url: 'https://www.tensorflow.org/' },
          { id: 'pytorch', type: 'link', name: 'PyTorch', url: 'https://pytorch.org/' },
          { id: 'langchain', type: 'link', name: 'LangChain', url: 'https://www.langchain.com/' },
          { id: 'keras', type: 'link', name: 'Keras', url: 'https://keras.io/' },
        ]
      },
      {
        id: 'tools',
        type: 'folder',
        name: '🛠️ TOOLS & PLATFORMS',
        children: [
          { id: 'jupyter', type: 'link', name: 'Jupyter', url: 'https://jupyter.org/' },
          { id: 'colab', type: 'link', name: 'Google Colab', url: 'https://colab.research.google.com/' },
          { id: 'kaggle', type: 'link', name: 'Kaggle', url: 'https://www.kaggle.com/' },
        ]
      },
      {
        id: 'learning',
        type: 'folder',
        name: '📚 LEARNING',
        children: [
          { id: 'coursera', type: 'link', name: 'Coursera ML', url: 'https://www.coursera.org/learn/machine-learning' },
          { id: 'fast-ai', type: 'link', name: 'fast.ai', url: 'https://www.fast.ai/' },
          { id: 'paperswithcode', type: 'link', name: 'Papers with Code', url: 'https://paperswithcode.com/' },
        ]
      }
    ]
  },

  design: {
    id: 'design',
    name: '🎨 UX/UI Designer',
    description: 'Figma, Design Systems, Accessibility',
    structure: [
      {
        id: 'design-tools',
        type: 'folder',
        name: '🎨 DESIGN TOOLS',
        children: [
          { id: 'figma', type: 'link', name: 'Figma', url: 'https://www.figma.com/' },
          { id: 'sketch', type: 'link', name: 'Sketch', url: 'https://www.sketch.com/' },
          { id: 'adobe-xd', type: 'link', name: 'Adobe XD', url: 'https://www.adobe.com/products/xd.html' },
          { id: 'framer', type: 'link', name: 'Framer', url: 'https://www.framer.com/' },
        ]
      },
      {
        id: 'inspiration',
        type: 'folder',
        name: '✨ INSPIRATION',
        children: [
          { id: 'dribbble', type: 'link', name: 'Dribbble', url: 'https://dribbble.com/' },
          { id: 'behance', type: 'link', name: 'Behance', url: 'https://www.behance.net/' },
          { id: 'awwwards', type: 'link', name: 'Awwwards', url: 'https://www.awwwards.com/' },
        ]
      },
      {
        id: 'accessibility',
        type: 'folder',
        name: '♿ ACCESSIBILITY',
        children: [
          { id: 'wcag', type: 'link', name: 'WCAG Guidelines', url: 'https://www.w3.org/WAI/WCAG21/quickref/' },
          { id: 'a11y', type: 'link', name: 'A11Y Project', url: 'https://www.a11yproject.com/' },
          { id: 'contrast', type: 'link', name: 'Contrast Checker', url: 'https://webaim.org/resources/contrastchecker/' },
        ]
      },
      {
        id: 'resources',
        type: 'folder',
        name: '🎁 RESOURCES',
        children: [
          { id: 'unsplash', type: 'link', name: 'Unsplash', url: 'https://unsplash.com/' },
          { id: 'iconify', type: 'link', name: 'Iconify', url: 'https://iconify.design/' },
          { id: 'fonts', type: 'link', name: 'Google Fonts', url: 'https://fonts.google.com/' },
        ]
      }
    ]
  }
};

export const getTemplateById = (id) => {
  return templates[id] || null;
};

export const getAllTemplates = () => {
  return Object.values(templates);
};
