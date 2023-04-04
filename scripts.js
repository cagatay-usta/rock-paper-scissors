function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    let number = getRndInt(1, 3);
    switch(number) {
        case 1:
            return "rock"
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
    
}

function playRound(playerSelection, computerSelection) {
    // if same = draw | if ps: rock and cs: paper -> cs win  |
    if (playerSelection === computerSelection) {
        return "draw";

    } else if ( (playerSelection == "rock"     && computerSelection == "paper") 
        ||      (playerSelection == "paper"    && computerSelection == "scissors") 
        ||      (playerSelection == "scissors" && computerSelection == "rock") ) {
        return "computer wins";

    } else {
        return "player wins";
    }
}

function playGame(rounds) {

    let playerWins = 0, computerWins = 0;

    for (let i = 0; i < rounds; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Enter one: rock, paper or scissors.").toLowerCase();
        const roundResult = playRound(playerSelection, computerSelection);
        
        if (roundResult == "player wins") {
            playerWins++;
        } else if (roundResult == "computer wins") {
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        return "player won the game";
    } else if (playerWins < computerWins) {
        return "computer won the game";
    } else {
        return "draw";
    }
}




console.log(playGame(5))