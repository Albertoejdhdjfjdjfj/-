import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import icon from '../images/album-icon.png';
import { fetchAlbums } from '../../actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import SomethingWentWrong from '../Erors/SomethingWentWrong';

function Albums() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  const albums = useSelector((state) => state.albums);

  if (albums.loading) {
    return <div>Loading...</div>;
  } else if (albums.error) {
    return <SomethingWentWrong />;
  } else {
    return (
      <div>
        {albums.albums.map((item) => (
          <div key={item.id} className="album">
            <img src={icon} />
            <Link to={`/albums/${item.id}`} style={{ marginLeft: '10px' }}>
              <p>{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Albums;
