//Свернуть соединения по числовому ряду в диапазон

// сортируем массив по возрастанию
// создаем группы [[0,1,2,3,4,5],[7,8],[11]]
// возвращаем новый массив с диапазонами [['0-5'], ['7-8'], ['11']]
// джойним массив по ','

const numbers = [1, 4, 5, 2, 3, 9, 8, 11, 0];

function compress(list) {
  const sortedList = list.sort((a, b) => a - b);
  const groups = [];
  let currentGroup = [sortedList[0]];

  for (let i = 1; i <= sortedList.length; i++) {
    const curr = sortedList[i];
    const prev = sortedList[i - 1];

    if (curr - prev === 1) {
      currentGroup.push(sortedList[i]);
    } else {
      groups.push(currentGroup);
      currentGroup = [curr];
    }
  }
  return groups
    .map((group) => {
      if (group.length === 1) {
        return `${group[0]}`;
      } else {
        return `${group[0]}-${[group[group.length - 1]]}`;
      }
    })
    .join(',');
}

compress(numbers);
//------------------------------------------------------------------//

//написать функцию throttle(func, delay, ctx), которая возвращает обертку, вызывающую fn не чаще чем в delay секеунд
//первый вызов fn должен быть синхронный
//если игнорирующийся вызов оказался полседним, то он должен выполнится

function throttle(func, delay, ctx) {
  let lastCall = 0;
  let savedArgs;
  let timerId = null;

  return function (...args) {
    const now = Date.now();
    savedArgs = args;

    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(ctx, savedArgs);
      timerId = null;
      return;
    }
    if (!timerId) {
      timerId = setTimeout(() => {
        lastCall = Date.now();
        func.apply(ctx, savedArgs);
        timerId = null;
        //(оставшееся время)
        //                 <--------------> ???
        //|----------------|--------------|-----------------------|
        //^                ^              ^
        //lastCall         now            (lastCall + delay)
      }, lastCall + delay - now);
    }
  };
}

function test() {
  const start = Date.now();

  function log(text) {
    const msPassed = Date.now() - start;
    console.log(`${msPassed}: ${this.name} logged ${text}`);
  }
  const throttled = throttle(log, 100, { name: 'me' });

  setTimeout(() => throttled('m'), 0);
  setTimeout(() => throttled('mo'), 22);
  setTimeout(() => throttled('mos'), 33);
  setTimeout(() => throttled('mosc'), 150);
  setTimeout(() => throttled('moscow'), 400);

  //должно быть в консоле
  //0 me logged m
  //100 me logged mos
  //200 me logged mosc
  //400 me logged moscow
}

console.clear();
test();
//------------------------------------------------------------------//

//debounce

function debounce(fn, delay, ctx) {
  let timerId = null;
  let savedArgs = null;

  return function (...args) {
    savedArgs = args;

    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(ctx, savedArgs);
      timerId = null;
    }, delay);
  };
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

console.clear();
testDebounce();
//------------------------------------------------------------------//

//Глубокое сравнение объектов

function deepEqual(a, b) {
  if (a === b) return true;

  if (
    typeof a !== 'object' ||
    a == null ||
    typeof b !== 'object' ||
    b == null
  ) {
    return false;
  }

  if (Array.isArray(a) !== Array.isArray(b)) return false;

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  // соложность (Оn^2)
  // for(key of keysA){
  //     if(!keysB.includes(key) || !deepEqual(a[key], b[key])){
  //         return false
  //     }
  // }
  const keySetB = new Set(keysB);

  //Сложность (On)
  for (key of keysA) {
    if (!keySetB.has(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}

const obj1 = { a: 1, b: { c: [1, 2, 3] } };
const obj2 = { a: 1, b: { c: [1, 2, 3] } };

console.log(deepEqual(obj1, obj2)); // true
//------------------------------------------------------------------//

// Реализуйте flatten с ограничением по глубине, как нативный arr.flat(depth). Функция flatten(arr, depth = 1) должна "сплющивать" массив только на указанное количество уровней.


const arr = [1, 2, [3, 4, [5, 6]]];

function flat(list, depth = 1) {
  const result = [];

  function flatted(array, currentDepth) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];

      if (Array.isArray(item) && currentDepth > 0) {
        flatted(item, currentDepth - 1);
      } else {
        result.push(item);
      }
    }
  }
  flatted(list, depth);

  return result;
}

console.log('===> ', flat(arr));
//------------------------------------------------------------------//

function promiseRace (promises) {

       if (promises == null || typeof promises[Symbol.iterator] !== 'function') {
        throw new TypeError(`${typeof promises} is not iterable`);
    }

return new Promise((resolve, reject) => {
    const promisesArray = [...promises]; 

        if (promisesArray.length === 0) {
            return;
        }

 for(p of promisesArray){
      Promise.resolve(p) //зарезолвить значение, если передали не промис
        .then(resolve)
        .catch(reject) 
     }
})
    
}

const promise1 = new Promise((resolve) => setTimeout(() => resolve('promise 1 resolved'), 2000));
const promise2 = new Promise((_, reject) => setTimeout(() => reject('promise 2 rejected'), 1000));

// Тест 1: Стандартный случай (promise2 победит)
promiseRace([promise1, promise2])
    .then(data => console.log('Тест 1:', data))
    .catch(err => console.log('Тест 1:', err)); // Вывод: Тест 1: promise 2 rejected

// Тест 2: Массив с не-промисом (42 "победит" мгновенно)
promiseRace([promise1, 42])
    .then(data => console.log('Тест 2:', data))   // Вывод: Тест 2: 42
    .catch(err => console.log('Тест 2:', err));

