import { Link } from "react-router-dom";
import { useState,useEffect } from 'react'
   
function UserInfo(props){
const [userName,setUserName]=useState([])
  useEffect(  () =>{
      fetch(`https://jsonplaceholder.typicode.com/users/${props.albumDate.userId}`)
          .then(response => response.json())
          .then(json => setUserName(json.name)) 
  },[props.albumDate]
  )
 return(
<div>
     <p>{props.albumDate.title}</p>
     <p>Created by: <Link  to={`/user/${props.albumDate.userId}`}>{userName}</Link></p>
 </div>
)
}

export default UserInfo;