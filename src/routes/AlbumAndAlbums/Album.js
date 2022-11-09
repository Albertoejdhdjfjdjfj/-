import { useParams,Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import UserInfo from './UserInfo'

function Album() {
  const {id}=useParams()
  const [album,setAlbum]=useState([])
   const [albumDate,setAlbumDate]=useState([])
   


  fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
  .then(response => response.json())
   .then(json => setAlbumDate(json))
   

   fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  .then(response => response.json())
  .then(json => setAlbum(json)) 
  


  return (
<div>
 <div>
   <UserInfo albumDate={albumDate} />
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
