import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function ListOfNotes(userId) {
  const [notes, setNotes] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/notes?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);

  if (notes) {
    return (
      <div>
        <p>Notes</p>
        <NavLink to="/dashboard/notes/create">Add new note</NavLink>
        <div>
          {notes.map((item) => (
            <div key={item.id}>
              <NavLink to={`/dashboard/notes/${item.id}`}>
                {item.title} {item.createdAt}
              </NavLink>
              <div>
                {' '}
                <NavLink to={`/dashboard/notes/edit/${item.id}`}>Edit</NavLink>{' '}
                <a onClick={() => deleteNote(item.id)}>Delete</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function deleteNote(id) {
  fetch(`http://localhost:3001/notes/${id}`, {
    method: 'DELETE',
    headers: {
      id: id
    }
  });
}
