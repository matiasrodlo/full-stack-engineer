let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Function to generate the target number
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

// Function to compare guesses
function compareGuesses(humanGuess, computerGuess, secretGuess) {
  let humanGuessDif = Math.abs(humanGuess - secretGuess);
  let computerGuessDif = Math.abs(computerGuess - secretGuess);

  return humanGuessDif < computerGuessDif;
}

// Function to update scores based on the winner
function updateScore(winner) {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
}

// Function to advance to the next round
function advanceRound() {
  currentRoundNumber += 1;
  return currentRoundNumber;
}

// Example usage of advanceRound
console.log(advanceRound());
