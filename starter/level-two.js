/*
 * DOTS: Level Two
 *
 */
let score = 0;
let scoreDisplay = document.querySelector('.js-score');
let levelWinner = document.querySelector('.level-winner');

const ball = document.querySelectorAll('.js-ball');
for (let i = 0; i <ball.length; i++) {
  ball[i].addEventListener('click', function() {
    score += 10;
    scoreDisplay.innerText = score;

    if (score >= 100) {
        console.log('You have won level one!')
        levelWinner.style.opacity = 1;
    }
})}

