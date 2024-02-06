const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    playerScore++;
  } else {
    result = "You lose!";
    computerScore++;
  }

  playerDisplay.innerHTML = `PLAYER: ${playerChoice}`;
  computerDisplay.innerHTML = `COMPUTER: ${computerChoice}`;
  resultDisplay.innerHTML = `${result.toUpperCase()}`;
  playerScoreDisplay.innerHTML = `${playerScore}`;
  computerScoreDisplay.innerHTML = `${computerScore}`;

  if (playerScore === 5) {
    resultDisplay.classList.add("green");
    resultDisplay.innerHTML = "CONGRATULATIONS! YOU WON!";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
  if (computerScore === 5) {
    resultDisplay.classList.add("red");
    resultDisplay.innerHTML = "BAD LUCK! YOU LOST!";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}
