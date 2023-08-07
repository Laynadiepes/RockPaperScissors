
function computerPlay() {
    const opcoes = ["rock", "paper", "scissors"];
    return opcoes[Math.floor(Math.random() * opcoes.length)];
}

function player() {
    return prompt("please enter rock, paper or scissors!").trim().toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        alert("Opção inválida");
        i--;
    }
    else {
        if (playerSelection === computerSelection)
            alert("Empate / Computer: " + computerSelection + " Player: " + playerSelection);
        else if (playerSelection == "rock" && computerSelection == "paper" ||
            playerSelection == "paper" && computerSelection == "scissors" ||
            computerSelection == "rock" && playerSelection == "scissors")
            alert("Computer Wins! Computer: " + computerSelection + " Player: " + playerSelection);
        else {
            alert("You win!! Computer: " + computerSelection + " Player: " + playerSelection);
        }
    }
}

function playFiveRounds() {
    let start = confirm("let's play Rock, Paper, Scissors!");
    if (start) {
        for(i=0; i<=5; i++){
            const playerSelection = player();
            playRound(playerSelection, computerSelection);
        }    
    }
    else
        alert("goodbye");
}



const computerSelection = computerPlay();
playFiveRounds();


