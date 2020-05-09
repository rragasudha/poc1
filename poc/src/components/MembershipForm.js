import React, { Component } from 'react';
import Loginform from './Loginform';

class MembershipForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             member:false,
             new:false
        }
    }
    ifMember(){
        this.setState({member:true})
    }
    ifNew(){
        this.setState({new:true})
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>this.ifMember()}>Already a member</button>
                <br></br>
                <button onClick={()=>this.ifNew()}>Register as member</button>
                {this.state.new&&
                <div>
                   <Loginform></Loginform>
               </div>}

                
            </div>
        );
    }
}

export default MembershipForm;