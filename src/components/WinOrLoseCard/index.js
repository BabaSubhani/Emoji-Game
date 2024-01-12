// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {restartGame, emojiScore} = props
  const {score} = emojiScore

  let heading
  let scoreText
  let imageUrl

  if (score === 12) {
    heading = 'You Won'
    scoreText = 'Best Score'
    imageUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    heading = 'You Lose'
    scoreText = 'Score'
    imageUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }

  const restartGameAgain = () => {
    restartGame()
  }

  return (
    <div className="game-over-container">
      <img src={imageUrl} className="loss-win-img" alt="win or lose" />
      <h1>{heading}</h1>
      <p>{scoreText}</p>
      <p>{score}/12</p>
      <button onClick={restartGameAgain} type="button">
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
