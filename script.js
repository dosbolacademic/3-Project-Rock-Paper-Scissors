const getComputerChoice = ()=>{
    const array = ["rock","scissors","paper"]
    return array[Math.floor(Math.random()*array.length)]
}


const getHumanChoice =() =>{
    let given =["rock","scissors","paper"]
    let input = ((prompt("Enter your Answer: ")).toLowerCase()).trim()
    while (!given.includes(input)){
        console.log("Try it again")
        input = ((prompt("Enter your Answer: ")).toLowerCase()).trim()
    }
        
    return input
}


let humanScore = 0
let computerScore = 0




const playRound = () => {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    


    

    if (humanSelection===computerSelection){
        console.log("It's a tie!");
    }
    
    else if((humanSelection==="rock" && computerSelection==="scissors") || (humanSelection==="scissors" && computerSelection==="paper") ||
    (humanSelection==="paper" && computerSelection==='rock')){
        humanScore++;
        console.log("You won my friend", "Current Score: Human -",humanScore, "Computer - ",computerScore)
        
    }
    else {
        computerScore++;
        console.log("You lost this round. Better luck next time!",humanScore, "Computer - ",computerScore)

    }

      
}
const playGame=  () =>{
    for(let i=0;i<5;i++){
        playRound()
    }

    if (humanScore>computerScore){
        console.log("Congratulations! You won the game!");

    
    }
    else if (humanScore<computerScore){
        console.log("The computer won the game. Better luck next time!");


    }
    else{
        console.log("It's a tie!");

    }
    
}