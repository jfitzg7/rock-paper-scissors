function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];

  // generate a random integer between 0 and 2 and use that as the index
  return choices[Math.floor(Math.random() * 3)];
}

// The isWin function expects both of its parameters to be converted to lowercase
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
  let decisionStr = null;

  playerWinState = didThePlayerWin(playerSelection, computerSelection);
  computerWinState = didTheComputerWin(playerSelection, computerSelection);

  if (playerWinState && !computerWinState) {
    decisionStr = "You win! " + playerSelection + " beats " + computerSelection;
  } else if (!playerWinState && computerWinState) {
    decisionStr =
      "You lose! " + computerSelection + " beats " + playerSelection;
  } else if (!playerWinState && !computerWinState) {
    decisionStr =
      "Tie round! " + playerSelection + " ties " + computerSelection;
  }

  return decisionStr;
}

function game() {
  let playerWinTotal = 0;
  let computerWinTotal = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Type 'rock', 'paper', or 'scissors'");
    let computerSelection = computerPlay();

    // input sanitization is done here for the isWin function
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
      console.log(
        "Error: playerSelection and/or computerSelection are not valid choices"
      );
    } else {
      if (didThePlayerWin(playerSelection, computerSelection)) {
        playerWinTotal++;
      } else if (didTheComputerWin(playerSelection, computerSelection)) {
        computerWinTotal++;
      }
      console.log(playRound(playerSelection, computerSelection));
    }
  }

  if (playerWinTotal > computerWinTotal) {
    console.log("You won the game!");
  } else if (playerWinTotal < computerWinTotal) {
    console.log("You lost the game!");
  } else {
    console.log("Tie game!");
  }
}
