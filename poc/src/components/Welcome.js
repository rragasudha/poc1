import React, { Component } from 'react';
import Owner from './Owner';
import Buyer from './Buyer';
import Author from './Author';
import ErroBoundary from './ErroBoundary';




class Welcome extends Component {

    constructor() {
        super()
        
    }


    render() {
        return (
            <div>
                <h1 style={{fontFamily: "bookman"}}>WELCOME TO KITABKOSH</h1>
                <h2>Select your login</h2>
                <Owner></Owner>
                <Author></Author>         
                <Buyer></Buyer>
                
            </div>
        );
    }
}

export default Welcome;