const fistContainer = document.getElementById("fistContainer");
const handContainer = document.getElementById("handContainer");
const fingerContainer = document.getElementById("fingerContainer");
const computerScoreElement = document.getElementById("computerScore");
const userScoreElement = document.getElementById("userScore");

const computerOptions = ["ROCK","PAPER","SCISSORS"];

const computerRandomOption = () =>{
    const optionsLength = computerOptions.length;
    const randomIndex =Math.floor(Math.random() * optionsLength);
    const computerOption = computerOptions[randomIndex];
    return computerOption;
}

const updateComputerScore = () =>{
    let compScore = + computerScoreElement.innerText;
    compScore += 1;
    computerScoreElement.innerText = compScore;
    compScore = JSON.stringify(compScore);
    localStorage.setItem("computerScore",compScore);
}

const updateUserScore = () =>{
    let userScore = + userScoreElement.innerText;
    userScore += 1;
    userScoreElement.innerText = userScore;
    compScore = JSON.stringify(userScore);
    localStorage.setItem("userScore",userScore);
}

const getScoresFromLocalStorage = () =>{
    const compScore = localStorage.getItem("computerScore");
    const userScore = localStorage.getItem("userScore");
    console.log(compScore,userScore);
    if (compScore){
        computerScoreElement.innerText = compScore;
    }
    else{
       computerScoreElement.innerText = 0; 
    }
    if (userScore){
        userScoreElement.innerText = userScore;
    }
    else{
        userScoreElement.innerText = 0;
    }
}


const gameResult = (userOption) =>{
    const computerOption = computerRandomOption();
    console.log("computer option....",computerOption);
    console.log("user option....",userOption);
    if (userOption === "ROCK"){
        if (computerOption === "ROCK"){
            console.log("Game is tied.");
        }
        else if (computerOption === "PAPER"){
            updateComputerScore();
        }
        else if (computerOption === "SCISSORS"){
            console.log("user wins");
            updateUserScore();
        }
    }
    else if (userOption === "PAPER"){
        if (computerOption === "ROCK"){
            console.log("user wins");
            updateUserScore();
        }
        else if (computerOption === "PAPER"){
            console.log("Game Tied.");
        }
        else if (computerOption === "SCISSORS"){
            updateComputerScore();
        }
    }
    else if (userOption === "SCISSORS"){
        if (computerOption === "ROCK"){
            updateComputerScore();
        }
        else if (computerOption === "PAPER"){
            console.log("user wins.");
            updateUserScore();
        }
        else if (computerOption === "SCISSORS"){
            console.log("Game tied");
        }
    }

}

fistContainer.onclick = () =>{
    console.log("ROCK selected.")
    gameResult("ROCK");
}

handContainer.onclick = () =>{
    console.log("PAPER SELECTED");
    gameResult("PAPER");
}

fingerContainer.onclick = () =>{
    console.log("SCISSORS SELECTED");
    gameResult("SCISSORS");
}


getScoresFromLocalStorage();