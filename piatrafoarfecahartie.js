const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');
const result = document.querySelector('#result');

rockButton.addEventListener('click', function() {
  playGame('rock');
});

paperButton.addEventListener('click', function() {
  playGame('paper');
});

scissorsButton.addEventListener('click', function() {
  playGame('scissors');
});

function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
  if (userChoice === computerChoice) {
    result.textContent = `Egalitate! Ambele au ales ${userChoice}.`;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result.textContent = `Ai câștigat! Ai ales ${userChoice}, iar calculatorul a ales ${computerChoice}.`;
  } else {
    result.textContent = `Ai pierdut! Ai ales ${userChoice}, iar calculatorul a ales ${computerChoice}.`;
  }
}
