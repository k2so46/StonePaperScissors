// generating a random number
let rand = () => {
  let a = Math.floor(Math.random() * (4 - 1)) + 1;
  return a;
};
let inp = 0;

let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let res = document.getElementById("res");
let scissors = document.getElementById("scissors");
let cScr = document.getElementById("cScr");
let pScr = document.getElementById("pScr");

let playerScore = 0;
let compScore = 0;
stone.addEventListener("click", () => {
  inp = 1;
  check(rand(), 1);
});
paper.addEventListener("click", () => {
  inp = 2;
  check(rand(), 2);
});
scissors.addEventListener("click", () => {
  inp = 3;
  check(rand(), 3);
});
console.log(inp);

// 1 = stone 2 = paper = 3 = scissors
function check(a, inp) {
  if (a === inp) {
    res.innerHTML = "Draw!";
  } else if (a === 1) {
    if (inp === 2) {
      res.innerHTML = "You won!";
      playerScore++;
      pScr.innerHTML = playerScore;
    } else if (inp === 3) {
      res.innerHTML = "You lose!";
      compScore++;
      cScr.innerHTML = compScore;
    }
  } else if (a === 2) {
    if (inp === 3) {
      res.innerHTML = "You won!";
      playerScore++;
      pScr.innerHTML = playerScore;
    } else if (inp === 1) {
      res.innerHTML = "You lose!";
      compScore++;
      cScr.innerHTML = compScore;
    }
  } else if (a === 3) {
    if (inp === 1) {
      res.innerHTML = "You won!";
      pScr.innerHTML = playerScore;

      playerScore++;
    } else if (inp === 1) {
      res.innerHTML = "You lose!";
      compScore++;
      cScr.innerHTML = compScore;
    }
  }
}
