const choices = document.querySelectorAll('button');
console.log(choices);

choices.forEach(button => button.addEventListener('click', function(e) {
    console.log(e.target.id);
}));

function getRandomInt(max=3) {
    //Return a random integer between 0 (inclusive) and max (exclusive)
    const min = 0;
    max = Math.floor(max);

    // console.log(min, max);
    return Math.floor(Math.random() * max);
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
    console.log("The round is a tie. Both choices where " + 
        playerSelection + ".");
}

function printPlayerWins(computerSelection, playerSelection) {
    console.log("Player wins this round. " + playerSelection + " beats " + 
        computerSelection + ".");
}

function printComputerWins(computerSelection, playerSelection) {
    console.log("Computer wins this round. " + computerSelection + " beats " + 
        playerSelection + ".");
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
    console.log(player, "chose", selection);
}

function game() {
    // Keep Player and Computer score
    let playerScore = 0;
    let computerScore = 0;

    let computerSelection = getComputerSelection();
    let playerSelection = getPlayerSelection();

    // Print inputs
    printInput("Player", playerSelection);
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
        console.log("Player wins", playerScore, "-", computerScore, 
            "over the Computer!");
    }
    else if (playerScore < computerScore) {
        // Computer wins
        console.log("Computer wins", computerScore, "-", playerScore, 
            "over the Player!");
    }
    else {
        // Tie
        console.log("The game is a tie:", playerScore, "-", computerScore);
    }
}
