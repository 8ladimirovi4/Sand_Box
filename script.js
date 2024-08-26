webix.protoUI({
  name:"editlist"
}, webix.EditAbility, webix.ui.list);


webix.ui({
  view: "editlist",
  id: "myList",
  template: function (obj) {
      return `<span class='item-name'>${obj.name}</span>
              <input type='checkbox' ${obj.checked ? "checked" : ""} style='margin-left: 10px;'>
              <span class='webix_icon wxi-trash' style='margin-left: 10px; cursor: pointer;'></span>`;
  },

  navigation: true,
  drag: 'order',
  dragScroll: true,
  editable: true,
  editor: 'text',
  editValue: 'name',
  editaction:"click",
  data: [
      { id: 1, name: "Item 1", checked: false },
      { id: 2, name: "Item 2", checked: false },
      { id: 3, name: "Item 3", checked: false }
  ],
  onClick: {
      "wxi-trash": function (e, id) {
          this.remove(id); // удаление элемента при клике на иконку
          return false;
      }
  },
  on: {
      onBeforeEditStart: function (obj,e) {
      
      },
      onAfterEditStop: function (state, editor, ignoreUpdate) {
        
      },
      onItemClick: function(id, evt){
        if (evt.target.type === "checkbox") {
          this.editStop()
          evt.target.style.checked = !evt.target.style.checked;
        
       }
      }
  },
  height: 200,
  scroll: "y"
});


webix.ui({
  view: 'checkbox'
})