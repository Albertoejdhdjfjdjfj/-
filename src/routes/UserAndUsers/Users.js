import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../actions/actions';
import SomethingWentWrong from '../Erors/SomethingWentWrong';

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (users.loading) {
    return <div>Loading...</div>;
  } else if (users.error) {
    return <SomethingWentWrong />;
  } else {
    return (
      <div className="Users">
        {users.users.map((item) => (
          <div key={item.id}>
            <Link to={`/user/${item.id}`}>
              <p className="user">{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
