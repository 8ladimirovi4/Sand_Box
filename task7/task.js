const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const MOD = 998244353;
const MAX_START = 100;

function gcd(a, b) {
    while (b) [a, b] = [b, a % b];
    return a;
}

function fullGCD(arr) {
    return arr.reduce((a, b) => gcd(a, b), arr[0]);
}

function getCoprimePairs(x) {
    const pairs = [];
    for (let i = 1; i * i <= x; i++) {
        if (x % i === 0) {
            let j = x / i;
            if (gcd(i, j) === 1) {
                pairs.push([i, j]);
                if (i !== j) pairs.push([j, i]);
            }
        }
    }
    return pairs;
}

let inputLines = [];

rl.on('line', function (line) {
    inputLines.push(line.trim());
});

rl.on('close', function () {
    const n = parseInt(inputLines[0]);
    const a = inputLines[1].split(/\s+/).map(Number);  // массив чисел a1..a[n-1]

    const memo = {};
    for (let ai of a) {
        if (!memo[ai]) {
            memo[ai] = getCoprimePairs(ai);
        }
    }

    let total = 0;

    function dfs(index, seq) {
        if (seq.length === n) {
            if (fullGCD(seq) === 1) {
                let prod = 1n;
                for (let x of seq) {
                    prod = (prod * BigInt(x)) % BigInt(MOD);
                }
                total = (total + Number(prod)) % MOD;
            }
            return;
        }

        const curr = seq[seq.length - 1];
        for (const [p, q] of memo[a[index]]) {
            const nextB = curr * q;
            if (nextB % p === 0) {
                dfs(index + 1, [...seq, nextB / p]);
            }
        }
    }

    for (const [p, q] of memo[a[0]]) {
        for (let scale = 1; scale <= MAX_START; scale++) {
            const b1 = scale * p;
            const b2 = scale * q;
            dfs(1, [b1, b2]);
        }
    }

    console.log(total);
});
