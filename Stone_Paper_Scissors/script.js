let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let result = document.querySelector(".result");
let uScore = document.getElementById("user-score");
let cScore = document.getElementById("comp-score");


const genCompChoice = () => {
    let options = ["stone", "paper", "scissors"];
    let choice = options[Math.floor(Math.random()*3)];
    return choice;
}

const playGame = (userChoice) => {
    compChoice = genCompChoice();
    
    if(userChoice == compChoice){
        result.innerHTML = "<p>!...DRAW...!</p>";
        result.style.backgroundColor = "rgb(49, 0, 91)";
    }
    else if((userChoice == "stone" && compChoice == "scissors") || (userChoice == "paper" && compChoice == "stone") || (userChoice == "scissors" && compChoice == "paper")){
        result.innerHTML = "<p>!...YOU WIN...!</p>";
        userScore += 1;
        uScore.innerHTML = userScore;
        result.style.backgroundColor = "green";
    }
    else{
        result.innerHTML = "<p>!...YOU LOSE...!</p>";
        compScore += 1;
        cScore.innerHTML = compScore;
        result.style.backgroundColor = "red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", function(){
        let userChoice = choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
    });
});