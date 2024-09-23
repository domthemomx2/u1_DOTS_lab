/*
 * DOTS: Level Three
 *
 */


for (ball of balls) {
    const numOfPoints = parseInt(ball.dataset-increment)
    ball.addEventListener('click' , () => {
        score += numOfPoints
        scoreDisplay.innerText = 'Score: ${score} / 500'
        if (score >= 50) {
            levelWinner.style.opacity = 1
            scoreDisplay.innerText = 'Winner Winner Chicken Dinner'
        }
    })
}