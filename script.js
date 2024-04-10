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
const Result=document.querySelector("#result");
let choice="";
let compScore=0;
let playScore=0;

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

// function getPlayerChoice(){
//     choice = "";
//     return choice;
// }



function playRound(){
    let playerChoice=choice;
    let ComputerChoice=getComputerChoice();
    
    if(ComputerChoice=="rock" && playerChoice=="paper")
    {
        Result.textContent="you win! paper beats rock. ";
        playScore++;
    }
    else if(ComputerChoice=="paper" && playerChoice=="scissors"){
        Result.textContent="you win! scissors beat paper.";
        playScore++;
    }
    else if (ComputerChoice=="scissors" && playerChoice=="rock"){
        Result.textContent="you win! rock beats scissors";
        playScore++;
    }
    else if(ComputerChoice=="paper" && playerChoice=="rock")
    {
         Result.textContent="you lose! paper beats rock. ";
         compScore++;
    }
    else if(ComputerChoice=="scissors" && playerChoice=="paper"){
         Result.textContent="you lose! scissors beat paper.";
         compScore++;
    }
    else if (ComputerChoice=="rock" && playerChoice=="scissors"){
         Result.textContent="you lose! rock beats scissors";
         compScore++;
    }
    else{
         Result.textContent="it's a tie!";
    }

    if(playScore===5||compScore===5){
        Result.textContent= playScore > compScore ? "player wins" : "computer wins";
    }
}
function playGame(){
   
    playRound(); }
    

