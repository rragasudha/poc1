import React from 'react'
import {Component} from 'react'

class Message extends Component
{
    constructor(){
        super()
        this.state = {message: 'click the button to see the magic'}
    }
    changeMessage(){
     this.setState ( {message: 'You are a fooll!!!!'}   )
    }

    render()
    {
        return(
        <div>
            <h3>{this.state.message}</h3>
            <button onClick={() => this.changeMessage()}>Magic</button>
        </div>
        )
    }
}
export default Message