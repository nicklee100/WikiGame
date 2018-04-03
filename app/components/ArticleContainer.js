import React from 'react'



class ArticleContainer extends React.Component {
  constructor(props ){
    super(props)
    this.state = {
    }
    console.log(this.props)
  }


  render(){
    return (
      <div>
        <h2>WikiPedia</h2>
        <h3>Volkswagen Beetle</h3>
        <p>The Volkswagen Beetle – officially the Volkswagen Type 1, informally in Germany the Käfer (German, "beetle") and in parts of the English-speaking world the Bug – is a two-door, five-passenger,[11][12] rear-engine economy car that was manufactured and marketed by German automaker Volkswagen (VW) from 1938 until 2003.[13]</p>
      </div>
    )
  }
};

export default ArticleContainer;

