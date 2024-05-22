// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <navbar className="navbar-conatainer">
      <div className="container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          className="image1"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="container2">
          <p className="paragraph1">Score : {currentScore}</p>
          <p className="paragraph">Top Score : {topScore}</p>
        </div>
      )}
    </navbar>
  )
}

export default NavBar
