const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (data) {
    input.push(data);
});

rl.on("close", function () {
    const n = +input[0];
    const arr = input[1].split(' ').map(Number);

    // Множество для хранения уникальных значений
    const used = new Set();

    // Сортируем массив по убыванию, чтобы сначала обрабатывать большие числа
    arr.sort((a, b) => b - a);

    for (let num of arr) {
        while (num > 0 && used.has(num)) {
            num = Math.floor(num / 2);
        }
        if (!used.has(num)) {
            used.add(num);
        }
    }

    console.log(used.size);
    process.exit(0);
});
