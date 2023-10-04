const options = ["rock" , "paper" , "scissors"]

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer"
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a tie."
    }
    else if(result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}.`
    } 
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}

function getPlayerChoice(){
    let validInput = false;
    while(validInput == false){
        const choice = prompt("Rock, Paper, or Scissors?");
        if(choice == null){
            continue;
        }
        const choiceinLower = choice.toLowerCase();
        if(options.includes(choiceinLower)){
            validInput = true;
            return choiceinLower;
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            playerScore++;
        }
        if(checkWinner(playerSelection, computerSelection) == "Computer"){
            computerScore++;
        }
    }
    console.log("Game Over")
    if(playerScore > computerScore){
        console.log("You beat the computer!");
    }
    else if(playerScore < computerScore){
        console.log("The machine defeated you!");
    }
    else {
        console.log("You tied the computer.")
    }
}

game();
