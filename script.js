


// webix.ui({
//   rows:[
//     {cols:[
//       { 
//         view:"tree",
//       template:"{common.icon()} {common.checkbox()} {common.folder()} #value#",
//       threeState: true,
//     data: webix.copy(smalltreedata),
//       ready:function(){
//        this.openAll();
//       }
//        },
//       {
//         view:"tree",
//       template:"{common.icon()} {common.checkbox()} {common.folder()} #value#",
//     data: webix.copy(smalltreedata),
//       ready:function(){
//        this.openAll();
  
//      }}
//     ]}
//   ]
// });





webix.ui({
  rows:[
    {cols:[
      { 
        id: 'tree',
        view:"treetable",
       
        threeState: true, // Включаем трёхсостояние чекбоксов
        columns:[
          { id:"value", 
            header:"Films data", 
            template:"{common.treetable()} {common.treecheckbox()} #value#",
             width:300 }
        ],
        data: webix.copy(smalltreedata),
        on:{
          onCheck: function(rowId, colId, state){
            console.log('===>',)
            // Обновляем состояние родительских и дочерних элементов
            updateCheckboxState(this, rowId, state);
          },
          onItemClick: function(id, e, node) {
            console.log('===>item',)
          }
        },
        ready:function(){
          this.openAll();
        }
      },
    ]}
  ]
});