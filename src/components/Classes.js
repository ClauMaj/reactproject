
import React, { Component } from 'react'
import { connect } from 'react-redux'  // acces to global state
import { storeJobSearch } from '../actions/allActions' // import unnamed function

class Classes extends Component {
  render() {
    return (
      <>
        <h1>Classes</h1>
        <h2>{this.props.counter}</h2>
        <button onClick={() => this.props.increment(5)}>Click me</button>
      </>
    )
  }
}

// map global state to a prop
// counter is our props: this.state.props
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

// update functions for state
// increment is a prop: this.props.increment(n)
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (n) => dispatch(storeJobSearch(n))  // callback accepts param and passes it to dispatch
  }
}

// connect takes 2 functions 
// 1st: for pulling down state
// 2nd: for updating state
export default connect(mapStateToProps, mapDispatchToProps)(Classes)
