import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
      <div>
        <div>
          <NavLink to="/dashboard/notes">Back</NavLink>
          {note.title}
        </div>
        <div> {note.body}</div>
      </div>
    );
  }
}
