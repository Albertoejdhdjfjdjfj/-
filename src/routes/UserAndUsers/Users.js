import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  });

  if (users) {
    return (
      <div className="Users">
        {users.map((item) => (
          <div key={item.id}>
            <Link to={`/user/${item.id}`}>
              <p className="user">{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Users;
