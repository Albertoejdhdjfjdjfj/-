import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
export default function SignUp(){
  const[signUp,setSignUp]=useState(false);
  return (
  <div>
     <input type="text" min='8' max='20' placeholder="Login"/>
     <input type="password" min='6' max='20' placeholder="Password"/>
     <button >SignUp</button>
  </div>
  )
}
