import React, { Component } from 'react';

const UpdatedComponent = OriginalComponent =>{
class bookPlacing extends Component {
    constructor() {
        super()
    
        this.state = {orderPlaced:false, loggedIn:true}
        this.placeOrder=this.placeOrder.bind(this)
        this.logout=this.logout.bind(this)     
        }
    
    placeOrder(){
        this.setState({orderPlaced:true})
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