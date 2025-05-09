const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [];  // Массив для хранения данных

rl.on('line', function (data) {
    inputs.push(data);  // Сохраняем данные в массив
});

rl.on('close', function () {
    const n = parseInt(inputs[0]);  // Длина массива, мы её можем не использовать
    const heights = inputs[1].split(' ').map(Number);  // Массив роста сотрудников

    heights.sort((a, b) => a - b);  // Сортируем массив по возрастанию

    let maxDifference = 0;

    while (heights.length > 1) {
        // Берем самую маленькую и самую большую пару
        const diff = Math.abs(heights.pop() - heights.shift());
        maxDifference += diff;  // Добавляем разницу к сумме
    }

    console.log(maxDifference);  // Выводим итоговую сумму разниц
    process.exit(0);  // Закрываем процесс
});
