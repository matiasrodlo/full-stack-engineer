console.log("hi");
let userInput = 2;

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("You have written a wrong option");
  }
};

/* console.log(getUserChoice('rock')); // should print 'rock'
console.log(getUserChoice('banana')); // should print 'You have written a wrong option' */

const getComputerChoice = () => {
  const rand = Math.floor(Math.random() * 3);

  switch (rand) {
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    case 2:
      return "scissors";
      break;
  }
};

/* console.log(getUserChoice('paper')); // should print 'rock'*/

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors" || computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock" || computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock"); // Replace 'rock' with any valid option obtained from user input
  const computerChoice = getComputerChoice();

  console.log(`User Choice: ${userChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice)); // Determine and log the winner
};

playGame(); // Start the game
