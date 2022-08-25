
function convertToWords(number) {
    if (number == 0) {
        number = "rock";
    } else if (number == 1) {
        number = "paper";
    } else if (number == 2) {
        number = "scissor";
    }

    return number
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
    let ps = prompt("Choose: rock paper or scissor");
    ps = ps.toLowerCase();
    
    if (ps == "scissors") {
        ps = "scissor";
    }

    if (ps == "rock") {
        ps = 0;
    } else if (ps == "paper") {
        ps = 1;
    } else if (ps == "scissor") {
        ps = 2;
    }

    return ps;
}

function playRound(p,c) {
    const win = 1;
    const lose = 0;
    tp = convertToWords(p);
    tc = convertToWords(c);

    if (p == c) {
        console.log("It's a Tie! " + tp + " Tied With " + tc);
        return 2;
    } else if (p == 0 && c == 1) {
        console.log("You Win! " + tp + " Beat " + tc);
        return win;
    } else if (p == 0 && c == 2) {
        console.log("You lose! " + tc + " Beat " + tp);
        return lose;
    } else if (p == 1 && c == 2) {
        console.log("You lose! " + tc + " Beat " + tp);
        return lose;
    } else if (p == 1 && c == 0) {
        console.log("You Win! " + tp + " Beat " + tc);
        return win;
    } else if (p == 2 && c == 0) {
        console.log("You lose! " + tc + " Beat " + tp);
        return lose;
    } else if (p == 2 && c == 1) {
        console.log("You Win! " + tp + " Beat " + tc);
        return win;
    } else {
        console.log("error :(")
    }

}

function game() {
    let ps = 0;
    let cs = 0;
    let score = Number; 

    for (let i = 0; i < 5; i++) {
        score = playRound(getPlayerChoice(),getComputerChoice());
        
        if (score == 0 || score == 1){
            score ? ps++ : cs++;
        } else {}

        console.log("Player Score: "+ps);
        console.log("Computer Score: "+cs);
    }
}

//const player = getPlayerChoice();
//let computer = getComputerChoice();

game();

//playRound(player,computer);