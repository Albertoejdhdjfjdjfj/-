import { NavLink, useParams } from "react-router-dom"
import { useState,useEffect } from "react";

export default function EditNote(){
      const[note,setNote]=useState();
      const {id}=useParams();

     useEffect(()=>{
      fetch(`http://localhost:3001/notes/${id}`)
      .then((response)=>response.json())
      .then((data)=>setNote(data))
      }
      ,[]
    )

    const[name,setName]=useState(note.title);
    const[text,setText]=useState(note.body);

     return(
      <div>
          <div><NavLink to="/dashboard/notes">Back</NavLink>Edit note</div>
          <input  value={note.title} onChange={(e)=>setName(e.target.value)} type='text' placeholder="Name"/>
          <input value={note.body} onChange={(e)=>setText(e.target.value)} type='text' placeholder="Note text..."/>
          <NavLink onClick={pushToServer} to="/dashboard/notes">Save</NavLink>
      </div>
     )

     function pushToServer(){
          fetch('http://localhost:3001/notes', {
               method: 'POST',
               body: JSON.stringify({
                 userId: id,
                 title: name,
                 body: text,
                 createdAt: note.date
               }),
               headers: {
                 'Content-type': 'application/json; charset=UTF-8',
               },
             })
               .then((response) => response.json())
               .then((json) => console.log(json));
     }
}
     

     
