let flag = 0;
let turn = 0;

let moves = document.querySelectorAll("td");
let restart = document.querySelector("button");
let result = document.getElementById("result");

const winPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

const restartLogic = () => {
    moves.forEach(move => {
        move.textContent = "";
        move.style.backgroundColor = "wheat";
    });
    flag = 0;
    turn = 0;
    result.innerHTML = "";
}

gameLogic = (move, index) => {
    // console.log(moves);
    if(turn < 5) return;

    for(let pattern of winPatterns){
        let [a,b,c] = pattern;
        if(
            moves[a].textContent !== "" &&
            moves[a].textContent === moves[b].textContent &&
            moves[a].textContent === moves[c].textContent
        ){
            moves[a].style.backgroundColor = "green";
            moves[b].style.backgroundColor = "green";
            moves[c].style.backgroundColor = "green";
            result.innerHTML = `${moves[a].textContent} Won!`;
            setTimeout(restartLogic, 3000);
            return; // stop after first winner
        }
    }
    
    if(turn === 9){
        console.log("Draw");
        result.innerHTML = `It's a Draw`;
        setTimeout(restartLogic, 3000);
        return;
    }
}

moves.forEach((move, index) => {
    move.addEventListener("click", function(){

        if (move.textContent !== "") return;

        if(flag == 0){
            move.textContent = "X";
            flag += 1;
        }
        else{
            move.textContent = "0";
            flag -= 1;
        }
        turn++;
        gameLogic(move.textContent, index);
    });
});

restart.addEventListener("click", restartLogic);