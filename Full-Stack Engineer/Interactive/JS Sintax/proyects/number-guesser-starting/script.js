let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

// generateTarget();

function compareGuesses(humanGuess, computerGuess, secretGuess) {
  let humanGuessDif = humanGuess - secretGuess;
  let computerGuessDif = computerGuess - secretGuess;

  if (humanGuess < computerGuess) {
    return "true";
  } else {
    return "false";
  }
}

console.log(compareGuesses(4, 9, 3));
