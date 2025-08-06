
//Анаграмма — это слово, полученное перестановкой букв другого слова.
//Значит, если у двух слов одинаковый набор и количество букв, то они анаграммы.

//1. Сравнить длинну строк
//2. Отсортировать строки 
//3. Сравнить строки

const str1 = 'кот'
const str2 = 'ток'

const isAnagrams = (word1, word2) => {
    if(word1.length !== word2.length) return false

    const normalize = (word) => {
        return word.toLowerCase().split('').sort().join('')
    }
   return normalize(word1) === normalize(word2)
}

isAnagrams(str1, str2)

//O(2**n)
//Число Фибоначчи F(n)
//F(n) = F(n-1) + F(n-2)
const t1 = performance.now()
console.time('fib')
const fib = (n) => {
    if(n<= 1) return n;

    return fib(n-2) + fib(n-1)
}
fib(30)
const t2 = performance.now()
console.log('===> perf fib', t2 - t1 )
console.timeEnd('fib')

// fib(4)
// ├── fib(3)
// │   ├── fib(2)
// │   │   ├── fib(1) → 1
// │   │   └── fib(0) → 0
// │   └── fib(1) → 1
// └── fib(2)
//     ├── fib(1) → 1
//     └── fib(0) → 0
//где 

// fib(4)
// → fib(3) + fib(2)

// fib(3)
// → fib(2) + fib(1)

// fib(2)
// → fib(1) + fib(0)


console.time('fib1')
const fib1 = (n) => {
    let a = 0
    let b = 1

for (let idx = 2; idx <= n; idx++) {
    const tmp = b
    b = a+ b
    a = tmp
 }

 return n === 0 ? 0 : b
}

fib1(7)
console.timeEnd('fib1')

function isAnagrams1(fst, scd){
    if(fst.length !== scd.length) return false

    const first = fst.toLowerCase()
    const second = scd.toLowerCase()
    const obj1 = {}
    const obj2 = {}

for (let i = 0; i < first.length; i++) {
        if(!obj1.hasOwnProperty(first[i])){
        obj1[first[i]] = 1
    }else{
       obj1[first[i]] +=1
    }

    if(!obj2.hasOwnProperty(second[i])){
        obj2[second[i]] = 1
    }else{
       obj2[second[i]] +=1
    }
 }

    
for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
        return false;
    }
  }
 return true
}

console.log('===> ',isAnagrams1('aaB', 'bAa') )

function log(date, importance, message) {
    return `${date} | ${importance} | ${message}`
}

