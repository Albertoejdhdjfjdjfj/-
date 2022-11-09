import {Outlet, useParams,Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import icon from '../images/album-icon.png'
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
  <div className='userDate'>

   <a>{user.name}</a>
   <p>Username: {user.username}</p>
   <p>Email: {user.email}</p>
   <p>Phone: {user.phone}</p>
   <p>Site: {user.website}</p>
   </div>

   <div className='albums'>
    <p>Albums</p>
     {
      albums.filter(
        (item)=>(item.userId==id)
        ).map(
          (item)=>(
            <div key={item.id} className='album'>
              <img src={icon} />
              <Link to={`/albums/${item.id}`} style={{marginLeft:'10px'}}>
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
