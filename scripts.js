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
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

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



const choices = {player: "", computer: ""};
function playerSelection(item) {
    item.addEventListener('click', (e) => {
        choices.player = item.innerHTML;
        document.querySelector("#player-choice").innerHTML = 
        `You: ${choices.player}`;
        item.classList.add('chosen');
    });
}

function clearClass() {
    buttons.forEach( function(item) {
        item.classList.remove('chosen');
    });
}



// listen for player input 

const buttons = document.querySelectorAll('.selectbtn');
buttons.forEach(playerSelection);


const score = document.querySelector('#score');

const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');

let playerWins = 0;
let computerWins = 0;
window.addEventListener('click', (e) => {
    
    if (choices.player == '') {
        return
    } 

    choices.computer = getComputerChoice().toUpperCase();
    computerChoice.innerHTML = `Computer: ${choices.computer}`;

    const roundWinner = playRound(choices.player, choices.computer);

    if (roundWinner === 'player wins') {
        playerWins++;
    } else if (roundWinner == 'computer wins') {
        computerWins++;
    }
    choices.player ="";
    choices.computer = "";
    score.innerHTML = `You: ${playerWins} Computer: ${computerWins}`;


    // merge these functions to shorter
    if (playerWins === 5) {
        alert("You won!");
        playerWins = 0;
        computerWins = 0; 
        score.innerHTML = `You: ${playerWins} Computer: ${computerWins}`;
    }
    if (computerWins === 5) {
        alert("Computer Won!");
        playerWins = 0;
        computerWins = 0;
        score.innerHTML = `You: ${playerWins} Computer: ${computerWins}`;
    }

    setTimeout(clearClass, 800);
    
    
})
