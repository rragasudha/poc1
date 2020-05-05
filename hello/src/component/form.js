import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = { username : '', class: ''
             
        }
    }
    changeName = (event) =>{
        this.setState({username: event.target.value})
    }
    changeClass = (event) =>{
        this.setState({class: event.target.value})
    }
  
    
  submit= event => {
        alert(`welcome ${this.state.username} of ${this.state.class}`)
        
    }
    
    
    render() {
        return (
            <form onSubmit = {this.submit}>
            <div>
                <label>Username</label>
                <input type = 'text' value = {this.state.username} onChange={this.changeName}></input>
            </div>
            <div>
                <label>Class</label>
                <select value = {this.state.class} onChange= {this.changeClass}>
                    <option value ='10th'>10th</option>
                    <option value ='12th'>12th</option>
                </select>
            </div>
            <div>
                <button type = 'submit'>submit</button>
            </div>
            </form>
        )
    }
}

export default Form
