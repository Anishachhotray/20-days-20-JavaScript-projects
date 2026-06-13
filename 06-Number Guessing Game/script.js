const randomNumber = Math.floor(Math.random()*50) + 1;

const check = document.getElementById("check");
const guess = document.getElementById("guess");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");
const attemptsLeft = document.getElementById("attemptsLeft");

let count = 0;
let left = 5;

check.addEventListener("click", function (){


     if(guess.value === ""){
        message.textContent = "Please enter a number!";
        return;
    }

    let num = Number(guess.value);

    if(num < 1 || num > 50){

        message.textContent =
        "Please enter a number between 1 and 50!";
        return;

    }

    count++;
    left--;

    attempts.textContent = "Attempts : " + count;
    attemptsLeft.textContent = "Attempts Left : " + left;

    
    if(num === randomNumber){

        message.textContent = "Correct Guess! 🎉 ";
        check.disabled = true;

    }

    else if(num < randomNumber){

        message.textContent = "Too Low :(";
    }

    else{

        message.textContent = "Too High :(";

    }

    if(left === 0 && num !== randomNumber){

        message.textContent =  "Game Over! 😓 The number was " + randomNumber;
        check.disabled = true;

    }

});
