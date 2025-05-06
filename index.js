const scriptsById = {
    "c7f990f9-7608-4f73-918f-15647c7ae53b": {
      scriptCode: `
        if (tags.isOn && tags.isExist) methods.fill("c7f990f9-7608-4f73-918f-15647c7ae53b", "yellow")
        else methods.fill("c7f990f9-7608-4f73-918f-15647c7ae53b", "gray")
        if(tags.isOn && tags.rotate === 50){
            methods.rotate("c7f990f9-7608-4f73-918f-15647c7ae53b", 50)
        }
      `,
      internalTags: {
        isOn: true,
        isExist: false,
        rotate: 50
      }
    },
    "ceacf5f2-2f4c-40b6-8b1b-5bd34f47b4ee": {
      scriptCode: `
        if (tags.rotate) methods.rotate("ceacf5f2-2f4c-40b6-8b1b-5bd34f47b4ee", 45)
      `,
      internalTags: {
        rotate: true
      }
    },
    "6495a835-e5c2-4a1e-aed5-c6aee253f044": {
        scriptCode: `
        if(tags.scale > 50){
        methods.fill("6495a835-e5c2-4a1e-aed5-c6aee253f044", "yellow")
        }else{
        methods.fill("6495a835-e5c2-4a1e-aed5-c6aee253f044", "gray")
        }
        `,
        internalTags: {
            scale: 50
          }
    }
  };
  
const methods = {
    fill: (id, color) => {
        console.log('===>id fill', id)
        console.log('===>color fill',color)
        return { id, color }
    },
    setColor: (id, color) => {
        console.log('===>id setColor',id)
        console.log('===>color setColor',color)
        return { action: 'setColor', color }
    },
    rotate: (id, angle) => {
        console.log('===>rotate id', id)
        console.log('===>rotate angle',angle)
        return { action: 'rotate', angle }
    },
    // Добавляй сколько угодно
  };

  function runScript(scriptCode, tags, methods) {
    const wrapper = `
      "use strict";
      return (function(tags, methods) {
        ${scriptCode}
      })(tags, methods);
    `;
    try {
      const fn = new Function("tags", "methods", wrapper);
      return fn(tags, methods);
    } catch (err) {
      console.error("Ошибка при выполнении скрипта:", err.message);
      return null;
    }
  }
  
  
  function applyScriptToSvgElement(svgJson, scriptsById) {
    const traverse = (element) => {
      const id = element.attributes?.id;
      if (id && scriptsById[id]) {
        const { scriptCode, internalTags } = scriptsById[id];
        const result = runScript(scriptCode, internalTags, methods);
  
        if (result) {
          if (result.action === "setColor") {
            const style = element.attributes.style || "";
            const newStyle = style.replace(/fill:\s*[^;]+/, `fill: ${result.color}`);
            element.attributes.style = newStyle.includes("fill:") ? newStyle : `${style}; fill: ${result.color}`;
          }
  
          if (result.action === "rotate") {
            element.attributes.transform = `rotate(${result.angle})`;
          }
  
          if (result.action === "fill") {
            // Обработка кастомной логики
          }
        }
      }
  
      if (Array.isArray(element.children)) {
        element.children.forEach(traverse);
      }
    };
  
    traverse(svgJson);
  }

  applyScriptToSvgElement(figuresJson, scriptsById);

