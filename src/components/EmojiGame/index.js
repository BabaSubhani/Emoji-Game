/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojiList: [],
    topScore: 0,
    isPlaying: true,
  }

  finishAndSetTopScore = score => {
    this.setState(prevState => ({
      topScore: score > prevState.topScore ? score : prevState.topScore,
    }))
  }

  shuffleEmojis = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojiPresent = clickedEmojiList.includes(id)

    const clickedEmojisLen = clickedEmojiList.length

    if (isEmojiPresent) {
      this.setState(prevState => ({
        isPlaying: !prevState.isPlaying,
      }))
      this.finishAndSetTopScore(clickedEmojisLen)
    } else {
      if (emojisList.length === clickedEmojisLen + 1) {
        this.finishAndSetTopScore(clickedEmojisLen + 1)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  restartGame = () => {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying,
      clickedEmojiList: [],
    }))
  }

  renderGame = () => {
    const {clickedEmojiList, topScore, isPlaying} = this.state

    const score = clickedEmojiList.length
    const highScore = topScore
    const shuffledEmojis = this.shuffleEmojis()

    return (
      <div className="emoji-bg-container">
        <NavBar scoreDetails={{score, highScore}} isPlaying={isPlaying} />
        <ul className="emoji-cards-bg-container">
          {shuffledEmojis.map(eachEmoji => (
            <EmojiCard
              emojiDetails={eachEmoji}
              key={eachEmoji.id}
              clickEmoji={this.clickEmoji}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderGameOver = () => {
    const {clickedEmojiList, topScore, isPlaying} = this.state

    const score = clickedEmojiList.length
    const highScore = topScore

    return (
      <div className="emoji-bg-container">
        <NavBar scoreDetails={{score, highScore}} isPlaying={isPlaying} />
        <WinOrLoseCard emojiScore={{score}} restartGame={this.restartGame} />
      </div>
    )
  }

  render() {
    const {isPlaying} = this.state

    if (isPlaying) {
      return this.renderGame()
    }

    return this.renderGameOver()
  }
}

export default EmojiGame
