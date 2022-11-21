/* eslint-disable */
import { Routes, Route, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import About from './About/About';
import Notes from './Notes/Notes';
import LogOut from './LogOut/LogOut';
import './Dashboard.css';

export default function Dashboard() {
  const [data, setData] = useState();

  const navigate = useNavigate(localStorage.getItem('logIn'));

  useEffect(
    () =>
      localStorage.getItem('logIn') !== null
        ? setData(JSON.parse(localStorage.getItem('logIn')))
        : navigate('/'),
    []
  );

  if (data) {
    return (
      <div>
        <div className="navigation">
          <p>Hello,{data.email}</p>
          <div className="links">
            <NavLink
              className={({ isActive }) => (isActive ? 'link-active' : 'linkToPage')}
              to="/dashboard/"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'link-active' : 'linkToPage')}
              to="/dashboard/notes"
            >
              Notes
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'link-active' : 'linkToPage')}
              to="/dashboard/logout"
            >
              LogOut
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route index element={<About data={data} />} />
          <Route path="/notes/*" element={<Notes userId={data.id} />} />
          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </div>
    );
  }
}
