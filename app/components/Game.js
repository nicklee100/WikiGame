import React from 'react'
import { Link } from 'react-router-dom'

class Game extends React.Component {
  constructor(props ){
    super(props)
    this.state = {
    }
    console.log(this.props)
  }

  render(){
    return(
      <div className="Game-Component">
        <button> New Game</button>
        <button><Link to='/wiki'>wiki</Link></button>
      </div>
    )
  }

}

export default Game;
