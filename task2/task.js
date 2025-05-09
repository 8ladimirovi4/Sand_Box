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
    let idx = 0;

    const n = parseInt(input[idx++]); // количество веток
    const lines = [];

    for (let i = 0; i < n; i++) {
        const [s, d] = input[idx++].split(' ').map(Number);
        lines.push({ s, d });
    }

    const q = parseInt(input[idx++]); // количество запросов

    const result = [];
    for (let i = 0; i < q; i++) {
        const [lineIndex, time] = input[idx++].split(' ').map(Number);
        const { s, d } = lines[lineIndex - 1]; // линии нумеруются с 1

        let nextTrainTime;
        if (time <= s) {
            nextTrainTime = s;
        } else {
            // (time - s + d - 1) // d → округление вверх
            const intervals = Math.ceil((time - s) / d);
            nextTrainTime = s + intervals * d;
        }

        result.push(nextTrainTime);
    }

    console.log(result.join('\n'));
    process.exit(0);
});
