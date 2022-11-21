import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles/ViewNote.css';

export default function ViewNote() {
  const [note, setNote] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/notes/${id}`)
      .then((response) => response.json())
      .then((data) => setNote(data));
  }, []);

  if (note) {
    return (
      <div className="wrapperOfPage">
        <div className="navOfPage">
          <NavLink className="linkBack" to="/dashboard/notes">
            Back
          </NavLink>
          <h2>{note.title}</h2>
        </div>
        <p className="text"> {note.body}</p>
      </div>
    );
  }
}
