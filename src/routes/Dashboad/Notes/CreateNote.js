import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function CreateNote({ Id }) {
  const [name, setName] = useState();
  const [text, setText] = useState();
  return (
    <div>
      <div>
        <NavLink to="/dashboard/notes">Back</NavLink>Create new note
      </div>
      <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
      <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Note text..." />
      <NavLink onClick={pushToServer} to="/dashboard/notes">
        Create
      </NavLink>
    </div>
  );

  function pushToServer() {
    fetch('http://localhost:3001/notes', {
      method: 'POST',
      body: JSON.stringify({
        userId: Id,
        title: name,
        body: text,
        createdAt: formatDate(new Date())
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  }
}

function formatDate(date) {
  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}
