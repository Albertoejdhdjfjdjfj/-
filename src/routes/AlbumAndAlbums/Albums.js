import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import icon from '../images/album-icon.png'

function Albums() {
const [albums,setAlbums]=useState([])

useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response => response.json())
  .then(json => setAlbums(json))
})

  return (
    <div>
       {
          albums.map((item)=>(
             <div key={item.id} className="album" >
              <img src={icon} />
               <Link to={`/albums/${item.id}`} style={{marginLeft:'10px'}}>
                    <p>{item.title}</p>
               </Link>
             </div>
          ))
       }
    </div>
  );
}

export default Albums;