// Тест 3: Пустой массив (ничего не выведет, промис останется pending)
promiseRace([])
    .then(() => console.log('Тест 3: resolved'))
    .catch(() => console.log('Тест 3: rejected'));

// Тест 4: Невалидный ввод
try {
    promiseRace(123);
} catch (e) {
    console.log('Тест 4:', e.message); // Вывод: Тест 4: number is not iterable
}
//------------------------------------------------------------------//

//hash таблица

class HashMap {
  constructor(size) {
    //this.array = new Array(size).fill(null).map(() => new Array());
    this.array = new Array(size).fill(null).map(() => new Map());
  }

  hash(string) {
    let num = 0;
    for (let i = 0; i < string.length; i++) {
      const item = string[i];
      num += item.charCodeAt(0);
    }
    return num;
  }

  getIndex(key) {
    return this.hash(key) % this.array.length;
  }

  set(key, value) {
      if (key == null) return;

    const bucket = this.array[this.getIndex(key)];
  
    // for (let entry of bucket) {
    //   if (entry[0] === key) {
    //     entry[1] = value;
    //     return;
    //   }
    // }
    // bucket.push([key, value]);
    bucket.set(key, value);
  }
  get(key) {
    const bucket = this.array[this.getIndex(key)];
    // if (!Array.isArray(bucket)) return;

    // for (let entry of bucket) {
    //   if (entry[0] === key) {
    //     return entry[1];
    //   }
    // }
    return bucket.get(key);
  }
}

const myHashMap = new HashMap(10);

myHashMap.set('cat', 'mow');
myHashMap.set('dog', 'bark');

console.log('===> ', myHashMap);
console.log('===> ', myHashMap.get('cat'));
console.log('===> ', myHashMap.get('dog'));

//------------------------------------------------------------------//

//префиксные суммы

// Основная идея: Мы заранее вычисляем и сохраняем сумму всех элементов от начала массива до каждого индекса i. Это позволяет нам находить сумму любого подмассива (отрезка) [left, right] за константное время O(1) с помощью простой арифметической операции, вместо того чтобы каждый раз пробегать по этому отрезку циклом.

// Формула:
// Создаем массив prefix размером N+1. prefix[0] = 0.
// prefix[i+1] = prefix[i] + nums[i]
// Сумма на отрезке [left, right] вычисляется как prefix[right + 1] - prefix[left].

const nums = [2, 4, 1, 3, 5];
const prefix = [0];

// создаём prefix
for (let i = 0; i < nums.length; i++) {
  prefix[i + 1] = prefix[i] + nums[i];
}
//[0, 2, 6, 7, 10, 15] prefix

function rangeSum(left, right) {
  return prefix[right + 1] - prefix[left];
}

console.log(rangeSum(0, 2)); // 7 сумма nums [2, 4, 1]
console.log(rangeSum(1, 3)); // 8 nums [4, 1, 3]
console.log(rangeSum(2, 4)); // 9 nums [1, 3, 5]
//------------------------------------------------------------------//


// шаблон бинарного поиска
function binarySearchTemplate(arr, target) {
  let left = 0
  let right = arr.length - 1

  while(left <= right){
    const midIdx = left + Math.floor((right - left) / 2)
    const midVal = arr[midIdx]

    if(target === midVal){
      return midIdx
    }else if (target < midVal){
      right = midIdx - 1
    }else{
      left = midIdx + 1
    }
 }
   return -1
}

binarySearchTemplate([1,2,3,4,5,6,7], 7)
//------------------------------------------------------------------//

//бинарным поиском найти диапазон повторяющихся чисел

const sortedNums= [1,2,5,5,5,5,5,7]
const target = 5

function findBoundary(arr, target, findFirst) {
  let left = 0
  let right = arr.length - 1
  let ans = -1

  while(left <= right){
    const midIdx = left + Math.floor((right - left) / 2)
    const midVal = arr[midIdx]

    if (midVal > target){
      right = midIdx - 1
    }else if (midVal < target ){
      left = midIdx + 1
    }else{
      ans = midIdx
      if(findFirst){
        right = midIdx - 1
      }else{
         left = midIdx + 1
      }
    }
 }
   return ans
}

function findRange(){
  const first = findBoundary(sortedNums, target, true)

  if(first === -1){
    return [-1, -1]
  }

  const last = findBoundary(sortedNums, target, false)

  return [first, last]
}

console.log('===> ', findRange())

const nums1 = [1, 7, 2, 15]
const target1 = 9
//------------------------------------------------------------------//

//Hash (HashMap / HashSet / Map / Set)
// Условие: Дан массив чисел nums и число target. Верните индексы двух чисел, которые в сумме дают target.
// Пример: nums = [2, 7, 11, 15], target = 9 -> [0, 1] (потому что nums[0] + nums[1] = 9)

function twoSum(nums, target) {
    const map = new Map(); // { число => индекс }

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (map.has(complement)) {
            // Нашли!
            return [map.get(complement), i];
        }

        // Если не нашли, добавляем текущее число и его индекс в карту
        map.set(currentNum, i);
    }
}

twoSum(nums1, target1)

// Условие: Дан массив строк. Сгруппируйте анаграммы вместе.
// Пример: ["eat", "tea", "tan", "ate", "nat", "bat"] -> [["bat"], ["nat","tan"], ["ate","eat","tea"]]

function groupAnagrams(strs) {
  const map = new Map()

  for(let str of strs){
      sortedStr = str.split('').sort().join('')
      if(!map.has(sortedStr)){
        map.set(sortedStr, [])
      }
      map.get(sortedStr).push(str)
  }
  return Array.from(map)
}

console.log('===> ',groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) )
//------------------------------------------------------------------//

//Quick sort
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) { // проход по всем элементам кроме pivot
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log('===> ', quickSort([10, 8, 2, 1, 6]));
 