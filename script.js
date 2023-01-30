function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerSelection =
    randomNumber === 1 ? "rock" : randomNumber === 2 ? "paper" : "scissors";
  return computerSelection;
}

function playerPlay(round) {
  let playerInput = prompt(
    `Round ${round + 1}: Type Rock, Paper, or Scissors`,
    "rock"
  );
  if (playerInput == null) {
    return "cancelled";
  }
  let isInputValid = validateInput(playerInput);
  while (!isInputValid) {
    playerInput = prompt(
      "🚫 Wrong input! Please type Rock, Paper, or Scissors, no capitilization required",
      "rock"
    );
    if (playerInput == null) {
      return "cancelled";
    }
    isInputValid = validateInput(playerInput);
  }
  return playerInput.trim().toLocaleLowerCase();
}

function validateInput(playerInput) {
  const sanitizedPlayerInput = playerInput.trim().toLocaleLowerCase();
  return (
    sanitizedPlayerInput === "rock" ||
    sanitizedPlayerInput === "paper" ||
    sanitizedPlayerInput === "scissors"
  );
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection == "scissors") ||
    (playerSelection === "paper" && computerSelection == "rock") ||
    (playerSelection === "scissors" && computerSelection == "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 0; round < 5; round++) {
    const playerSelection = playerPlay(round);
    if (playerSelection === "cancelled") {
      console.log("Sorry to see you go 😞");
      break;
    }
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (result == "win") {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
    } else if (result == "lose") {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
      computerScore++;
    } else {
      console.log(`Tie! You and the computer played ${computerSelection}`);
    }
    console.log(
      `Round: ${
        round + 1
      } | Player score: ${playerScore} | Computer score: ${computerScore}`
    );
    console.log("-------------------------------");

    if (round === 4) {
      console.log("######################################");

      const finalResult =
        playerScore > computerScore
          ? "Hurray! You have won 🏆"
          : playerScore === computerScore
          ? "It's tie 😐"
          : "Sorry! You have lost 😟";
      console.log(`Final result: ${finalResult}`);
      console.log("######################################");
    }
  }
}

const gameInstructions =
  "ROCK PAPER SCISSORS : Please follow the following instructions:" +
  "\n" +
  " - You are going to play against the computer" +
  "\n" +
  " - The game has total 5 rounds" +
  "\n" +
  " - Press F12 on your pc and go the Console tab" +
  "\n" +
  " - Type game() to start the game";

alert(gameInstructions);

// game();
