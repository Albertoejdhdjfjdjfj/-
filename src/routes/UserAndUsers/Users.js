import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';
import SomethingWentWrong from '../Erors/SomethingWentWrong';

function Users() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (state.loading) {
    return <div>Loading...</div>
  } 
  else if(state.error){
      return <SomethingWentWrong/>
  }else {
    return (
      <div className="Users">
        {state.users.map((item) => (
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
