import React, { Component } from 'react';

class PasswordProtect extends Component {
    constructor() {
        super()
    
        this.state = { password:' ',flag:true}
        this.protect=this.protect.bind(this)
        this.changeHandler=this.changeHandler.bind(this)      
        
    }
    changeHandler(value){
        this.setState({password:value})
    }
    protect(){
        if(this.state.password==="123" )
        {this.setState({flag:false})}
        else{
        throw new Error("error");
        console.log(this.state.password)}
    }
    
    
    render() {
        return (
            <div>
            {this.state.flag&&(<form onSubmit={this.protect}>
                <div>
                <input type ='text' name='password' value={this.state.password} onChange={e => this.changeHandler(e.target.value)}></input>
                <button >Submit</button>
                
            </div>
            </form>)}
            </div>
            
        )
    }
}

export default PasswordProtect;