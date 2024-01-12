// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji, key} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const changeTheEmojis = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-card-container" key={id}>
      <button
        type="button"
        className="emoji-btn"
        onClick={changeTheEmojis}
        key={key}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
