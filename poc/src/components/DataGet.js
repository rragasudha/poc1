import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'


function DataGet() {
    const [posts,setPosts] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
       
    }
   )
   const [flag,setFlag]=useState(false)
    
    

       return (
        
        <div>
            <Tippy content='You will get the list of books'>
            <button onClick={()=>setFlag(true)}>Get the list of books</button>
            </Tippy>
            {flag&&
            (<div>
              <button style = {{borderRadius:50}} onClick={()=>setFlag(false)}>done</button>   
            <ul>
                {posts.map(post=>(
                <li key={post.id}>{post.title}</li>))}
            </ul>
            </div>)}

            
        </div>
    )
}

export default DataGet
