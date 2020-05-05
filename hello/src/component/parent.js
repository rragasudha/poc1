import React from 'react'
import {Component} from 'react'
import Child from './child'

class Parent extends Component
{
    constructor(){
        super()
        this.state = {message: 'Do you like it?'}
        this.ifYes = this.ifYes.bind(this)
    }
    ifYes(){
     alert (`ThankYou!!`)
    }
    ifNot()
    {
        alert(`hume ghanta fark nhi padta!!`)
    }

    render()
    {
        return(
        <div>
            <h3>{this.state.message}</h3>
            <Child handler = {this.ifYes}></Child>
            <button style={{backgroundColor: "lightblue"}} onClick = {() => this.ifNot()}>No</button>
        </div>
        )
    }
}
export default Parent