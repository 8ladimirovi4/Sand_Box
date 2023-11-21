
webix.ui({
    container: 'data_table',
    view: 'layout',
rows:[
    {
    view: 'datatable',
    id:'dt',
    columns: columns,
    header: conf.h,
    //headerRowHeight: "auto",
    footer: true,
    //resizeColumn: true,
  
    autoheight: true,
  
    fixedRowHeight: false,
    rowLineHeight: 15,
    rowHeight: 15,
    scroll: false,
    data: [],
    css: {
      'font-style': 'normal',
      'font-size': '15px;',
    },
    headermenu: {
      autowidth: true,
      autoheight: true,
    },
    ready: function(){
      this.define('data', data);
      this.adjustRowHeight()
    }
}
]
});
