import React from 'react'
import { UserProvider, UserConsumer } from './UserContext'

function Greeting() {
    return (
        <UserConsumer>
            {
                (ownername) =>
                {
                    return<div>Namaste {ownername} _/\_</div>
                 
                }
            }
        </UserConsumer>
       
    )
}

export default Greeting
