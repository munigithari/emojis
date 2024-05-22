import './index.css'

const LOSR_IMG = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WIN_IMG = 'https://assets.ccbp.in/frontend/react-js/win-game-img.png'

const WinOrLoseCard = props => {
  const {result, onClickPlayAgain, score} = props
  const imageUrl = result ? WIN_IMG : LOSR_IMG
  const gameStatus = result ? 'You Won' : 'You Lose'
  const gamescoreLabel = result ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
    <div>
      <h1 className="heading">{gameStatus}</h1>
      <p className="paragraph">{gamescoreLabel}</p>
      <p className="paragraph">{score}/12</p>
    </div>
    <div>
      <button type="button" className="button1" onClick={onClickPlayAgain}>
        <img src={imageUrl} alt="win or lose" className="image1" />
      </button>
    </div>
    </div>
  )
}

export default WinOrLoseCard
