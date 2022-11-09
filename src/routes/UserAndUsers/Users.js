import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
const [users,setUsers]=useState([])
useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setUsers(json))
})

  return (
    <div className="Users" >
       {
          users.map((item)=>(
             <div key={item.id}>
               <Link to={`/user/${item.id}`}>
                    <p>{item.name}</p>
               </Link>
             </div>
          ))
       }
    </div>
  );
}

export default Users;
