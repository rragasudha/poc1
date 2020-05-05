import React, { Component } from 'react';
import DataGet from './DataGet';
import UpdatedComponent from './bookPlacing';

class Buyer extends Component {
    constructor() {
        super()
        this.state = {buyerLoggenIn:false,ifOrder:false}
        this.buyerOptions = this.buyerOptions.bind(this)
        this.order = this.order.bind(this)
        }
        
    buyerOptions(){
        this.setState({buyerLoggedIn:true})
        alert(`logged in as buyer suucessfully`)
    }
    order(){
        this.setState({ifOrder:true})
        alert(`Enter book name`)
    }

    render() {
     
            const{orderPlaced,placeOrder,message}=this.props
            const{loggedIn,logout}=this.props
            return (
                <div>
                    <button style = {{width:100}} onClick = {() => this.buyerOptions()}>Buyer</button>
                    <div>
                        
                            {((this.state.buyerLoggedIn)&&(loggedIn))?
                            (<div>
                                <DataGet></DataGet>
                                <button onClick={()=>this.order()}>place order</button>
                                {this.state.ifOrder && 
                                (<div>
                                   <input></input>
                                   <button onClick={placeOrder}>Submit</button>
                                   {orderPlaced&&<h4>order placed</h4>}
                                </div>)}
                                <br></br>
                                <button onClick={logout}>logout</button>
                            </div>):(<h3>login as buyer</h3>)}
                        
                    </div>
                </div>
                )
            
    }
}

export default UpdatedComponent(Buyer);