/* eslint-disable */
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/ListOfNotes.css';
import del from '../../../images/free-icon-recycling-bin-54324.png';
import edit from '../../../images/free-icon-pencil-637343.png';

export default function ListOfNotes(userId) {
  const [notes, setNotes] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/notes?userId=${userId.userId.userId}`)
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, [notes]);

  if (notes) {
    return (
      <div className="notesField">
        <h1>Notes</h1>
        <NavLink className="link" to="/dashboard/notes/create">
          Add new note
        </NavLink>
        <div className="notes">
          {notes.map((item) => (
            <div key={item.id} className="note">
              <NavLink className="linkToNote" to={`/dashboard/notes/${item.id}`}>
                {item.title} {item.createdAt}
              </NavLink>
              <div>
                {' '}
                <NavLink className="linkToNote" to={`/dashboard/notes/edit/${item.id}`}>
                  <img className="image" src={edit} />
                </NavLink>{' '}
                <img
                  onClick={() => {
                    deleteNote(item.id);
                    setNotes(false);
                  }}
                  className="image"
                  src={del}
                />
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
