import React, { Component,useState } from 'react';
import DataGet from './DataGet';
import UpdatedComponent from './bookPlacing';
import DataPost from './DataPost'
import Greeting from './Greeting'
import Modal from 'react-modal'

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
        const{orderPlaced,placeOrder}=this.props
        const{loggedIn,logout}=this.props
        return (
            <div style={{paddingBottom:'20px'}}>
                <button style = {{width:100}} onClick = {() => this.ownerOptions()}>Owner</button>
                <div>
                    
                        {((this.state.ownerLoggedIn)&&(loggedIn))?
                        (<Modal isOpen={this.state.ownerLoggedIn} style={{overlay:{backgroundColor:'black'}}}>
                            <div>
                            <DataGet></DataGet>
                            <button onClick={()=>this.order()}>place order</button>
                             {this.state.ifOrder && 
                             (<div>
                                <input>Book Details</input>
                                <button onClick={placeOrder}>Submit</button>
                                {orderPlaced&&<h4>order placed</h4>}
                             </div>)
                             }
                            <DataPost></DataPost>
                            <button onClick={logout}>logout</button>
                            </div>
                        </Modal>) :(null)
                        }
                        
                     </div>
            </div>
            )
        
        
    }
}


export default UpdatedComponent(Owner);