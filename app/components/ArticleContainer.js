import React from 'react'
import ReactDOM from 'react-dom'


class ArticleContainer extends React.Component {
  constructor(props ){
    super(props)
    this.state = {
    }
    console.log(this.props)
  }

  componentWillReceiveProps(){

  }

  onClick(e){
    e.preventDefault()
    console.log('CLICK!!!');
  }

  componentDidMount(){
    // let a = document.getElementsByTagName('a');

        // var elements = ReactDOM.findDOMNode('a');
        // console.log(elements);

  }

  createMarkUp(rawHtml){
    return {__html: rawHtml};
  }
  MyComponent(rawHtml) {
    return (
      <div>
      <button onClick={this.onClick}>click this </button>
      <div dangerouslySetInnerHTML={this.createMarkUp(rawHtml)} />
      </div>
    )
  }

  render(){
    if(this.props.htmlData) {
      return (
        <div style={{'backgroundColor': 'pink', 'width':'75%'}}>
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

