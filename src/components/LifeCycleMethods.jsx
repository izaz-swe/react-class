import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }

    this.increament = this.increament.bind(this);
    this.decreament = this.decreament.bind(this);
    console.log("constructor is called");
  }

  componentDidMount(){
    console.log("Component is Mounted");
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      console.log('component did updated called', this.state.count);
    }
  }

  componentWillUnmount(){
    console.log("component is about to unmount");
    //clean up operation
  }
  increament(){
    this.setState({
      count: this.state.count + 1
    })
  }

  decreament(){
    this.setState({
      count: this.state.count - 1 
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increament}> + </button>
        <button onClick={this.decreament}> - </button>
      </div>
    )
  }
}
