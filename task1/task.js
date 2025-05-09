console.time('execution'); // ⏱️ СТАРТ перед обработкой
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (data) {
    data = data.trim().toUpperCase();
    if (data[0] === 'R' || (data[1] === 'R' && data[2] === 'M')) {
        console.log('Yes');
    } else {
        console.log('No');
    }
    console.timeEnd('execution');
    process.exit(0);
});

//echo "RSM" | node task.js