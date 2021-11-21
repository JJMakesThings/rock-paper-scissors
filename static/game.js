
function getComputerPlay(){
    const random = Math.floor(Math.random()*3)
    switch (random) {
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    };
};

function getWinner(humanPlay, computerPlay){
    if (humanPlay==computerPlay){
        return "Draw"
    };
    switch (humanPlay){
        case "ROCK":
            return (computerPlay=="PAPER") ? "Computer" : "Human"
        case "PAPER":
            return (computerPlay=="SCISSORS") ? "Computer" : "Human"
        case "SCISSORS":
            return (computerPlay=="ROCK") ? "Computer" : "Human"
    };
};

function playRound(){
    let humanPlay = prompt("Choose your weapon (Rock, Paper, Scissors").toUpperCase();
    while (!(["ROCK","PAPER","SCISSORS"].includes(humanPlay))) {
        humanPlay = prompt("Not valid! Choose your weapon (Rock, Paper, Scissors)").toUpperCase();
        console.log(humanPlay);
    };
    let computerPlay = getComputerPlay();
    let winner = getWinner(humanPlay, computerPlay);
    console.log(`You choose ${humanPlay}`);
    console.log(`Computer choose ${computerPlay}`);
    return winner;
};

function game(){
    let humanScore=0;
    let computerScore=0;
    let round=0
    let winner;
    while(humanScore < 3 && computerScore < 3){
        round++
        winner = playRound();
        console.log(winner)
        switch (winner){
            case "Draw":
                console.log("Its a Draw");
                break;
            case "Human":
                console.log(`Human Wins Round ${round}!`);
                humanScore++;
                break;
            case "Computer":
                console.log(`Computer Wins Round ${round}!`);
                computerScore ++;
                break;
        };
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
    };
    (humanScore<computerScore)?console.log("Computer Wins"):console.log("Human Wins");
};

game();

