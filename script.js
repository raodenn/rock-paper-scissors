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

function getPlayerChoice(){
    let choice = prompt("Enter your choice: rock, paper, or scissors:").toLowerCase();
    return choice;
}



function playRound(){
    let playerChoice=getPlayerChoice();
    let ComputerChoice=getComputerChoice();
    if(ComputerChoice=="rock" && playerChoice=="paper")
    {
        console.log("you win! paper beats rock. ");
    }
    else if(ComputerChoice=="paper" && playerChoice=="scissors"){
        console.log("you win! scissors beat paper.");
    }
    else if (ComputerChoice=="scissors" && playerChoice=="rock"){
        console.log("you win! rock beats scissors");
    }
    else if(ComputerChoice=="paper" && playerChoice=="rock")
    {
        console.log("you lose! paper beats rock. ");
    }
    else if(ComputerChoice=="scissors" && playerChoice=="paper"){
        console.log("you lose! scissors beat paper.");
    }
    else if (ComputerChoice=="rock" && playerChoice=="scissors"){
        console.log("you lose! rock beats scissors");
    }
    else{
        console.log("it's a tie!");
    }

}
function playGame(){
    for(let i=0;i<5;i++){
       playRound(); 
    }
}
playGame();