import React, { Component } from 'react';
import DataPost from './DataPost';
import UpdatedComponent from './bookPlacing';

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
            <div>
                <button style = {{width:100}} onClick = {() => this.authorOptions()}>Author</button>
                <div>
                    
                        {((this.state.authorLoggedIn)&&(loggedIn))?
                        (<div>
                            <DataPost></DataPost>
                            <button onClick={logout}>logout</button>
                            </div>)
                        :(<h3>login as author</h3>)}
                    
                </div>
                
            </div>
        );
    }
}

export default UpdatedComponent(Author);