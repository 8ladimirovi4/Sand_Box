const data = []


//webix.env.cdn = "/111/html2canvas.min.js";

function printContent(){
    webix.toPDF($$("dt"), {
        autowidth:true
    });
}


var datatable = webix.ui({
    container: 'data_table',
    view: 'layout',
    id: 'lo',
rows:[
    {
    container: 'data_table',
    view:"datatable", 
    scroll: false,
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
    data: [],
    ready: function(){
        for(let i = 0; i < 300; i++){

            let title = null
            let year = null
            let votes = null

            const flag = {
                title: Math.round(Math.random()),
                year: Math.round(Math.random()),
                votes: Math.round(Math.random())
               
            } 

           
          
            if (flag.title === 1) {
                title = "The Shawshank Redemption";
            }
        
            if (flag.year === 1) {
                year = `19${i}`;
            }
        
            if (flag.votes === 1) {
                votes = `6787${i}`;
            }

             data.push(
                 { id:i, title, year, votes, rank:i, tags: [
                    {
                        "n": "Тест WebScadaMT\\IEC-104\\Измерения\\Оперативная информация\\Ia",
                        "a": "X0",
                        "s": {
                            "sid": "71fef400-b377-4767-9c9f-e67c50684ef1",
                            "q": 192,
                            "v": "4.439497470855713",
                            "record_ts": "2023-11-21T12:14:02.1163617Z",
                            "ts": "2023-11-21T12:12:04.2960000Z"
                        },
                        "vtype": 14
                    }
                ],}
             )
         
         }
         this.define('data', data);
        

    },
}]
});

//$$('dt').adjustRowHeight();