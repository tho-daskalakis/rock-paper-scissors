const choices = document.querySelectorAll('button');

let playerSelection = "";

choices.forEach(button => button.addEventListener('click', function(e) {
    playerSelection = capitalize(e.target.id);
    game(playerSelection);
}));

const prompt = document.querySelector('#prompt');

const score = document.querySelector('#score');
score.textContent = "First to 5 wins!";

function getRandomInt(max=3) {
    //Return a random integer between 0 (inclusive) and max (exclusive)
    const min = 0;
    max = Math.floor(max);

    return Math.floor(Math.random() * max);
}

function capitalize(string) {
    return string[0].toUpperCase() + 
        string.slice(1, string.length).toLowerCase();
}

function isTie(computerSelection, playerSelection) {
    // Return true if the round is a tie

    if (playerSelection == computerSelection) {
        printTie(playerSelection);
        return true;
    }
}

function playerWins(computerSelection, playerSelection) {
    // Return true if the Player wins the round, 
    // false if the Computer wins the round

    // The player selected Rock
    if (playerSelection == "Rock") {
        // The Computer selected Paper
        if (computerSelection == "Paper") {
            printComputerWins(computerSelection, playerSelection);
            return false;
        }
        // The Computer selected Scissors
        else {
            printPlayerWins(computerSelection, playerSelection);
            return true;
        }
    }
    // The player selected Paper
    else if (playerSelection == "Paper") {
        // The Computer selected Scissors
        if (computerSelection == "Scissors") {
            printComputerWins(computerSelection, playerSelection);
            return false;
        }
        //The Computer selected Rock
        else {
            printPlayerWins(computerSelection, playerSelection);
            return true;
        }
    }
    // The player selected Scissors
    else if (playerSelection == "Scissors") {
        // The Computer selected Rock
        if (computerSelection == "Rock") {
            printComputerWins(computerSelection, playerSelection);
            return false;
        }
        // The Computer selected Paper
        else {
            printPlayerWins(computerSelection, playerSelection);
            return true;
        }
    }
}

function printTie(playerSelection) {
    prompt.textContent += "The round is a tie. Both choices where " + 
        playerSelection + ".";
}

function printPlayerWins(computerSelection, playerSelection) {
    prompt.textContent += "Player wins this round. " + playerSelection + " beats " + 
        computerSelection + ".";
}

function printComputerWins(computerSelection, playerSelection) {
    prompt.textContent += "Computer wins this round. " + computerSelection + " beats " + 
        playerSelection + ".";
}

function getComputerSelection() {
    const randomNumber = getRandomInt();

    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function printInput(player, selection) {
    prompt.textContent += `${player} chose ${selection}. \r\n`;
}

function gameWinner(winner, points) {
    if (points >= 5) {
        score.textContent += ` ${winner} wins the game!`;
        choices.forEach(button => button.disabled = true);
    }
}

// Keep Player and Computer score
let playerScore = 0;
let computerScore = 0;

function game(playerSelection) {

    let computerSelection = getComputerSelection();

    // Print inputs
    prompt.textContent = "";
    printInput("You", playerSelection);
    printInput("Computer", computerSelection);

    // Check for tie
    if (isTie(computerSelection, playerSelection)) {
        // Tie, skip the rest of the round
        return;
    }

    // No tie, check for the winner
    if (playerWins(computerSelection, playerSelection)) {
        // Player wins, increase score
        playerScore++;
    }
    else {
        // Computer wins, increase score
        computerScore++;
    }

    // Print winner
    if (playerScore > computerScore) {
        // Player wins
        score.textContent = `Player wins ${playerScore} - ${computerScore} 
        over the Computer!`;
    }
    else if (playerScore < computerScore) {
        // Computer wins
        score.textContent = `Computer wins ${computerScore} - ${playerScore} 
            over the Player!`;
    }
    else {
        // Tie
        score.textContent = `The game is a tie: ${playerScore} - ${computerScore}`;
    }

    gameWinner("Player", playerScore);
    gameWinner("Computer", computerScore);
}
