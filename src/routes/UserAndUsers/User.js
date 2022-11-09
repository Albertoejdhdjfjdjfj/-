import {Outlet, useParams,Link} from 'react-router-dom'
import { useState,useEffect } from 'react'

function User() {
  const {id}=useParams()
  const [user,setUser]=useState({})
  const [albums,setAlbums]=useState([])
useEffect(()=>{
     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(response => response.json())
  .then(json => setUser(json))

  fetch(`https://jsonplaceholder.typicode.com/albums`)
  .then(response => response.json())
  .then(json => setAlbums(json))
})
  return (
<div>
  <div>
   <p>{user.name}</p>
   <p>Username: {user.username}</p>
   <p>Email: {user.email}</p>
   <p>Phone: {user.phone}</p>
   <p>Site: {user.website}</p>
   </div>

   <div>
     {
      albums.filter(
        (item)=>(item.userId==id)
        ).map(
          (item)=>(
            <div key={item.id}>
              <Link to={`/album/${item.id}`}>
                   <p>{item.title}</p>
              </Link>
            </div>
        )
       )
      }
   </div>
</div>
  );
}

export default User;
