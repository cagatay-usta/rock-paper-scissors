function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    let number = getRndInt(1, 3);
    switch(number) {
        case 1:
            choice = "rock"
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice;
}

function getPlayerChoice() {

}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

console.log(computerSelection)