import { NavLink } from "react-router-dom"
import { Navigate } from "react-router-dom"

export default function ListOfNotes({notes}){
     return(
          <div>
               <p>Notes</p>
               <NavLink to="/dashboard/notes/create">Add new note</NavLink>
               <div>
                {
                    notes.map((item)=>(
                      <div  key={item.id}><NavLink to={`/dashboard/notes/${item.id}`}>{item.title} {item.createdAt}</NavLink><div> <NavLink to={`/dashboard/notes/edit/`}>Edit</NavLink> <a>Delete</a></div></div>
                    )
                    )
                }
               </div>
          </div>
     )
}