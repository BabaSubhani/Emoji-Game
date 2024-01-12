// Write your code here.

import './index.css'

const NavBar = props => {
  const {scoreDetails, isPlaying} = props
  const {score, highScore} = scoreDetails

  const scoreContainer = isPlaying
    ? 'scores-container'
    : 'win-lose-score-container'

  return (
    <nav className="nav-bar-card-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-img"
        />
        <h1 className="emoji-logo-name">Emoji Game</h1>
      </div>
      <div className={scoreContainer}>
        <p className="game-score">Score: {score}</p>
        <p className="total-score">Top Score: {highScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
