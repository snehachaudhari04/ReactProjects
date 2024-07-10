import React, { useState } from 'react'
import './../IndexPage/IndexPage.css'
import './LoginPage.css'

 function LoginPage() {
     const[Values,setValues]=useState(
      {
        name:"",
        password:""
      }
     )
     function handleChange(e){
      setValues({...Values,[e.target.name]: e.target.value})
     }
     function ValidateUser(){
        if(!Values.name){
          alert("please enter unseranme")
        }
        if(!Values.password){
          alert("please enter Password")
        }
        if(Values.name=="admin" && Values.password =="123"){
          alert("Login sucessfuly")
        }
        else{
          alert("Invalid Credentials")
        }
     }


  
    
  
    
   
  return (
    <div>
        <div className='all-container' style={{backgroundColor:'black'}}>
            <div style={{backgroundColor:'orange' ,height:370, width:600 ,borderRadius:25, display:'flex', alignItems:'center',flexDirection:'column'}}>
                <h1 style={{margin:5 , color:'white'}}> Connect With Top Talent </h1>
                <h2 style={{margin:5 , color:'white'}}>Elevate your journey</h2>
                <input className='login-input' type='text'
                placeholder='Username'
                name='name'
                value={Values.name}
                onChange={handleChange}
            
                
                
                />
                <input className='login-input' type='password'
                placeholder='Password'
                name='password'
                value={Values.password}
                onChange={handleChange}
                />
                <button  onClick={ValidateUser} className='btn'>Login</button>

            </div>
             
        </div>
      
    </div>
  )
}
export default LoginPage
