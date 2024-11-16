let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    const resultDiv = document.querySelector("#results");
    const scoreDiv = document.querySelector("#score");

    let resultMessage = "";
    if (playerSelection === computerSelection) {
        resultMessage = `It's a tie! Both chose ${playerSelection}.`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        resultMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        resultMessage = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    // Update the result display
    resultDiv.textContent = resultMessage;
    scoreDiv.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;

    // Check for a winner
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "Human" : "Computer";
        resultDiv.textContent = `Game over! ${winner} wins!`;
        disableButtons();
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll(".choice");
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    document.querySelector("#results").textContent = "Start a new game!";
    document.querySelector("#score").textContent =
        "Score: Human 0 - Computer 0";

    const buttons = document.querySelectorAll(".choice");
    buttons.forEach((button) => {
        button.disabled = false;
    });
}

// Add buttons and event listeners
const container = document.querySelector("#container");

const buttons = ["rock", "paper", "scissors"].map((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.classList.add("choice");
    button.addEventListener("click", () => playRound(choice));
    return button;
});

buttons.forEach((button) => container.appendChild(button));

const scoreDiv = document.createElement("div");
scoreDiv.id = "score";
scoreDiv.textContent = "Score: Human 0 - Computer 0";
container.appendChild(scoreDiv);

const resultDiv = document.createElement("div");
resultDiv.id = "results";
resultDiv.textContent = "Start a new game!";
container.appendChild(resultDiv);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset Game";
resetButton.addEventListener("click", resetGame);
container.appendChild(resetButton);
