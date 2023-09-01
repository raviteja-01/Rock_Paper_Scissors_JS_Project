const fistContainer = document.getElementById("fistContainer");
const handContainer = document.getElementById("handContainer");
const fingerContainer = document.getElementById("fingerContainer");
const computerScoreElement = document.getElementById("computerScore");
const userScoreElement = document.getElementById("userScore");
const bottomContainer = document.getElementById("bottomContainer");
const resultContainer = document.getElementById("resultContainer");
const playAgainBtn = document.getElementById("playAgainBtn");
const userSelectedOption = document.getElementById("userSelectedOption");
const computerSelectedOption = document.getElementById("computerSelectedOption");
const bottomBackgroundContainer = document.getElementById("bottomBackgroundContainer");
const resultMessageHeading = document.getElementById("resultMessageHeading");
const resultMessagePara = document.getElementById("resultMessagePara");
const fistIcon = document.getElementById("fistIcon");
const nextBtn = document.getElementById("nextBtn");
const rulesBtn = document.getElementById("rulesBtn");
const modalContainer = document.getElementById("modalContainer");
const crossBtn = document.getElementById("crossBtn");
const rulesBtnWinnerPage = document.getElementById("rulesBtnWinnerPage");
const modalContainerWinnerPage = document.getElementById("modalContainerWinnerPage");
const crossBtnWinnerPage = document.getElementById("crossBtnWinnerPage");
const userDivElement = document.createElement("div");
const compDivElement = document.createElement("div");
let userImgElement;
let compImgElement;

const playAgainBtnWinnerPage = document.getElementById("playAgainBtnWinnerPage");

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

const createFistContainer = (action) =>{
    if (action === "user"){
        userImgElement = document.createElement("img");
        userImgElement.setAttribute("src","./assets/icons/fistIcon.svg");
        userDivElement.appendChild(userImgElement);
        userDivElement.classList.add("icon-container");
        userDivElement.classList.add("fist-container");
        userSelectedOption.appendChild(userDivElement);
    }
    else{
        compImgElement = document.createElement("img");
        compImgElement.setAttribute("src","./assets/icons/fistIcon.svg");
        compDivElement.appendChild(compImgElement);
        compDivElement.classList.add("icon-container");
        compDivElement.classList.add("fist-container");
        computerSelectedOption.appendChild(compDivElement);
    }
}

const createHandContainer = (action) =>{
    if (action === "user"){
        userImgElement = document.createElement("img");
        userImgElement.setAttribute("src","./assets/icons/handIcon.svg");
        userDivElement.appendChild(userImgElement);
        userDivElement.classList.add("icon-container");
        userDivElement.classList.add("hand-container");
        userSelectedOption.appendChild(userDivElement);
    }
    else{
        compImgElement = document.createElement("img");
        compImgElement.setAttribute("src","./assets/icons/handIcon.svg");
        compDivElement.appendChild(compImgElement);
        compDivElement.classList.add("icon-container");
        compDivElement.classList.add("hand-container");
        computerSelectedOption.appendChild(compDivElement);
    }
}

const createFingerContainer = (action) =>{
    if (action === "user"){
        userImgElement = document.createElement("img");
        userImgElement.setAttribute("src","./assets/icons/fingerIcon.svg");
        userDivElement.appendChild(userImgElement);
        userDivElement.classList.add("icon-container");
        userDivElement.classList.add("finger-container");
        userSelectedOption.appendChild(userDivElement);
    }
    else{
        compImgElement = document.createElement("img");
        compImgElement.setAttribute("src","./assets/icons/fingerIcon.svg");
        compDivElement.appendChild(compImgElement);
        compDivElement.classList.add("icon-container");
        compDivElement.classList.add("finger-container");
        computerSelectedOption.appendChild(compDivElement);
    }
}


