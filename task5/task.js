const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (data) {
    input.push(data.trim());
});

rl.on("close", function () {
    const n = parseInt(input[0]);
    const arr = input[1].split(' ').map(Number);

  //нет правильного решения
    process.exit(0);
});
