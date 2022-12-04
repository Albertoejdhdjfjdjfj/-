import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function UserInfo(props) {
  const [userName, setUserName] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${props.albumData.userId}`)
      .then((response) => response.json())
      .then((json) => {
        setUserName(json.name);
      });
  }, []);
  return (
    <div>
      <p>{props.albumData.title}</p>
      <p>
        Created by: <Link to={`/user/${props.albumData.userId}`}>{userName}</Link>
      </p>
    </div>
  );
}

export default UserInfo;
