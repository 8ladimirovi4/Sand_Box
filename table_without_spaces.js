const data = []
function printContent(){
    webix.print($$("dt"), {
        autowidth:true
    });
}

var datatable = webix.ui({
    container: 'data_table',
    id:'lay',
    view: 'layout',
rows:[
    {
    container: 'data_table',
    view:"datatable",
    id:'dt',
    autoheight: true,
    columns:[
        { id:"rank",    
        header:"",
        width:200,
    },

        { id:"title",   
        header:"Film title",   
         width:500
        },

        { id:"year",    
        header:"Released",      
        width:200
    },

        { id:"votes",   
        header:"Votes",         
        width:200
    }

    ],


    data: [

    ],
        ready: function(){
        for(let i = 0; i < 300; i++){
            data.push(
                { id:i, title:"The Shawshank Redemption", year:1994, votes:678790, rank:i},
            )
        }
        this.define('data', data);
        this.adjustRowHeight()
    }
    }   
]
})



