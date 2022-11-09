import { Routes, Route, Link } from "react-router-dom";
import Users from "./routes/UserAndUsers/Users";
import User from "./routes/UserAndUsers/User";
import Albums from "./routes/AlbumAndAlbums/Albums";
import Album from "./routes/AlbumAndAlbums/Album";

export default function App (){
  return (
  <div>

    <nav>
      <Link to="/albums">
        Albums
      </Link>
      <Link to="/">
        Users
      </Link>
    </nav>

    <Routes>
        <Route  path = '/'element = {<Users/>}/>
        <Route  path = '/user/:id'element = {<User/>}/>
        <Route path = '/albums' element = {<Albums/>}/>
        <Route path = '/album/:id' element = {<Album/>}/>
    </Routes>

    

  </div>
  )
}