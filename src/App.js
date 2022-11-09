import { Routes, Route, NavLink } from "react-router-dom";
import Users from "./routes/UserAndUsers/Users";
import User from "./routes/UserAndUsers/User";
import Albums from "./routes/AlbumAndAlbums/Albums";
import Album from "./routes/AlbumAndAlbums/Album";
import './App.css'

export default function App (){
  return (
  <div>

    <nav>
      <NavLink  className={({isActive})=>isActive?'link-active':''} to="/albums" style={{marginRight: '20px',textDecoration:'none'}}>
        Albums
      </NavLink>
      <NavLink  to="/"  className={({isActive})=>isActive?'link-active':''} style={{marginRight: '20px',textDecoration:'none'}} >
        Users
      </NavLink>
    </nav>

    <Routes>
        <Route  path = '/'element = {<Users/>}/>
        <Route  path = '/user/:id'element = {<User/>}/>
        <Route path = '/albums' element = {<Albums/>}/>
        <Route path = '/albums/:id' element = {<Album/>}/>
    </Routes>

    

  </div>
  )
}