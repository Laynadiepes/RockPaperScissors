
function computerPlay(){
    const opcoes = ["rock", "paper", "scissors"];
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
}
let pontuacaoJogador = 0;


function begin() {

    for (i = 0; i <= 5; i++) {

        let gameBegin = confirm("let's play Rock, Paper, Scissors!");

        if (gameBegin) {
            let playerSelection = prompt("please enter rock, paper or scissors!").trim().toLowerCase();

            if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
                alert("Opção inválida");
                i--;
            }
            else {
                if (playerSelection === escolhaComputador)
                    alert("Empate / Computer: " + escolhaComputador + " Player: " + "playerSelection");
                else if (playerSelection == "rock" && escolhaComputador == "paper" ||
                    playerSelection == "paper" && escolhaComputador == "scissors" ||
                    escolhaComputador == "rock" && playerSelection == "scissors")
                    alert("Computer Wins! Computer: " + escolhaComputador + " Player: " + playerSelection);
                else {
                    alert("You win!! Computer: " + escolhaComputador + " Player: " + playerSelection);
                    pontuacaoJogador++;
                }
            }
        }
    }

    alert("Score " + pontuacaoJogador + "points");

}

begin();

