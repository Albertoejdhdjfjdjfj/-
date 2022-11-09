import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Albums() {
const [albums,setAlbums]=useState([])

useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response => response.json())
  .then(json => setAlbums(json))
})

  return (
    <div className="Albums" >
       {
          albums.map((item)=>(
             <div key={item.id}>
               <Link to={`/album/${item.id}`}>
                    <p>{item.title}</p>
               </Link>
             </div>
          ))
       }
    </div>
  );
}

export default Albums;