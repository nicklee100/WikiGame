import React from 'react'

class Game extends React.Component {
  constructor(props ){
    super(props)
    this.state = {
    }
    console.log(this.props)
  }

  render(){
    return(
      <div>
        <button> New Game</button>
      </div>
    )
  }

}

export default Game;
