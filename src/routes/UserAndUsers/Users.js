import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import icon from '../images/album-icon.png';
import Eror404 from '../Erors/Eror404';

function User() {
  const { id } = useParams();
  const [user, setUser] = useState(false);
  const [albums, setAlbums] = useState(false);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setUser(json));

    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => response.json())
      .then((json) => setAlbums(json));
  });

  if (user.name && albums) {
    return (
      <div>
        <div className="userDate">
          <a>{user.name}</a>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Site: {user.website}</p>
        </div>

        <div className="albums">
          <p>Albums</p>
          {albums
            .filter((item) => item.userId == id)
            .map((item) => (
              <div key={item.id} className="album">
                <img src={icon} />
                <Link to={`/albums/${item.id}`} style={{ marginLeft: '10px' }}>
                  <p>{item.title}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  } else if (!user || !albums) {
    return <div>Loading...</div>;
  } else {
    return <Eror404 way="/" page="Users" />;
  }
}

export default User;
