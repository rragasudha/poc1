import React, { Component } from 'react';
import DataPost from './DataPost';
import UpdatedComponent from './bookPlacing';
import Modal from 'react-modal'

class Author extends Component {
    constructor() {
        super()
        this.state = {authorLoggenIn:false}
        this.authorOptions = this.authorOptions.bind(this)
             
        }
        
    authorOptions(){
        this.setState({authorLoggedIn:true})
        alert(`logged in as author suucessfully`)
    }
    render() {
        const{loggedIn,logout}=this.props
        return (
            <div style={{paddingBottom:'20px'}}>
                <button style = {{width:100}} onClick = {() => this.authorOptions()}>Author</button>
                <div>
                    
                        {((this.state.authorLoggedIn)&&(loggedIn))?
                        (<Modal isOpen={true} style={{overlay:{backgroundColor:'purple'}}}>
                            <div>
                            <DataPost></DataPost>
                            <button onClick={logout}>logout</button>
                            </div>
                        </Modal>)
                        :(null)}
                    
                </div>
                
            </div>
        );
    }
}

export default UpdatedComponent(Author);