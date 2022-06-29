function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];

  // generate a random integer between 0 and 2 and use that as the index
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (
    typeof playerSelection === "string" ||
    playerSelection instanceof String
  ) {
    playerSelection = playerSelection.toLowerCase();
  }
  if (
    typeof computerSelection === "string" ||
    computerSelection instanceof String
  ) {
    computerSelection = computerSelection.toLowerCase();
  }

  let decisionStr = null;

  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      decisionStr = "Tie game! Rock ties Rock.";
    } else if (computerSelection === "paper") {
      decisionStr = "You lose! Paper beats Rock.";
    } else if (computerSelection === "scissors") {
      decisionStr = "You win! Rock beats Scissors.";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      decisionstr = "You win! Paper beats Rock.";
    } else if (computerSelection === "paper") {
      decisionStr = "Tie game! Paper ties Paper.";
    } else if (computerSelection === "scissors") {
      decisionStr = "You lose! Scissors beats Paper.";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      decisionStr = "You lose! Rock beats Scissors.";
    } else if (computerSelection === "paper") {
      decisionStr = "You win! Scissors beats Paper.";
    } else if (computerSelection === "scissors") {
      decisionStr = "Tie game! Scissors ties Scissors.";
    }
  }

  return decisionStr;
}
