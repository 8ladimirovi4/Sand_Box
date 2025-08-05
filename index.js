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
//------------------------------------------------------------------//

//написать функцию throttle(func, delay, ctx), которая возвращает обертку, вызывающую fn не чаще чем в delay секеунд
//первый вызов fn должен быть синхронный
//если игнорирующийся вызов оказался полседним, то он должен выполнится

function throttle (func, delay, ctx){
    let lastCall = 0
    let savedArgs;
    let timerId = null
   

    return function(...args){
         const now = Date.now()
            savedArgs = args
   

         if(now - lastCall >= delay){
            lastCall = now
            func.apply(ctx, savedArgs)
            timerId = null
            return;
        }
        if(!timerId){
            timerId = setTimeout(() => {
            lastCall = Date.now()
            func.apply(ctx, savedArgs)
            timerId = null
//(оставшееся время)
//                 <--------------> ???
//|----------------|--------------|-----------------------|
//^                ^              ^
//lastCall         now            (lastCall + delay)
            }, lastCall + delay - now)
        }
    }
} 

function test(){
    const start = Date.now()

    function log(text){
        const msPassed = Date.now() - start
        console.log(`${msPassed}: ${this.name} logged ${text}`)
    }
    const throttled = throttle(log, 100, {name: 'me'})

    setTimeout(() => throttled('m'), 0)
    setTimeout(() => throttled('mo'), 22)
    setTimeout(() => throttled('mos'), 33)
    setTimeout(() => throttled('mosc'), 150)
    setTimeout(() => throttled('moscow'), 400)

    //должно быть в консоле
    //0 me logged m
    //100 me logged mos
    //200 me logged mosc
    //400 me logged moscow
}

console.clear()
test()
//------------------------------------------------------------------//

//debounce

function debounce (fn, delay, ctx) {
    let timerId = null
    let savedArgs = null

    return function (...args){
        savedArgs = args

        if(timerId) clearTimeout(timerId)

           timerId = setTimeout(() => {
                fn.apply(ctx, savedArgs)
                  timerId = null
           }, delay)
    }
}

function testDebounce() {
    const start = Date.now();

    function log(text) {
        const msPassed = Date.now() - start;
        console.log(`${msPassed}: ${this.name} logged ${text}`);
    }

    const debounced = debounce(log, 1000, { name: 'me' });

    setTimeout(() => debounced('m'), 0);
    setTimeout(() => debounced('mo'), 500);
    setTimeout(() => debounced('mos'), 800);
    setTimeout(() => debounced('mosc'), 2500);
    setTimeout(() => debounced('moscow'), 2600);

    // Ожидаемое поведение:
    // Все предыдущие вызовы отменяются
    // Последний вызов — 'moscow' — выполнится через 100мс после вызова в 120мс (т.е. ~220мс)
    // Примерный вывод:
    // 220: me logged moscow
}

console.clear()
testDebounce()