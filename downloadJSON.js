  document.getElementById('download-json-btn').addEventListener('click', () => {  
        const componentData = {
         figuresJson,
         figureScripts,
        };
      
        exportComponent(componentData);
    });
    
        const exportComponent = (componentData) => {
        const json = JSON.stringify(componentData, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'component.json';
        a.click();
        URL.revokeObjectURL(url);
      };
  