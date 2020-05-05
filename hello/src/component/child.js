import React from 'react'
//import {Component} from 'react'

function Child(props)
{
return(
<div>
    <button style= {{backgroundColor: "red"}} onClick = {props.handler}>Yes</button>
</div>
)
   

}
export default Child