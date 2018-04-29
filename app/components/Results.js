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


    return (
      <div className="Results-Component">
        <h3> Moves </h3>
        {this.someHTML()}
      </div>
    )
  }
}

export default Results;
