import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchAlbum } from '../../actions/actions';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Eror404 from '../Erors/Eror404';

function Album() {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbum(id));
  }, []);

  const album = useSelector((state) => state.album);

  console.log(album);
  if (album.loading) {
    return <div>Loading...</div>;
  } else if (album.error) {
    return <Eror404 />;
  } else {
    return (
      <div>
        <div>
          <p>{album.title}</p>
          <p>
            Created by: <Link to={`/user/${album.userId}`}>{album.autor}</Link>
          </p>
        </div>
        {album.photos.map((item) => (
          <img key={item.id} src={item.thumbnailUrl} alt={item.title} />
        ))}
      </div>
    );
  }
}

export default Album;
