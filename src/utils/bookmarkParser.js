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

// Parsea HTML Netscape a estructura JSON
export const htmlToJson = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  
  let idCounter = 0;
  const generateId = () => `item_${idCounter++}`;
  
  const parseNode = (node) => {
    const items = [];
    const children = Array.from(node.children);
    
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      
      if (child.tagName === 'DT') {
        const h3 = child.querySelector('H3');
        const a = child.querySelector('A');
        
        if (h3) {
          // Es una carpeta
          const folderName = h3.textContent.trim();
          const nextSibling = children[i + 1];
          let folderChildren = [];
          
          if (nextSibling && nextSibling.tagName === 'DL') {
            folderChildren = parseNode(nextSibling);
            i++; // Saltar el DL ya procesado
          }
          
          items.push({
            id: generateId(),
            type: 'folder',
            name: folderName,
            children: folderChildren
          });
        } else if (a) {
          // Es un enlace
          items.push({
            id: generateId(),
            type: 'link',
            name: a.textContent.trim(),
            url: a.getAttribute('HREF') || ''
          });
        }
      }
    }
    
    return items;
  };
  
  const rootDL = doc.querySelector('DL');
  if (rootDL) {
    return parseNode(rootDL);
  }
  
  return [];
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
