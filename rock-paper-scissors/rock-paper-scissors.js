function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];

  // generate a random integer between 0 and 2 and use that as the index
  return choices[Math.floor(Math.random() * 3)];
}

function isWin(selection1, selection2) {
  // if selection1 loses OR TIES to selection2 then false will be returned
  if (
    (selection1 === "rock" && selection2 === "scissors") ||
    (selection1 === "scissors" && selection2 === "paper") ||
    (selection1 === "paper" && selection2 === "rock")
  ) {
    return true;
  }

  return false;
}

// didThePlayerWin and didTheComputerWin help with overall refactoring, and tallying up total wins in the game() function
function didThePlayerWin(playerSelection, computerSelection) {
  return isWin(playerSelection, computerSelection);
}

function didTheComputerWin(playerSelection, computerSelection) {
  return isWin(computerSelection, playerSelection);
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

  const validChoices = ["rock", "paper", "scissors"];
  if (
    !validChoices.includes(playerSelection) ||
    !validChoices.includes(computerSelection)
  ) {
    return null;
  }

  let decisionStr = null;

  playerWinState = didThePlayerWin(playerSelection, computerSelection);
  computerWinState = didTheComputerWin(playerSelection, computerSelection);

  if (playerWinState && !computerWinState) {
    decisionStr = "You win! " + playerSelection + " beats " + computerSelection;
  } else if (!playerWinState && computerWinState) {
    decisionStr =
      "You lose! " + computerSelection + " beats " + playerSelection;
  } else if (!playerWinState && !computerWinState) {
    decisionStr = "Tie game! " + playerSelection + " ties " + computerSelection;
  }

  return decisionStr;
}

function game() {}
