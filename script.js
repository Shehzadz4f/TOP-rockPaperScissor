let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
let buttons = document.querySelectorAll('button');

function getComputerChoice() {
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
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
        return scissors;
    }
}

// function getHumanChoice() {
//     let humanChoice = prompt("Enter your choice: ")
//     return humanChoice;
// }

//To compare choices, increment and display scores
function playRound(humanChoice,computerChoice) {
    let displayPlayerScore = document.querySelector('#displayPlayerScore');
    let displayCompScore = document.querySelector('#displayCompScore');
    let roundResult = document.querySelector('#roundResult');
    roundCount++;
    if ( humanScore >= 5 || computerScore >= 5 ) {
        return;
    } else {
    if (humanChoice === computerChoice) {
        roundResult.textContent = `Round ${roundCount}: Draw. Both chose ${humanChoice}`;
    }
    else if ((humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")) {
        
        roundResult.textContent = "Round " + roundCount + ": You lose! " + humanChoice + 
        " was beaten by " + computerChoice;
        computerScore++;
        displayPlayerScore.textContent = `Player Score = ${humanScore}`;
        displayCompScore.textContent = `Computer Score = ${computerScore}`;
        }
    else if ((computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")) {
        
        roundResult.textContent = "Round " + roundCount + ": You Win! " + humanChoice + 
        " beats " + computerChoice;
        humanScore++;
        displayPlayerScore.textContent = `Player Score = ${humanScore}`;
        displayCompScore.textContent = `Computer Score = ${computerScore}`;
    }
}}
// Display Winner
function finalScore() {
    let results = document.querySelector('#results');
    let displayWinner = document.createElement('p');
    if ( humanScore === 5 ) {
        displayWinner.textContent = 'CONGRATULATIONS! YOU WIN!';    
        results.appendChild(displayWinner);   
        humanScore++;
    }
    else if ( computerScore === 5 ) {
        displayWinner.textContent = 'YOU LOST. BETTER LUCK NEXT TIME.';    
        results.appendChild(displayWinner);
        computerScore++;
    }
}

//Button functions
let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    finalScore();
});
paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    finalScore();
});
scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    finalScore();
});
