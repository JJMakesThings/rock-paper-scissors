
function computerPlay(){
    const random = Math.floor(Math.random()*3)
    switch (random) {
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
};

function playRound(){
    var humanPlay = prompt("Choose your weapon (Rock, Paper, Scissors").toUpperCase()
    while (humanPlay !== "ROCK"||"PAPER"||"SCISSORS"||"R"||"P"||"S") {
        humanPlay = prompt("Not valid! Choose your weapon (Rock, Paper, Scissors").toUpperCase()
    };
    var computerPlay = computerPlay();
    if (computerPlay==humanPlay){
        return "Draw"
    }
    switch ()




}



console.log(computerPlay());