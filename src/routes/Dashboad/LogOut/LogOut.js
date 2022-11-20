import { NavLink } from "react-router-dom"

export default function LogOut(){
     return(
<div>
     <div>
     Are you sure you want to LogOut?
     </div>
     <div>
          <NavLink onClick={()=>(localStorage.clear())} to="/">LogOut</NavLink> 
     </div>
</div>
     )

}

