const serverTags = {
    Pump_1_status: 'on',
    Tank_1_level: 75,
    Tank_2_open: true,
    Tank_2_level: 50
  };

const figureScripts = {
      scriptCode: `
        if(tags.isOn === 'on' && tags.rotate > 50){ 
          methods.setAngle("c7f990f9-7608-4f73-918f-15647c7ae53b", 50);
          methods.setBorderColor("c7f990f9-7608-4f73-918f-15647c7ae53b", "green");
        }
        if (tags.isOpen && tags.scale === 50) {
          methods.setAngle("c7f990f9-7608-4f73-918f-15647c7ae53b", 120);
        }
        if (tags.rotate > 75) {
          methods.setAngle("ceacf5f2-2f4c-40b6-8b1b-5bd34f47b4ee", 45);
        }
        if(tags.scale > 50){
          methods.setBackgroundColor("6495a835-e5c2-4a1e-aed5-c6aee253f044", "yellow");
        } else {
          methods.setBackgroundColor("6495a835-e5c2-4a1e-aed5-c6aee253f044", "gray");
        }
      `,
      internalTags: {
        isOn: "Pump_1_status", //'on'
        rotate: "Tank_1_level", //75
        isOpen: "Tank_2_open", // true
        scale: "Tank_2_level" //50
      },
      methodTriggers: {
        isOpen: `methods.setBorderColor("c7f990f9-7608-4f73-918f-15647c7ae111", "purpule")`
      }
  };
  

  const methods = {
    setBackgroundColor: (id, color) => {
        console.log('===>id setBackgroundColor', id)
        console.log('===>color setBackgroundColor',color)
        return { id, color }
    },
    setBorderColor: (id, color) => {
        console.log('===>id setBorderColor',id)
        console.log('===>color setBorderColor',color)
        return { action: 'setBorderColor', color }
    },
    setAngle: (id, angle) => {
        console.log('===>setAngle id', id)
        console.log('===>setAngle angle',angle)
        return { action: 'setAngle', angle }
    },
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

  function runMethod (method) {
    const wrapper = `
    "use strict";
    return (function(method) {
      ${method}
    })(method);
  `;
        try {
            const fn = new Function("method", wrapper)
            fn(method)
        } catch (err) {
            console.error("Ошибка при выполнении метода:", err.message);
            return null;
        }
  }

function applyMethodTriggers(methodTriggers, tags) {
    for (const field in methodTriggers) {
      if (tags[field] === true) {
        const method = methodTriggers[field];
        runMethod(method)
      }
    }
  }
  
  function resolveInternalTags(internalTags, serverTags) {
    const resolved = {};
    for (const key in internalTags) {
      const serverTagName = internalTags[key];
      resolved[key] = serverTags[serverTagName];
    }
    return resolved;
  }
  
  function applyScriptToFigure(figureJson, figureScripts, serverTags) {
    const figureId = figureJson.attributes?.id;
    if (!figureId) return;
  
    const { scriptCode, internalTags, methodTriggers } = figureScripts;
    const tags = resolveInternalTags(internalTags, serverTags);

    applyMethodTriggers(methodTriggers, tags);
    runScript(scriptCode, tags, methods);
  }
  
  applyScriptToFigure(figuresJson, figureScripts, serverTags);