const gameResult = (userOption) =>{
    const computerOption = computerRandomOption();
    console.log("computer option....",computerOption);
    console.log("user option....",userOption);
    bottomBackgroundContainer.classList.add("toggle-none");
    resultContainer.classList.remove("toggle-none");
    resultContainer.classList.add("toggle-display");
    if (userOption === "ROCK"){
        createFistContainer("user");
        if (computerOption === "ROCK"){
            createFistContainer("computer");
            console.log("Game is tied.");
            resultMessageHeading.innerText = "TIE UP";
            resultMessagePara.innerText="";
            playAgainBtn.innerText = "REPLAY";
        }
        else if (computerOption === "PAPER"){
            createHandContainer("computer")
            resultMessageHeading.innerText = "YOU LOST";
            updateComputerScore();
        }
        else if (computerOption === "SCISSORS"){
            createFingerContainer("computer");
            console.log("user wins");
            resultMessageHeading.innerText = "YOU WON";
            nextBtn.classList.remove("toggle-none");
            updateUserScore();
        }
    }
    else if (userOption === "PAPER"){
        createHandContainer("user");
        if (computerOption === "ROCK"){
            createFistContainer("computer");
            console.log("user wins");
            resultMessageHeading.innerText = "YOU WON";
            nextBtn.classList.remove("toggle-none");
            updateUserScore();
        }
        else if (computerOption === "PAPER"){
            createHandContainer("computer");
            console.log("Game Tied.");
            resultMessageHeading.innerText = "TIE UP";
            resultMessagePara.innerText="";
            playAgainBtn.innerText = "REPLAY";
        }
        else if (computerOption === "SCISSORS"){
            createFingerContainer("computer");
            updateComputerScore();
            resultMessageHeading.innerText = "YOU LOST";
        }
    }
    else if (userOption === "SCISSORS"){
        createFingerContainer("user");
        if (computerOption === "ROCK"){
            createFistContainer("computer");
            resultMessageHeading.innerText = "YOU LOST";
            updateComputerScore();
        }
        else if (computerOption === "PAPER"){
            createHandContainer("computer")
            console.log("user wins.");
            resultMessageHeading.innerText = "YOU WON";
            nextBtn.classList.remove("toggle-none");
            updateUserScore();
        }
        else if (computerOption === "SCISSORS"){
            createFingerContainer("computer");
            console.log("Game tied");
            resultMessageHeading.innerText = "TIE UP";
            resultMessagePara.innerText="";
            playAgainBtn.innerText = "REPLAY";
        }
    }

}

if (fistContainer){
    fistContainer.onclick = () =>{
    console.log("ROCK selected.")
    gameResult("ROCK");
}
}
if (handContainer){
    handContainer.onclick = () =>{
    console.log("PAPER SELECTED");
    gameResult("PAPER");
}
}

if (fingerContainer){
    fingerContainer.onclick = () =>{
    console.log("SCISSORS SELECTED");
    gameResult("SCISSORS");
}
}

if (playAgainBtn){
    playAgainBtn.onclick = () =>{
        resultContainer.classList.add("toggle-none");
        resultContainer.classList.remove("toggle-display");
        bottomBackgroundContainer.classList.remove("toggle-none");
        if (!nextBtn.classList.contains("toggle-none")){
            nextBtn.classList.add("toggle-none");
        }
        if (!resultMessagePara.innerText){
            resultMessagePara.innerText = "AGAINST PC";
        }
        if (playAgainBtn.innerText === "REPLAY"){
            playAgainBtn.innerText = "PLAY AGAIN";
        }
        console.log(bottomContainer);
        userDivElement.removeChild(userImgElement);
        compDivElement.removeChild(compImgElement);
        userDivElement.classList = [];
        compDivElement.classList=[];
        userSelectedOption.removeChild(userDivElement);
        computerSelectedOption.removeChild(compDivElement);
    }
}

if (nextBtn){
    nextBtn.onclick = () =>{
        window.location.href="winnerPage.html";
    }
}

if (rulesBtn){
    rulesBtn.onclick = () =>{
        console.log("rules btn clicked")
        modalContainer.classList.remove("toggle-none");
    }
}

if (rulesBtnWinnerPage){
    rulesBtnWinnerPage.onclick = () =>{
        console.log("rules btn clicked")
        modalContainerWinnerPage.classList.remove("toggle-none");
    }
}

if (playAgainBtnWinnerPage){
    playAgainBtnWinnerPage.onclick = () =>{
        console.log("clicked....");
        window.location.href="index.html";
    }
}

if (crossBtn){
    crossBtn.onclick = () =>{
        modalContainer.classList.add("toggle-none");
    }
}

if (crossBtnWinnerPage){
    crossBtnWinnerPage.onclick = () =>{
        modalContainerWinnerPage.classList.add("toggle-none");
    }
}







getScoresFromLocalStorage();