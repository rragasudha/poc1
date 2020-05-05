import React, { Component } from 'react';
import axios from 'axios'

class DataPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {bookId:'',
        bookName:'',
        author:'',
        postKaro:false
             
        }
    }
    ifPost(){
        this.setState({postKaro:true})
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    submitHandler=(e)=>{
        e.preventDefault()
        axios.post(`https://jsonplaceholder.typicode.com/posts`,this.state)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    render() {
        const {bookId,bookName,author}=this.state
        return (
            <div>
                <button onClick={()=>this.ifPost()}>post</button>
                {this.state.postKaro&&
                (<form onSubmit={this.submitHandler}>
                    <input type='text' name='bookId' value={bookId} onChange={this.changeHandler}></input>
                    <input type='text' name='bookName' value={bookName} onChange={this.changeHandler} ></input>
                    <input type='text' name='Author' value={author} onChange={this.changeHandler} ></input>
                    <button>Submit</button>
                </form>)}
                
            </div>
        );
    }
}

export default DataPost;