import { Routes, Route, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import About from "./About/About";
import Notes from "./Notes/Notes";
import LogOut from "./LogOut/LogOut";
import CreateNote from "./Notes/CreateNote";
import ViewNote from "./Notes/ViewNote";

export default function Dashboard(){

  const[data,setData]=useState();

  const navigate=useNavigate( localStorage.getItem('logIn'));

  useEffect(()=>
  localStorage.getItem('logIn')!==null?setData(JSON.parse(localStorage.getItem('logIn'))):navigate('/')
  ,[])

  if(data){
  return(
    <div>
    <div>
       <NavLink to="/dashboard/">About</NavLink>
       <NavLink to="/dashboard/notes">Notes</NavLink>
       <NavLink to="/dashboard/logout">LogOut</NavLink>
       <p>Hello,{data.email}</p>
    </div>
       <Routes>
       <Route index element={<About data={data}/>}/>
       <Route path="/notes/*" element={<Notes userId={data.id}/>}/>
       <Route path="/logout" element={<LogOut/>}/>
       </Routes>
    </div>
  )
  }
}

