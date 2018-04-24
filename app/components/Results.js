import React from 'react'

class Results extends React.Component {
  constructor(props ){
    super(props)
    this.state = {
    }
    console.log(this.props)
  }

  someHTML(){
    return (<div><h1>test</h1><p>paragraph line</p><h2>heading two</h2></div>)
  }

  render(){

    return this.someHTML()
    return (
      <div>
        <h3> Moves </h3>
      </div>
    )
  }
}

export default Results;
