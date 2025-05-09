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

    let count = 0;

    for (let start = 0; start < n; start++) {
        for (let end = start + 2; end < n; end++) {
            // Подотрезок от start до end
            let sub = arr.slice(start, end + 1);
            let found = false;

            // Перебираем все тройки в подотрезке
            for (let i = 0; i < sub.length; i++) {
                for (let j = i + 1; j < sub.length; j++) {
                    for (let k = j + 1; k < sub.length; k++) {
                        if (sub[j] * 2 === sub[i] + sub[k]) {
                            found = true;
                            break;
                        }
                    }
                    if (found) break;
                }
                if (found) break;
            }

            if (found) count++;
        }
    }

    console.log(count);

    process.exit(0);
});
