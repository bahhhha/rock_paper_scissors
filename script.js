let playerSelection, computerSelection;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function computerPlay() {
    let move_i = getRandomInt(3);
    let move;
    switch (move_i) {
        case 0:
            move = "rock";
            break;
        case 1:
            move = "paper";
            break;
        case 2:
            move = "scissors";
            break;
    }
    return move;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
        return "Tie! No one won.";
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
     playerSelection == "scissors" && computerSelection == "paper" || 
     playerSelection == "paper" && computerSelection == "rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function startgame(id) {
    let playerSelection = id;
    let computerSelection = computerPlay();
    document.getElementById("playerchoice").innerHTML = playerSelection;
    document.getElementById("computerchoice").innerHTML = computerSelection;
    document.getElementById("verdict").innerHTML = playRound(playerSelection, computerSelection);
}