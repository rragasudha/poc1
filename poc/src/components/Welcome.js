import React, { Component } from 'react';
import Owner from './Owner';
import Buyer from './Buyer';
import Author from './Author';
import MembershipForm from './MembershipForm'
import {FaFacebookSquare,FaInstagramSquare} from 'react-icons/fa'
import { GiBookshelf} from "react-icons/gi"
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

toast.configure()
class Welcome extends Component {
     
    constructor() {
        super()
        this.state={bookstore:false, library:false}
        
    }
   
    ifBookstore()
    {
        this.setState({bookstore:true,library:false})
        toast('Welcome to the Book store!!!',{position: toast.POSITION.TOP_CENTER})
    }
    ifLibrary()
    {
        this.setState({library:true,bookstore:false})
        toast('Welcome to the Library!!!',{position: toast.POSITION.TOP_CENTER})
    }


    render() {
        return (
            <div style={{paddingBottom:'30px'}}>
                <GiBookshelf color='darkmagenta' size='8rem'></GiBookshelf>
                <br></br>
                <h1 style={{fontFamily: "bookman"}}>WELCOME TO KITABKOSH</h1>
                <br></br>
                <Tippy content='The Kitabkosh Bookstore'>
                <button  style={{width:150}} onClick={()=>this.ifBookstore()}>Go to the bookstore</button>
                </Tippy>
               
                <br></br>
                
                {this.state.bookstore&&
                <div >
                    <h2>Select your login</h2>
                <Owner></Owner>
                <Author></Author>         
                <Buyer></Buyer>
                </div>}
                <Tippy content='The kitabkosh Library'>
                <button style={{width:150}} onClick={()=>this.ifLibrary()}>Go to the Library</button>
                </Tippy>
                
                {
                    this.state.library&&
                    <div>
                        <MembershipForm></MembershipForm>
                    </div>
                }
                <h2>You can follow us on</h2>
                <FaFacebookSquare color='blue' size='2rem'/>
                <FaInstagramSquare color='hotpink' size='2rem'/>                
            </div>
        );
    }
}

export default Welcome;