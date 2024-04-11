function getComputerChoice(){
    let x=Math.floor(Math.random() * (4- 1) )+1;
    if(x===1){
        return "rock";
    }
    else if(x===2){
        return "paper";
    }
    else if(x===3){
        return "scissors";
    }
}

const Rock=document.querySelector("#rock");
const Paper=document.querySelector("#paper");
const Scissors=document.querySelector("#scissors");
const Result=document.querySelector("#winner");
const playscore=document.querySelector("#playerScoreValue");
const computerscore=document.querySelector("#compScoreValue");
const playerEmoji=document.querySelector("#playerChoiceValue");
const computerEmoji=document.querySelector("#compChoiceValue");
let choice="";
let compScore=0;
let playScore=0;
let gameIsOver = false;

Rock.addEventListener("click",()=>{
    choice="rock";
    playGame();
})

Paper.addEventListener("click",()=>{
    choice="paper";
    playGame();
})

Scissors.addEventListener("click",() =>{
    choice="scissors";
    playGame();
})




function playRound(){
    let playerChoice=choice;
    let ComputerChoice=getComputerChoice();
    
    if(ComputerChoice=="rock" && playerChoice=="paper")
    {
        Result.textContent="you win! paper beats rock. ";
        playScore++;
        playscore.textContent=playScore;
        computerEmoji.textContent = String.fromCharCode(0x270A);
        playerEmoji.textContent = String.fromCharCode(0x270B);
    }
    else if(ComputerChoice=="paper" && playerChoice=="scissors"){
        Result.textContent="you win! scissors beat paper.";
        playScore++;
        playscore.textContent=playScore;
        computerEmoji.textContent = String.fromCharCode(0x270B);
        playerEmoji.textContent = String.fromCharCode(0x270C);
    }
    else if (ComputerChoice=="scissors" && playerChoice=="rock"){
        Result.textContent="you win! rock beats scissors";
        playScore++;
        playscore.textContent=playScore;
        computerEmoji.textContent = String.fromCharCode(0x270C);
        playerEmoji.textContent = String.fromCharCode(0x270A);
    }
    else if(ComputerChoice=="paper" && playerChoice=="rock")
    {
         Result.textContent="you lose! paper beats rock. ";
         compScore++;
         computerscore.textContent=compScore;
         computerEmoji.textContent = String.fromCharCode(0x270B);
         playerEmoji.textContent = String.fromCharCode(0x270A);
    }
    else if(ComputerChoice=="scissors" && playerChoice=="paper"){
         Result.textContent="you lose! scissors beat paper.";
         compScore++;
         computerscore.textContent=compScore;
         computerEmoji.textContent = String.fromCharCode(0x270C);
         playerEmoji.textContent = String.fromCharCode(0x270B);
    }
    else if (ComputerChoice=="rock" && playerChoice=="scissors"){
         Result.textContent="you lose! rock beats scissors";
         compScore++;
         computerscore.textContent=compScore;
         computerEmoji.textContent = String.fromCharCode(0x270A);
         playerEmoji.textContent = String.fromCharCode(0x270C);
    }
    else{
         Result.textContent="it's a tie!";
    }

    if(playScore === 5 || compScore === 5) {
        gameIsOver = true;
        Result.textContent = playScore > compScore ? "Player wins!" : "Computer wins!";
        addRestartButton();
    }
}

function playGame() {
    if (gameIsOver) return; 
    playRound(); 
}


function addRestartButton() {
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Game';
    restartButton.setAttribute("style", "color: #e6e6e6; text-align:center; position:fixed; top:46%; left:45%; font-size:24px;")
    restartButton.addEventListener('click', resetGame);
    const restartContainer = document.createElement('div');
    restartContainer.id = 'restartContainer';
    restartContainer.setAttribute("style", " background-color: #e6e6e6;");
    restartContainer.appendChild(restartButton);
    document.body.appendChild(restartContainer);
    
}

function resetGame() {
    gameIsOver = false;
    playScore = 0;
    compScore = 0;
    computerscore.textContent=0;
    playscore.textContent=0;
    Result.textContent = '';
    computerEmoji.textContent = '';
    playerEmoji.textContent = '';
    const restartContainer = document.getElementById('restartContainer');
    restartContainer.parentNode.removeChild(restartContainer);
}
