import React, { Component } from 'react';
import DataGet from './DataGet';
import UpdatedComponent from './bookPlacing';
import DataPost from './DataPost'
import Greeting from './Greeting'
import PasswordProtect from './PasswordProtect';
import ErroBoundary from './ErroBoundary';

class Owner extends Component {
    constructor() {
        super()
        this.state = {ownerLoggenIn:false,ifOrder:false}
        this.ownerOptions = this.ownerOptions.bind(this)
        this.order = this.order.bind(this)
             
        }
        
    ownerOptions(){
        this.setState({ownerLoggedIn:true})
        alert(`logged in as owner suucessfully`)
    }
    order(){
        this.setState({ifOrder:true})
        alert(`Enter book name`)
    }
    
    

    render() {
        const{orderPlaced,placeOrder,message}=this.props
        return (
            <div>
                <button style = {{width:100}} onClick = {() => this.ownerOptions()}>Owner</button>
                <div>
                    
                        {this.state.ownerLoggedIn?(<div><Greeting></Greeting>
                       <ErroBoundary><PasswordProtect></PasswordProtect></ErroBoundary> 
                        <DataGet></DataGet>
                        <passWord></passWord>
                        <button onClick={()=>this.order()}>place order</button>
                        {this.state.ifOrder && 
                        (<div><input></input>
                        <button onClick={placeOrder}>Submit</button>
                        {orderPlaced&&<h4>order placed</h4>}
                        
                        </div>)}
                        <DataPost></DataPost>
                        </div>)
                        :(<h3>login as owner</h3>)}
                    
                </div>
            </div>
            )
        
        
    }
}


export default UpdatedComponent(Owner);