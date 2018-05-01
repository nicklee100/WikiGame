import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getArticle} from '../state/actions/index.js'

class Game extends React.Component {
  constructor(props ){
    super(props)
    this.state = {
    }
    console.log('in game: ',this.props)
    this.onLoadArticle = this.onLoadArticle.bind(this)
  }

  onLoadArticle(){
    console.log('load article clicked')
    this.props.getTheArticle()
  }

  render(){
    return(
      <div className="Game-Component">
        <button onClick={this.onLoadArticle}> Load Table</button>
        <button><Link to='/wiki'>wiki</Link></button>
      </div>
    )
  }

}

const mapStateToProps = function(state){
  return {
    article: state.updateArticle.getArticleSuccess,
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    getTheArticle : () => dispatch(getArticle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)

//export default Game;
