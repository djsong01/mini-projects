function getComputerChoice(){
    let choice = Math.floor(Math.random()*100);
    if (choice <= 33){
        return "Rock"
    }
    else if (choice <= 66){
        return "Paper"
    }
    else{
        return "Scissor"
    }
}

function getHumanChoice(){
    let a = prompt("Rock, Paper, or Scissor?");
    let choice = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
    if(choice === "Rock" || choice === "Paper" || choice === "Scissor"){
        return choice;
    }
    else {
        alert("Incorrect input, please try again");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function playRound(humanChoice,computerChoice){
    let hScore = 0;
    let cScore = 0;
    let roundCount = 1;

    if (humanChoice === computerChoice){
        roundCount++;
    }
    else if (humanChoice === "Rock" && computerChoice === "Paper"){
        cScore++;
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissor"){
        hScore++;
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock"){
        hScore++;
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissor"){
        cScore++;
    }
    else if (humanChoice === "Scissor" && computerChoice === "Rock"){
        cScore++;
    }
    else if (humanChoice === "Scissor" && computerChoice === "Paper"){
        hScore++;
    }
    
    return{
        humanScore: hScore,
        computerScore: cScore,
        rounds: roundCount,
    };
}

const rock = document.querySelector("#Rock");
rock.value = "Rock";
const paper = document.querySelector("#Paper");
paper.value = "Paper"
const scissor = document.querySelector("#Scissor")
scissor.value ="Scissor"

function displayScores(humanScore, computerScore, rounds) {    
    const hScore = document.querySelector('#human-score');
    const cScore = document.querySelector('#comp-score');
    const rds = document.querySelector('#rounds');

    hScore.textContent = `Human Score: ${humanScore}`; 
    cScore.textContent = `Computer Score: ${computerScore}`;
    rds.textContent = `Rounds Played: ${rounds}`;
}


rock.addEventListener(('click'), () => {
    let comp = getComputerChoice();
    const roundResult = playRound("Rock",comp);
    humanScore += roundResult.humanScore;
    computerScore += roundResult.computerScore;
    rounds += roundResult.rounds;

    console.log("Round: " + rounds);
    console.log("Computer says " + comp);
    displayScores(humanScore, computerScore, rounds);
    });

paper.addEventListener(('click'), () => {
    let comp = getComputerChoice();
    const roundResult = playRound("Paper",comp);
    humanScore += roundResult.humanScore;
    computerScore += roundResult.computerScore;
    rounds += roundResult.rounds;

    console.log("Round: " + rounds);
    console.log("Computer says " + comp);
    displayScores(humanScore, computerScore, rounds);
    });

scissor.addEventListener(('click'), () => {
    let comp = getComputerChoice();
    const roundResult = playRound("Scissor",comp);
    humanScore += roundResult.humanScore;
    computerScore += roundResult.computerScore;
    rounds += roundResult.rounds;

    console.log("Round: " + rounds);
    console.log("Computer says " + comp);
    displayScores(humanScore, computerScore, rounds);
    });
            