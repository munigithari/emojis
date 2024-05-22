// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="list-items">
      <button type="button" className="button1" onClick={onClickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} className="imagr2" />
      </button>
    </li>
  )
}

export default EmojiCard
