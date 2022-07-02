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

let playerTotalScore = 0;
let computerTotalScore = 0;

const playerButtons = document.querySelectorAll(".player-btn");

playerButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const playerSelection = button.id;
    const computerSelection = computerPlay().toLowerCase();
    const playerScore = document.querySelector(".player-score");
    const computerScore = document.querySelector(".computer-score");
    const roundResults = document.querySelector(".round-results");
    const gameResults = document.querySelector(".game-results");

    if (playerTotalScore < 5 && computerTotalScore < 5) {
      if (isWin(playerSelection, computerSelection)) {
        playerTotalScore++;
        playerScore.textContent = `Player Score: ${playerTotalScore}`;
      } else if (isWin(computerSelection, playerSelection)) {
        computerTotalScore++;
        computerScore.textContent = `Computer Score: ${computerTotalScore}`;
      }

      roundResults.textContent = generateDecisionString(
        playerSelection,
        computerSelection
      );
    }

    if (playerTotalScore === 5) {
      gameResults.textContent =
        "You won the game! Please reload the page to play again";
    } else if (computerTotalScore === 5) {
      gameResults.textContent =
        "The computer won the game! Please reload the page to play again";
    }
  });
});
