import React, {useState} from 'react'
import {useFormik} from 'formik';

function Loginform() {
    const[ifSubmit,setSubmit]=useState(true)
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            text:''
        },
        onSubmit: values =>{
            alert(`You have been registered successfully`)
            setSubmit(false)

        },
        validate: values =>{
            let errors={}
            if (!values.name) 
            {
                errors.name='Required'
                
            }
            if (!values.email) 
            {
                errors.email='Required'
                
            }
            if (!values.phone) 
            {
                errors.phone='Required'
                
            }
            return errors
        }
    })
    return (
        ifSubmit&&(<div>
             <form onSubmit={formik.handleSubmit}>
                 <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' 
                           id='name' name='name'  
                           value={formik.values.name} 
                           onBlur={formik.handleBlur}
                           onChange={formik.handleChange}>
                    </input>
                    {(formik.touched.name&&formik.errors.name)? <div style={{color:'red'}}>{formik.errors.name}</div>:null}
                 </div>
                 <div>
                      <label htmlFor='email'>E-mail</label>
                       <input type='email' 
                              id='email' name='email'   
                              value={formik.values.email} 
                              onBlur={formik.handleBlur} 
                             onChange={formik.handleChange}>
                       </input>
                       {(formik.touched.email&&formik.errors.email)? <div style={{color:'red'}}>{formik.errors.email}</div>:null}
                 </div>
                 <div>
                       <label htmlFor='phone'>Phone no</label>
                       <input type='text' 
                              id='phone' 
                              name='phone'   
                              value={formik.values.phone}
                              onBlur={formik.handleBlur}  
                              onChange={formik.handleChange}>
                        </input>
                        {(formik.touched.phone&&formik.errors.phone)? <div style={{color:'red'}}>{formik.errors.phone}</div>:null}
                 </div>     
                 <button type='submit'>Submit</button>
             </form>
            
        </div>)
    )
}

export default Loginform
