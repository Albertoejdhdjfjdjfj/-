import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import icon from '../images/album-icon.png';
import { fetchAlbums } from '../../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

function Albums() {
  const dispatch=useDispatch();
  useEffect(() => {
   dispatch(fetchAlbums())
  });

  const albums=useSelector((state)=>state.albums.albums)

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
