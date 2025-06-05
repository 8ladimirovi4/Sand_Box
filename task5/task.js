const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (data) {
  input.push(data.trim());
});

rl.on("close", function () {
  const prices = input[0].split(/\s+/).map(Number);
  const S = input[1];

  //n = 6
  //a = 4 стоимость обмена скобок местами
  //b = 3 стоисмость заметы скобки
  //S = ())(((
  const n = prices[0];
  const a = prices[1];
  const b = prices[2];

  function analizeBalance(strLength, str) {
    let balance = 0;
    let unmutchedClose = 0;

    for (let idx = 0; idx < str.length; idx++) {
      if (str[idx] === "(") {
        balance += 1;
      } else {
        balance -= 1;
      }

      if (balance < 0) {
        unmutchedClose += 1;
        balance = 0;
      }
    }
    let unmatchedOpen = balance;
    return { unmutchedClose, unmatchedOpen };
  }

  const unmutchedScopes = analizeBalance(n, S);

  function calculateMinCost(scopes, swapCost, changeCost) {
    const { unmutchedClose, unmatchedOpen } = unmutchedScopes;

    const swaps = Math.min(unmutchedClose, unmatchedOpen);
    const remainingOpen = unmutchedClose - swaps;
    const remainingClose = unmatchedOpen - swaps;

    return swaps * swapCost + ((remainingOpen + remainingClose) / 2) * b;
  }

  console.log(calculateMinCost(unmutchedScopes, a, b));

  process.exit(0);
});
