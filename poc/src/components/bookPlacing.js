import React, { Component } from 'react';

const UpdatedComponent = OriginalComponent =>{
class bookPlacing extends Component {
    constructor() {
        super()
    
        this.state = {orderPlaced:false}
        this.placeOrder=this.placeOrder.bind(this)
        this.message=this.message.bind(this)     
        }
    
    placeOrder(){
        this.setState({orderPlaced:true})
    }
    message(){
        
        this.setState({orderPlaced:false})
    }
    render() {
        return (
            <OriginalComponent orderPlaced={this.state.orderPlaced}
            placeOrder={this.placeOrder}
            message={this.message}></OriginalComponent>
        );
    }
}

return bookPlacing
}
export default UpdatedComponent