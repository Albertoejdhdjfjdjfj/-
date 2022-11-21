import './About.css';
import { NavLink } from 'react-router-dom';
/* eslint-disable */
export default function About({ data }) {
  return (
    <div className="about">
      <h1>About me</h1>
      <p>Email: {data.email}</p>
      <p>Date Sign up: {data.date}</p>
      <NavLink className="link" to="/dashboard/notes">
        Go to notes
      </NavLink>
    </div>
  );
}
