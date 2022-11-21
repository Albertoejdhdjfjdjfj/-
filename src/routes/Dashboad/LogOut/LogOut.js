import { NavLink } from 'react-router-dom';
import './LogOut.css';
export default function LogOut() {
  return (
    <div className="wrapperLogOut">
      <h1>Are you sure you want to LogOut?</h1>

      <NavLink onClick={() => localStorage.clear()} to="/">
        LogOut
      </NavLink>
    </div>
  );
}
