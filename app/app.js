import React from 'react'
import ReactDom from 'react-dom'
import ArticleContainer from './components/ArticleContainer';
import Game from './components/Game';
import Results from './components/Results';


class App extends React.Component {
  handleChange(e)  {
    e.preventDefault()
    console.log('clicked')
  }
  render(){

      return(
          <div>
              <h1>Howdy from React!</h1>
              <button onClick={this.handleChange}>x</button>
            <Game/>
            <Results />
            <ArticleContainer props='hello'/>

          </div>
      )
  }
}



ReactDom.render(<App />, document.getElementById('root'));

