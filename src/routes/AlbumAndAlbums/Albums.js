import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import icon from '../images/album-icon.png';

function Albums() {
  const [albums, setAlbums] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) => {
        setAlbums(json);
      });
  });

  if (albums) {
    return (
      <div>
        {albums.map((item) => (
          <div key={item.id} className="album">
            <img src={icon} />
            <Link to={`/albums/${item.id}`} style={{ marginLeft: '10px' }}>
              <p>{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Albums;
