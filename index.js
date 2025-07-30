//Свернуть соединения по числовому ряду в диапазон

// сортируем массив по возрастанию
// создаем группы [[0,1,2,3,4,5],[7,8],[11]]
// возвращаем новый массив с диапазонами [['0-5'], ['7-8'], ['11']]
// джойним массив по ','

const numbers = [1,4,5,2,3,9,8,11,0]

function compress (list) {
const sortedList = list.sort((a,b) => a-b)
const groups = []
let currentGroup = [sortedList[0]]

for (let i = 1; i <= sortedList.length; i++) {
    const curr = sortedList[i]
    const prev = sortedList[i - 1]
    
    if(curr - prev === 1){
        currentGroup.push(sortedList[i])
    }else{
        groups.push(currentGroup)
        currentGroup = [curr]
    }
}
   return groups.map(group => {
    if(group.length === 1){
        return `${group[0]}`
    }else{
        return `${group[0]}-${[group[group.length - 1]]}`
    }
   }).join(',')
}

compress(numbers)




