let humanScore = 0
let computerScore = 0


function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)

    if (number === 1) {
        console.log("computer: rock")
        return "rock"
    } else if (number === 0) {
        console.log("computer: paper")
        return "paper"
    } else {
        console.log("computer: scissors")
        return "scissors"
    }
}

function getHumanChoice() {
    input = prompt("Enter rock, paper or scissors")
    input = input.toLowerCase()

    if (input === "rock" || input === "paper" || input === "scissors") {
        console.log("human: " + input)
        return input
    } else {
        return console.log("unvalid input")
    }
}


function playGame() {
    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i <= 5; i++) {
        function playRound() {
            let humanChoice = getHumanChoice()
            let computerChoice = getComputerChoice()
        
            if (humanChoice === "rock" && computerChoice === "rock") {
                return "tie"
            } else if (humanChoice === "rock" && computerChoice === "paper") {
                computerScore ++
                return "human lost"
            } else if (humanChoice === "rock" && computerChoice === "scissors") {
                humanScore ++
                return "human won"
            } else if (humanChoice === "paper" && computerChoice === "rock") {
                humanScore ++
                return "human won"
            } else if (humanChoice === "paper" && computerChoice === "paper") {
                return "tie"
            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                computerScore ++
                return "human lost"
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                computerScore ++
                return "human lost"
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                humanScore ++
                return "human won"
            } else if (humanChoice === "scissors" && computerChoice === "scissors") {
                return "tie"
            }
        }
    }
}

console.log(playRound())
console.log("human score: " + humanScore)
console.log("computer score: " + computerScore)