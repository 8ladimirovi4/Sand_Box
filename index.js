// Корутины — это такие функции, которые не просто запускаются и заканчиваются, а могут:

// приостанавливать выполнение,

// возобновлять с того же места позже,

// общаться с внешним кодом — получать и передавать данные.


function async (generator) { // здесь async это название функции
    const iterator = generator()

    function handle({ done, value }) {
        return done ? value : Promise.resolve(value)
            .then((x) => handle(iterator.next(x)))
            .catch((e) => handle(iterator.throw(e)))
    }

    return handle(iterator.next())
}

async(function* () { // здесь async это название функции
    const response = yield fetch('example.com') 
    const json = yield response.json()

    // обработать json
})

function* gen() {
  yield 1;
  return 999;
}

const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 999, done: true }
console.log(g.next()); // { value: undefined, done: true }



