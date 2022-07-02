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

/* 
  didThePlayerWin and didTheComputerWin help with overall refactoring, 
  and tallying up total wins in the game() function.
*/

function didThePlayerWin(playerSelection, computerSelection) {
  return isWin(playerSelection, computerSelection);
}

function didTheComputerWin(playerSelection, computerSelection) {
  return isWin(computerSelection, playerSelection);
}

function generateDecisionString(playerSelection, computerSelection) {
  let decisionString = null;

  playerWinState = didThePlayerWin(playerSelection, computerSelection);
  computerWinState = didTheComputerWin(playerSelection, computerSelection);

  if (playerWinState && !computerWinState) {
    decisionString =
      "You win! " + playerSelection + " beats " + computerSelection;
  } else if (!playerWinState && computerWinState) {
    decisionString =
      "You lose! " + computerSelection + " beats " + playerSelection;
  } else if (!playerWinState && !computerWinState) {
    decisionString =
      "Tie round! " + playerSelection + " ties " + computerSelection;
  }

  return decisionString;
}

const playerButtons = document.querySelectorAll(".player-btn");
playerButtons.forEach((button) => {
  console.log(button.id);
  button.addEventListener("click", function (e) {
    console.log(e);
  });
});
