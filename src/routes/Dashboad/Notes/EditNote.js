import { NavLink, useParams } from "react-router-dom"
import { useState,useEffect } from "react";

export default function EditNote(){
      const[note,setNote]=useState();
      const[name,setName]=useState();
      const[text,setText]=useState();
      const {id}=useParams();

     useEffect(()=>{
      fetch(`http://localhost:3001/notes/${id}`)
      .then((response)=>response.json())
      .then((data)=>{setNote(data);setName(data.title);setText(data.body)})

      
      }
      ,[]
    )

    if(note){
     return(
      <div>
          <div><NavLink to="/dashboard/notes">Back</NavLink>Edit note</div>
          <input type='text' value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Name"/>
          <input type='text' value={text} onChange={(e)=>setText(e.target.value)}  placeholder="Note text..."/>
          <NavLink onClick={pushToServer} to="/dashboard/notes">Save</NavLink>
      </div>
     )
    }

     function pushToServer(){
          fetch(`http://localhost:3001/notes/${note.id}`, {
               method: 'PUT',
               body: JSON.stringify({
                userId: note.userId,
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
     

     
