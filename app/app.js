import React from 'react'
import ReactDom from 'react-dom'
import ArticleContainer from './components/ArticleContainer';
import Game from './components/Game';
import Results from './components/Results';
import wikiPageHTML from '../utilities/testData.js';

import axios from 'axios';

class App extends React.Component {
    constructor(props ){
        super(props)
        this.state = {
            htmlData: ""
        }
        console.log(this.props)
      }


  handleChange(e)  {
    e.preventDefault()
    console.log('clicked')
  }

  componentDidMount() {

      const url = 'https://en.wikipedia.org/w/api.php?action=parse&&page=tron&format=json';
      axios.get(url)
        .then(data => {
            // console.log(data.data.parse.text['*'])
            console.log(data.data.parse.images)
            const image = data.data.parse;
            const html = data.data.parse.text['*']
            const someText = html.replace(/(\r\n\t|\n|\r\t)/gm,"");
            // fs.writeFile('hmltdata.json',someText)
            // fs.writeFile('data.html', '<html><body>'+someText+'</body</html')
            // fs.writeFile('otherdata.json',image)
            this.setState({htmlData:someText})

        })



  }

  render(){

      return(
          <div>
              <h1>Howdy from React!</h1>
              <a>x</a>
            <Game/>
            <Results />
            <ArticleContainer props='hello'/>

          </div>
      )
  }
}



ReactDom.render(<App />, document.getElementById('root'));

