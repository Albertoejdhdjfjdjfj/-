import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import Eror404 from '../Erors/Eror404';

function Album() {
  const { id } = useParams();
  const [album, setAlbum] = useState(false);
  const [albumData, setalbumData] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then((response) => response.json())
      .then((json) => setAlbum(json));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((response) => response.json())
      .then((json) => setalbumData(json));
  }, []);

  if (album && albumData.userId) {
    return (
      <div>
        <div>
          <UserInfo albumData={albumData} />
        </div>
        {album.map((item) => (
          <img key={item.id} src={item.thumbnailUrl} alt={item.title} />
        ))}
      </div>
    );
  } else if (!album && !albumData.userId) {
    return <div>Loading...</div>;
  } else if (album && !albumData.userId) {
    return <Eror404 way="/albums" page="Albums" />;
  }
}

export default Album;
