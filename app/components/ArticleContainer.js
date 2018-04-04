import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import Parser from 'html-react-parser'

class ArticleContainer extends React.Component {
  constructor(props ){
    super(props)
    this.state = {
    }
    this.myRef = React.createRef();

    console.log(this.props)
  }




  anchorLinkListener (e) {
    if(e.target.tagName === 'a') {
       console.log('Anchor link clicked')
       e.preventDefault();
    }
 }

  createMarkUp(rawHtml){
    return {__html: rawHtml};
  }
  MyComponent(rawHtml) {
    return (
      <div>
      <button> <Link to="/wiki/Steven_Lisberger"> click this </Link></button>
       <div dangerouslySetInnerHTML={this.createMarkUp(rawHtml)} />

      </div>
    )
  }

  render(){
    let html = this.props.htmlData;
    if(this.props.htmlData) {
      return (
        <div ref={(ref) => {this.myRef = ref}} style={{'backgroundColor': 'pink', 'width':'75%'}}>
          {this.MyComponent(this.props.htmlData)}
        </div>
      )
    } else {
      return (
        <div style={{'backgroundColor': 'pink', 'width':'75%'}}>
          <div>
            <h2>WikiPedia</h2>
            <h3>Volkswagen Beetle</h3>
            <p>The Volkswagen Beetle – officially the Volkswagen Type 1, informally in Germany the Käfer (German, "beetle") and in parts of the English-speaking world the Bug – is a two-door, five-passenger,[11][12] rear-engine economy car that was manufactured and marketed by German automaker Volkswagen (VW) from 1938 until 2003.[13]</p>
          </div>
        </div>
      )
     }
  }
};

export default ArticleContainer;

