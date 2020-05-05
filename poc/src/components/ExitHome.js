
import ReactDOM from 'react-dom'
import Greeting from './Greeting'

import React, { Component } from 'react';

class ExitHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {exit:false
             
        }
    }
    toExit(){
        this.setState({exit:true})
    }
    
    render() {
        return ReactDOM.createPortal(

            <Greeting></Greeting>,
            document.getElementById("portal-root")    
        
                
                
            
        );
    }
}

export default ExitHome;


