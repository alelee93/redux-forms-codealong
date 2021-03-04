import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {

  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    //this.state will be sent off to our reducer via our dispatched action
    this.props.addTodo(this.state)
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit = {event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input 
              type="text" 
              onChange={this.handleChange} 
              value = {this.state.text}
              />
          </p>
            <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}


  const mapDispatchToProps = dispatch => {
    return{
      //addTodo will be available as props
      addTodo: formData => dispatch({type: 'ADD_TODO', payload: formData})
    }
  }



//export default CreateTodo;

//Becuase we only need to dispatch an action and we are not getting info from our store, 
//we can use null instead of mapToProps
export default connect(null, mapDispatchToProps)(CreateTodo)
