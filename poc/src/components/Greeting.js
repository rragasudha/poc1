import React from 'react'
import { UserProvider, UserConsumer } from './UserContext'
import copyleft from './copyleft.css';
function Greeting() {
    return (
        <UserConsumer>
            {
                (ownername) =>
                {
                    return<div><span class="copyleft">&copy;</span>  {ownername} </div>
                 
                }
            }
        </UserConsumer>
       
    )
}

export default Greeting
