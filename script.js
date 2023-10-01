
function getComputerchoice() {
    const number = Math.floor(Math.random() * 1000);
    if (number >= 667){
        return 'Rock';
    } else if (number <= 333){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}


const playerSelection = "Rock";
const computerSelection = getComputerchoice();

const playerWin = ("You win! " + playerSelection + " beats " + computerSelection.toLowerCase() + ".");
const playerLose = ("You lose! " + computerSelection + " beats " + playerSelection.toLowerCase() + ".");
const playerTie = ("You tie! " + playerSelection + " ties with " + computerSelection.toLowerCase() + ".");

function playRound(playerSelection, computerSelection){
    if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "paper")){
       return playerWin;
    } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "rock")){
        return playerTie;
    } else {
        return playerLose;
    }
}

console.log(playRound(playerSelection, computerSelection));
