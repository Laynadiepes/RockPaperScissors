
function computerPlay() {
    const opcoes = ["rock", "paper", "scissors"];
    return opcoes[Math.floor(Math.random() * opcoes.length)];
}

function player() {
    return prompt("please enter rock, paper or scissors!").trim().toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        return("Opção inválida");
        i--;
    }
    else {
        if (playerSelection === computerSelection)
            return("It's a draw!! Both played " +computerSelection);
        else if (playerSelection == "rock" && computerSelection == "paper" ||
            playerSelection == "paper" && computerSelection == "scissors" ||
            computerSelection == "rock" && playerSelection == "scissors")
            return("Computer Wins! "+ computerSelection+ " beats " + playerSelection);
        else {
            return("You win!! " + playerSelection+ " beats " + computerSelection);
        }
    }
}

function playFiveRounds() {
    let start = confirm("let's play Rock, Paper, Scissors!");
    if (start) {
        for(i=0; i<5; i++){
            const playerSelection = player();
            console.log(playRound(playerSelection, computerSelection));
        }  
        console.log("Nice Play! See you soon! Bye");  
    }
    else
    console.log("goodbye");
}



const computerSelection = computerPlay();
playFiveRounds();


