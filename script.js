let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// function generates random integer from 0 to 9(inclusive)
const generateTarget = () => Math.floor(Math.random()*10)
// console.log(generateTarget());


const getAbsoluteDistance = (numInput, winningNum) => Math.abs(winningNum - numInput)

//compares guess made by computer and human(user) to see which is closest to the set/target number
//if computer is closer, it wins(false) and if human is closer or within same prox as computer, the user wins (true)
const compareGuesses = (humanGuess, computerGuess, targetNum) =>{
    const humanProx = getAbsoluteDistance(humanGuess, targetNum);
    const computerProx = getAbsoluteDistance(computerGuess, targetNum);

    if (computerProx > humanProx || computerProx === humanProx){
        return true;
    } return false;
}
//  console.log(compareGuesses(7, 3, 8));



 //updates score (humanScore/computeScore) based on string value inputed
const updateScore = winner => winner === "human" ? humanScore++: computerScore++



//increases the value of currentRoundNumber
const advanceRound = () => currentRoundNumber++

