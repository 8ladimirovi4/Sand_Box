var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (data) {
    data = data.trim();

    function isPalindrome(s) {
        return s === s.split('').reverse().join('');
    }

    let isAlmostPalindrome = false;
    for (let i = 0; i < data.length; i++) {
        let withoutChar = data.slice(0, i) + data.slice(i + 1);
        if (isPalindrome(withoutChar)) {
            isAlmostPalindrome = true;
            break;
        }
    }

    console.log(isAlmostPalindrome ? 'YES' : 'NO');
    process.exit(0);
});
