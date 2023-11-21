
data.map(obj => {
    obj.tags.forEach(tag => {
  
      switch(tag.n){
       case "Тест WebScadaMT\\IEC-104\\Измерения\\Оперативная информация\\Ia" :{
     obj.Column0 = tag.s.v
     break
       }
       case "Тест WebScadaMT\\IEC-104\\Измерения\\Оперативная информация\\Ib" :{
           obj.Column1 = tag.s.v
           break
       }
       case "Тест WebScadaMT\\IEC-104\\Измерения\\Оперативная информация\\Ic" :{
           obj.Column2 = tag.s.v
           break
       }
       case "Тест WebScadaMT\\IEC-104\\Измерения\\Оперативная информация\\Ua" :{
           obj.Column3 = tag.s.v
           break
       }
       case "Тест WebScadaMT\\IEC-104\\Измерения\\Оперативная информация\\Uc" :{
           obj.Column4 = tag.s.v
           break
       }
       case "Тест WebScadaMT\\IEC-104\\Измерения\\Оперативная информация\\Ub" :{
           obj.Column5 = tag.s.v
           break
       }
       case "Тест WebScadaMT\\IEC-104\\Измерения\\Оперативная информация\\Freq" :{
           obj.Column6 = tag.s.v
           break
       }
       default:
           break
      }
    })
    obj.ts=  obj.ts.substring(0, 23);
   
})

columns.map(obj => {
   obj.width = 150
})