import React, { Component } from 'react';
import Owner from './Owner';
import Buyer from './Buyer';
import Author from './Author';
import MembershipForm from './MembershipForm'

class Welcome extends Component {

    constructor() {
        super()
        this.state={bookstore:false, library:false}
        
    }
    ifBookstore()
    {
        this.setState({bookstore:'true'})
    }
    ifLibrary()
    {
        this.setState({library:'true'})
    }


    render() {
        return (
            <div>
                <h1 style={{fontFamily: "bookman"}}>WELCOME TO KITABKOSH</h1>
                <button style={{width:150}} onClick={()=>this.ifBookstore()}>Go to the bookstore</button>
                <br></br>
                <button style={{width:150}} onClick={()=>this.ifLibrary()}>Go to the Library</button>
                {this.state.bookstore&&
                <div>
                    <h2>Select your login</h2>
                <Owner></Owner>
                <Author></Author>         
                <Buyer></Buyer>
                </div>}
                {
                    this.state.library&&
                    <div>
                        <MembershipForm></MembershipForm>
                    </div>
                }
                
                
            </div>
        );
    }
}

export default Welcome;