// Convierte estructura JSON a HTML Netscape Bookmark File Format
export const jsonToHtml = (bookmarks, title = '🚀 My Bookmarks') => {
  const timestamp = Math.floor(Date.now() / 1000);
  
  const generateHtml = (items, level = 0) => {
    let html = '';
    const indent = ' '.repeat(level * 2);
    
    items.forEach(item => {
      if (item.type === 'folder') {
        html += `${indent}<DT><H3 ADD_DATE="${timestamp}" LAST_MODIFIED="${timestamp}">${item.name}</H3>\n`;
        html += `${indent}<DL><p>\n`;
        if (item.children && item.children.length > 0) {
          html += generateHtml(item.children, level + 1);
        }
        html += `${indent}</DL><p>\n`;
      } else if (item.type === 'link') {
        html += `${indent}<DT><A HREF="${item.url}" ADD_DATE="${timestamp}">${item.name}</A>\n`;
      }
    });
    
    return html;
  };
  
  const content = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
     It will be read and overwritten.
     DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>${title}</H1>
<DL><p>
${generateHtml(bookmarks, 1)}
</DL><p>
`;
  
  return content;
};

// Limpia y normaliza texto
const cleanText = (text) => {
  return text ? text.trim().replace(/\s+/g, ' ') : '';
};

// Parsea HTML Netscape a estructura JSON - Parser completamente reescrito
export const htmlToJson = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  
  let idCounter = 0;
  const generateId = () => `item_${idCounter++}`;
  
  // Nuevo parser que procesa secuencialmente todos los DT y DL
  const parseBookmarkHTML = () => {
    
    // Obtener el primer DL (contenedor raíz)
    const rootDL = doc.querySelector('DL');
    if (!rootDL) {
      console.error('No se encontró DL raíz');
      return [];
    }
    
    // Función para procesar un contenedor DL
    const processDL = (dlElement, depth = 0) => {
      const items = [];
      
      // Obtener todos los hijos directos del DL
      const children = Array.from(dlElement.children);
      
      let i = 0;
      while (i < children.length) {
        const child = children[i];
        
        if (child.tagName === 'DT') {
          // Verificar si es carpeta (H3) o enlace (A)
          const h3 = child.querySelector('H3');
          const a = child.querySelector('A');
          
          if (h3) {
            // Es una carpeta
            const folderName = cleanText(h3.textContent);
            
            if (folderName) {
              // Buscar el DL hijo de múltiples formas
              let childDL = null;
              
              // Método 1: Buscar inmediatamente después en el mismo contenedor
              let j = i + 1;
              while (j < children.length) {
                if (children[j].tagName === 'DL') {
                  childDL = children[j];
                  break;
                }
                if (children[j].tagName === 'DT') {
                  break;
                }
                j++;
              }
              
              // Método 2: Buscar como siguiente elemento hermano del DT
              if (!childDL) {
                let nextSibling = child.nextElementSibling;
                while (nextSibling) {
                  if (nextSibling.tagName === 'DL') {
                    childDL = nextSibling;
                    break;
                  }
                  if (nextSibling.tagName === 'DT') {
                    break;
                  }
                  nextSibling = nextSibling.nextElementSibling;
                }
              }
              
              // Método 3: Buscar DL anidado dentro del mismo DT
              if (!childDL) {
                const nestedDL = child.querySelector('DL');
                if (nestedDL) {
                  childDL = nestedDL;
                }
              }
              
              let folderChildren = [];
              if (childDL) {
                folderChildren = processDL(childDL, depth + 1);
                
                // Si encontramos el DL en el array de children, saltarlo
                const dlIndex = children.indexOf(childDL);
                if (dlIndex > i) {
                  i = dlIndex;
                }
              }
              
              items.push({
                id: generateId(),
                type: 'folder',
                name: folderName,
                children: folderChildren
              });
            }
            
          } else if (a) {
            // Es un enlace
            const linkName = cleanText(a.textContent);
            const linkUrl = cleanText(a.getAttribute('HREF') || '');
            
            if (linkName && linkUrl && linkUrl !== '#') {
              items.push({
                id: generateId(),
                type: 'link',
                name: linkName,
                url: linkUrl
              });
            }
          }
        }
        
        i++;
      }
      
      return items;
    };
    
    return processDL(rootDL);
  };
  
  // Parser alternativo más agresivo
  const parseAlternative = () => {
    const result = [];
    
    // Encontrar todos los DT del documento
    const allDTs = Array.from(doc.querySelectorAll('DT'));
    
    // Agrupar DTs por su DL padre
    const dlGroups = new Map();
    
    allDTs.forEach((dt) => {
      const parentDL = dt.parentElement;
      if (parentDL && parentDL.tagName === 'DL') {
        if (!dlGroups.has(parentDL)) {
          dlGroups.set(parentDL, []);
        }
        dlGroups.get(parentDL).push(dt);
      }
    });
    
    // Procesar cada grupo
    dlGroups.forEach((dts) => {
      
      dts.forEach(dt => {
        const h3 = dt.querySelector('H3');
        const a = dt.querySelector('A');
        
        if (h3) {
          const folderName = cleanText(h3.textContent);
          if (folderName) {
            result.push({
              id: generateId(),
              type: 'folder', 
              name: folderName,
              children: [] // Por ahora carpetas vacías
            });
          }
        } else if (a) {
          const linkName = cleanText(a.textContent);
          const linkUrl = cleanText(a.getAttribute('HREF') || '');
          
          if (linkName && linkUrl && linkUrl !== '#') {
            result.push({
              id: generateId(),
              type: 'link',
              name: linkName,
              url: linkUrl
            });
          }
        }
      });
    });
    
    return result;
  };
  
  try {
    let result = parseBookmarkHTML();
    
    // Si el resultado es insuficiente, usar método alternativo
    if (result.length < 5) {
      const altResult = parseAlternative();
      if (altResult.length > result.length) {
        result = altResult;
      }
    }
    
    return result;
    
  } catch (error) {
    console.error('Error al parsear marcadores:', error);
    return [];
  }
};

// Genera un nombre de archivo con fecha
export const generateFilename = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `mis_marcadores_${year}-${month}-${day}.html`;
};

// Descarga el archivo HTML
export const downloadHtml = (htmlContent, filename) => {
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Clona estructura profunda (evita mutaciones)
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
