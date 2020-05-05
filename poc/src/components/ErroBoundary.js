import React, { Component } from 'react';

class ErroBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    
    static getDerivedStateFromError(error){
        return {hasError:true}

    }
    render() {
        if(this.state.hasError)
       { return <div>ERROR</div>
            }
            else
           { return this.props.children}
       
    }
}

export default ErroBoundary;