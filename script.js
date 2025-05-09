'use strict';

/* select elements like classes and IDs
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";

 */

let randNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;




document.querySelector(".check").addEventListener('click', function(){
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess, typeof guess);

    if(!guess){
        document.querySelector(".message").textContent = "⛔ No number!";
    } else if(guess === randNum){
        document.querySelector('.message').textContent = "🎉 Correct Number!";
        document.querySelector('h1').textContent = "You Win!";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('body').style.backgroundImage = 'none';
        document.querySelector('.number').textContent = randNum;
        if(highscore < score){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if(guess !== randNum && score !== 0){
        if(guess > randNum){
            document.querySelector('.message').textContent = "📈 Too high!";
        }
        if(guess < randNum){
            document.querySelector('.message').textContent = "📉 Too low!";
        }
        score -= 1;
        document.querySelector('.score').textContent = score;
    }
    else {
        document.querySelector('.message').textContent = "💥 You lost the game!";
        document.querySelector('body').style.backgroundColor = '#8B0000';
        document.querySelector('body').style.backgroundImage = 'none';
        document.querySelector("h1").textContent = "You snooze, you lose"
    }

});

document.querySelector(".again").addEventListener('click', function () {

    score = 20;
    document.querySelector(".score").textContent = score;
    randNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector("h1").textContent = "Guess My Number!";
    document.querySelector('body').style.backgroundImage = 'url("MarioBackground.gif")';
    document.querySelector('body').style.backgroundColor = 'none';
    document.querySelector('.number').textContent = "?";


});
