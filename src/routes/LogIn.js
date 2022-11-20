import {  NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


 function LogIn(){
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')
  const[eror,setEror]=useState('')
   
  const navigate=useNavigate();

  useEffect(()=>
  localStorage.getItem('logIn')?navigate('/dashboard'):navigate('/')
  ,[])
  return (
  <div>
    <NavLink to="/signUp">SignUp</NavLink>
    <div>LogIn</div>
     <input onChange={(e)=>{setEmail(e.target.value)}} type="email" min='8' max='20' placeholder="Email"/>
     <input onChange={(e)=>{setPassword(e.target.value)}} type="password" min='6' max='20' placeholder="Password"/>
     <button onClick={logIn}>LogIn</button >
     <p>{eror}</p>
  </div>
  )

  function logIn(){
     let el;
    fetch(`http://localhost:3001/users?email=${email}&password=${password}`)
  .then((response) => response.json())
  .then((response) => [el]=response)
  .then(() => (el?localStorage.setItem('logIn',JSON.stringify({id:el.id,email:el.email,date:el.createdAt}))
  :setEror('Введен неверно email или password'))
  )
  .then(()=>(localStorage.getItem('logIn'))?navigate('/dashboard'):'')
  }
}




export default LogIn;