const janken = ["Rock", "Paper", "Scissors"]
let PlayerScore = 0;
let ComputerScore = 0;
let Winner = '';

// make the computer choice
function getComputerChoice() {
  let index = Math.floor(Math.random() * 3);
  let ComputerChoice = janken.at(index).toLowerCase();
  return ComputerChoice
}

// ask for the player to choose between the 3 solutions
function getPlayerChoice() {
  let answer = prompt("Choose between: Rock | Paper | Scissors!");
  return answer.toLowerCase();
}

function PlayRound(PlayerChoice,ComputerChoice) {
  if (
      (PlayerChoice === 'rock' && ComputerChoice === 'scissors')||
      (PlayerChoice === 'paper' && ComputerChoice === 'rock')||
      (PlayerChoice === 'scissors' && ComputerChoice === 'paper')
    ) {
    Winner = 'Player';
    PlayerScore++;
  }
  else if (
      (ComputerChoice === 'rock' && PlayerChoice === 'scissors')||
      (ComputerChoice === 'paper' && PlayerChoice === 'rock')||
      (ComputerChoice === 'scissors' && PlayerChoice === 'paper')
    ) {
    Winner = 'Computer';
    ComputerScore++;
  }
  else {
    Winner = 'Tie';
  }
  return Winner;
}

function playGame() {
  let round = 1;
  while (PlayerScore < 5 && ComputerScore < 5) {
    let PlayerChoice = getPlayerChoice();
    let ComputerChoice = getComputerChoice();
    let result = PlayRound(PlayerChoice, ComputerChoice);
    console.log(`Round ${round}: Player chose ${PlayerChoice}, Computer chose ${ComputerChoice}. Result: ${result}`);
    round++;
  }
  console.log(`Final Scores - Player: ${PlayerScore}, Computer: ${ComputerScore}`);
  console.log(`Game Over! ${PlayerScore === 5 ? 'Player' : 'Computer'} wins the game.`);
}

playGame();
