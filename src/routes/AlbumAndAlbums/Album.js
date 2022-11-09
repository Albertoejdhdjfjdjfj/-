import { useParams,Link} from 'react-router-dom'
import { useState,useEffect } from 'react'

function Album() {
  const {id}=useParams()
  const [album,setAlbum]=useState([])
  const [userName,setUserName]=useState([])
   const [albumDate,setAlbumDate]=useState([])
   
useEffect(()=>{
  
  fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
  .then(response => response.json())
   .then(json => setAlbumDate(json)) 

   if(albumDate.length!==0){
    fetch(`https://jsonplaceholder.typicode.com/users/${albumDate.userId}`)
    .then(response => response.json())
    .then(json => setUserName(json.name)) 
   }
})

useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  .then(response => response.json())
  .then(json => setAlbum(json)) 

 })

  return (
<div>
 <div>
     <p>{albumDate.title}</p>
     <p>Created by: <Link to={`/user/${albumDate.userId}`}>{userName}</Link></p>
 </div>
  {
     album.map((item)=>(
         <img key={item.id} src={item.thumbnailUrl} alt={item.title}/> 
     )
     )
  }
</div>
  );
}

export default Album;
