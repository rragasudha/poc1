import React, { useEffect, useState } from 'react';
import axios from 'axios'

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
            <button onClick={()=>setFlag(true)}>get</button>

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
