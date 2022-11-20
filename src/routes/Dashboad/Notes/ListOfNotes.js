/* eslint-disable */
import { NavLink } from 'react-router-dom';

export default function ListOfNotes({notes}) {
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

function deleteNote(id) {
  fetch(`http://localhost:3001/notes/${id}`, {
    method: 'DELETE',
    headers: {
      id: id
    }
  });
}
