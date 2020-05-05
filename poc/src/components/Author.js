import React, { Component } from 'react';
import DataPost from './DataPost';

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
        return (
            <div>
                <button style = {{width:100}} onClick = {() => this.authorOptions()}>Author</button>
                <div>
                    
                        {this.state.authorLoggedIn?(<div><DataPost></DataPost></div>):(<h3>login as author</h3>)}
                    
                </div>
                
            </div>
        );
    }
}

export default Author;