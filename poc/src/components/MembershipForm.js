import React, { Component } from 'react';
import Loginform from './Loginform';
import DataGet from './DataGet';
import Modal from 'react-modal'

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
    exit(){
        this.setState({member:false})
    }
    render() {
        return (
            <div style={{paddingBottom:'20px'}}>
                <button onClick={()=>this.ifMember()}>Already a member</button>
                <br></br>
                <button onClick={()=>this.ifNew()}>Register as member</button>
                {this.state.new&&
                <div>
                   <Loginform></Loginform>
               </div>}
               {
                   this.state.member&&
                   (<div>
                       <Modal isOpen={true}>
                       <DataGet></DataGet>
                       <button onClick={()=>this.exit()}>Exit Library</button>
                       </Modal>
                         
                   </div>)
               }

                
            </div>
        );
    }
}

export default MembershipForm;