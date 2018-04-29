import React from 'react'
import ReactDom from 'react-dom'
import ArticleContainer from './components/ArticleContainer';
import Game from './components/Game';
import Results from './components/Results';
import wikiPageHTML from '../utilities/testData.js';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import axios from 'axios';

class App extends React.Component {
    constructor(props ){
        super(props)
        this.state = {
            htmlData: ""
        }
      }

  insertTag(html){
        const length = html.length;
        let HTML = html;
        let aTag = '<a href=';
        for(let i = 0; i<HTML.length; i++){
        let string = HTML.slice(i,i+8)
        if( string === aTag){
            HTML = HTML.slice(0,i+2) + ' onFlick={this.onFlick} '+ HTML.slice(i+3)
        }
    }
    const final = HTML+"<script>console.log('it worked')</script>"
    return final
  }


  componentDidMount() {

  }

  render(){
      return(
        <div className="Parent-Container">
            <div>
                <Game/>
                <Results/>
            </div>
            <ArticleContainer/>
        </div>
      )
  }
}


export default App;
