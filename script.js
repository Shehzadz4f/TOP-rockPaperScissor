console.log("Hello World")
let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let rock = "rock";
    let paper = "paper";
    let scissor = "scissors";
    let computerChoice = Math.random();
    if (computerChoice === 0) {
        getComputerChoice();
    }
    else if (computerChoice > 0 && computerChoice <= 0.33) {
        return rock;
    }
    else if (computerChoice > 0.33 && computerChoice <= 0.66) {
        return paper;
    }
    else {
        return scissor;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors!");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw. Both chose "+humanChoice)
    }
    else if ((humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log("You lose! " + computerChoice + " beats " + humanChoice)
        computerScore++;
    }
    else if ((computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")) {
        console.log("You Win! " + humanChoice + " beats " + computerChoice)
        humanScore++;
    }
}

function playGame() {
console.log(playRound(getHumanChoice(),getComputerChoice()))
console.log("Your score = " + humanScore)
console.log("Computer score = " + computerScore)
}

playGame();
playGame();
playGame();
playGame();
playGame();
