
function convertToWords(number) {
    if (number == 0) {
        number = "rock";
    } else if (number == 1) {
        number = "paper";
    } else if (number == 2) {
        number = "scissor";
    }
    
    return number;
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playResultWin(tp, tc) {
    win = document.getElementById("playResult");
    win.innerHTML = ("You Win! " + tp + " beat " + tc);
}

function playResultLose(tp, tc) {
    lose = document.getElementById("playResult");
    lose.innerHTML = ("You Lose! " + tp + " beat " + tc);
}

function playRound(p) {
    result = document.getElementById("playResult");
    const win = 1;
    const lose = 0;
    c = getComputerChoice();
    tp = convertToWords(p);
    tc = convertToWords(c);

    if (p == c) {
        console.log("It's a Tie! " + tp + " Tied With " + tc);
        result.innerHTML = ("It's a Tie! " + tp + " tied with " + tc);
    } else if (p == 0 && c == 1) {
        console.log("You Win! " + tp + " Beat " + tc);
        score(win);
        playResultWin(tp, tc);
    } else if (p == 0 && c == 2) {
        console.log("You lose! " + tc + " Beat " + tp);
        score(lose);
        playResultLose(tp, tc);
    } else if (p == 1 && c == 2) {
        console.log("You lose! " + tc + " Beat " + tp);
        score(lose);
        playResultLose(tp, tc);
    } else if (p == 1 && c == 0) {
        console.log("You Win! " + tp + " Beat " + tc);
        score(win);
        playResultWin(tp, tc);
    } else if (p == 2 && c == 0) {
        console.log("You lose! " + tc + " Beat " + tp);
        score(lose);
        playResultLose(tp, tc);
    } else if (p == 2 && c == 1) {
        console.log("You Win! " + tp + " Beat " + tc);
        score(win);
        playResultWin(tp, tc);
    } else {
        console.log("error :(")
    }

    if (playerScore.textContent == "5") {
        winner.innerHTML = "You Win!"
    }   else if (computerScore.textContent == "5") {
        winner.innerHTML = "You Lose!"
    }

}

function score(score) {
    p = document.getElementById("playerScore");
    c = document.getElementById("computerScore");
        
    if (score == 0 || score == 1){
        score ? ps++ : cs++;
    }

    p.innerHTML = ps.toString();
    c.innerHTML = cs.toString();
    
}

let [ps,cs] = [0,0];
let winner = document.getElementById("winner");
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");

document.getElementById("rock").addEventListener("click", function(e){
    playRound(0);
});
document.getElementById("paper").addEventListener("click", function(e){
    playRound(1);
});
document.getElementById("scissor").addEventListener("click", function(e){
    playRound(2);
});
