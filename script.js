let playerSelection, computerSelection;
let playerscore = 0;
let computerscore = 0;
document.getElementById("computerscore").innerHTML = computerscore;
document.getElementById("playerscore").innerHTML = playerscore;

function updatescore(computerscore, playerscore) {
    if(playerscore == 5) {
        document.getElementById("verdict2").innerHTML = "You've got 5 points! Humanity wins!";
    }
    else if(computerscore == 5) {
        document.getElementById("verdict2").innerHTML = "The computer has 5 points! Machines take over the world!";
    }
    document.getElementById("computerscore").innerHTML = computerscore;
    document.getElementById("playerscore").innerHTML = playerscore;
}

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

function playRound(playerSelection, computerSelection, verdict) {
    if (playerSelection == computerSelection)
        return "Tie! No one won.";
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
     playerSelection == "scissors" && computerSelection == "paper" || 
     playerSelection == "paper" && computerSelection == "rock") {
        updatescore(computerscore, ++playerscore)
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        updatescore(++computerscore, playerscore)
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function startgame(id) {
    
    let playerSelection = id;
    let computerSelection = computerPlay();
    document.getElementById("playerchoice").innerHTML = playerSelection;
    document.getElementById("computerchoice").innerHTML = computerSelection;
    let v = playRound(playerSelection, computerSelection);
    document.getElementById("verdict").innerHTML = v;
    if (v.contains("You Win!")) {
        return "win";
    }
    else {
        return "lose";
    }
}


function game(id) {
    let i = id;
    if(playerscore == 5 || computerscore == 5) {
        document.getElementById("verdict2").innerHTML = '';
        playerscore = 0;
        computerscore = 0;
    }
    let res = startgame(i);

}
