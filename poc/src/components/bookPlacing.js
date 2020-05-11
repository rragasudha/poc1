import React, { Component } from 'react';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const UpdatedComponent = OriginalComponent =>{
class bookPlacing extends Component {
    constructor() {
        super()
    
        this.state = {orderPlaced:true, loggedIn:true}
        this.placeOrder=this.placeOrder.bind(this)
        this.logout=this.logout.bind(this)     
        }
    
    placeOrder(){
        this.setState({orderPlaced:false})
        toast.info('Your order has been placed!!!',{autoClose:false})
    }
    
    logout(){
        this.setState({loggedIn:false})
    }
    render() {
        return (
            <OriginalComponent orderPlaced={this.state.orderPlaced}
            placeOrder={this.placeOrder}
            loggedIn={this.state.loggedIn}
            logout={this.logout}>
            
            </OriginalComponent>
        );
    }
}

return bookPlacing
}
export default UpdatedComponent