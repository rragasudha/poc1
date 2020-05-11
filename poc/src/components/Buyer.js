import React, { Component } from 'react';
import DataGet from './DataGet';
import UpdatedComponent from './bookPlacing';
import Modal from 'react-modal'

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
                <div style={{paddingBottom:'20px'}}>
                    <button style = {{width:100}} onClick = {() => this.buyerOptions()}>Buyer</button>
                    <div>
                        
                            {((this.state.buyerLoggedIn)&&(loggedIn))?
                            (<Modal isOpen={true} style={{overlay:{backgroundColor:'teal'}}}>
                                <div>
                                <DataGet></DataGet>
                                <button onClick={()=>this.order()}>place order</button>
                                {(this.state.ifOrder && orderPlaced)&&
                                (<div>
                                   <input></input>
                                   <button onClick={placeOrder}>Submit</button>
                                </div>)}
                                <br></br>
                                <button onClick={logout}>logout</button>
                            </div>
                            </Modal>):(null)}
                        
                    </div>
                </div>
                )
            
    }
}

export default UpdatedComponent(Buyer);