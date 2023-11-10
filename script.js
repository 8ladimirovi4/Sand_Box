// Создаем layout и добавляем в него tree-компоненты
var layout = webix.ui({
  rows: [
    {
      view: "tabbar",
      id: "tabbar",
      value: "treeList", // выбранная вкладка по умолчанию
  
      options: [
          { id: "treeList", value: "List" },
          { id: "treeForm", value: "Form" },
          { id: "treeEmpty", value: "Empty" }
      ],
      on: {
      
          onChange: function (id) {
              // Обработчик изменения вкладки
              $$("treeList").hide();
              $$("treeForm").hide();
              $$("treeEmpty").hide();
              
              // Показываем tree, соответствующий выбранной вкладке
              $$(id).show();
          }
      },
    
    },
      { 
        view:"multiview",
        cells: [
        {
          view: "tree",
          id: "treeList",
          animate:{ type:"slide",  direction: "right"  },
          data: [
              { id: 1, value: "Item 1", data: [] },
              { id: 2, value: "Item 2", data: [] },
              // Добавьте данные по вашему усмотрению
          ],
          
        },
        {
          view: "tree",
          id: "treeEmpty",
          animate:{ type:"slide",  direction: "left"  },
          data: [
              { id: 1, value: "Empty Item 1", data: [] },
              { id: 2, value: "Empty Item 2", data: [] },
              // Добавьте данные по вашему усмотрению
          ],
         
        },
        {
          view: "tree",
          id: "treeForm",
          animate:{ type:"slide",  direction: "left"  },
          data: [
              { id: 1, value: "Form Item 1", data: [] },
              { id: 2, value: "Form Item 2", data: [] },
              // Добавьте данные по вашему усмотрению
          ],
         
        }
      ] }
  ]
});

