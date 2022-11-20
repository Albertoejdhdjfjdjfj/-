import { Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import ListOfNotes from "./ListOfNotes";
import CreateNote from "./CreateNote";
import ViewNote from "./ViewNote";
import EditNote from "./EditNote";
export default function Notes ({userId}){
     const[notes,setNotes]=useState(false)

     useEffect(()=>{
     fetch(`http://localhost:3001/notes?userId=${userId}`)
     .then((response)=>response.json())
     .then((data)=>setNotes(data))
     },[]
     )

     if(notes){
     return(
     <Routes>
       <Route index element={<ListOfNotes notes={notes}/>}/>
       <Route path="/create" element={<CreateNote Id={userId}/>}/>
       <Route path="/:id" element={<ViewNote/>}/>
       <Route path="edit/:id" element={<EditNote/>}/>
     </Routes>
     )
  }
}

