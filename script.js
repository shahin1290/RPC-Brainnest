function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerSelection =
    randomNumber === 1 ? "rock" : randomNumber === 2 ? "paper" : "scissors";
  return computerSelection;
}

function playerPlay(round) {
  let promptMessage = `Round ${round + 1}: Type Rock, Paper, or Scissors`;
  let isChecked = false;
  while (!isChecked) {
    let playerInput = prompt(promptMessage, "rock");
    const sanitizedPlayerInput =
      playerInput && playerInput.trim().toLowerCase();

    if (["rock", "paper", "scissors"].includes(sanitizedPlayerInput)) {
      isChecked = true;
      return sanitizedPlayerInput;
    } else if (playerInput === null) {
      isChecked = true;
      return "cancelled";
    } else {
      promptMessage =
        "🚫 Wrong input! Please type Rock, Paper, or Scissors, no capitilization required";
    }
  }
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
  " - Type game() and hit enter to start the game" +
  "\n" +
  " - You can cancel the game at any time";

alert(gameInstructions);

// game();
