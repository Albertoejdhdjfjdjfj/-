import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchUserAlbums } from '../../actions/actions';
import icon from '../images/album-icon.png';
import Eror404 from '../Erors/Eror404';

function User() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const albums = useSelector((state) => state.userAlbums);

  useEffect(() => {
    dispatch(fetchUser(id));
    dispatch(fetchUserAlbums(id));
  }, []);

  if (user.loading || albums.loading) {
    return <div>Loading...</div>;
  } else if (user.error || albums.error) {
    return <Eror404 way="/" page="Users" />;
  } else {
    return (
      <div>
        <div className="userDate">
          <a>{user.user.name}</a>
          <p>Username: {user.user.username}</p>
          <p>Email: {user.user.email}</p>
          <p>Phone: {user.user.phone}</p>
          <p>Site: {user.user.website}</p>
        </div>

        <div className="albums">
          <p>Albums</p>
          {albums.albums.map((item) => (
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
  }
}

export default User;
