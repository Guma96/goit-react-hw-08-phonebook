import { NavLink } from 'react-router-dom';
import c from './AuthNav.module.css';
export const AuthNav = () => {
  return (
    <div>
      <NavLink className="link" to="/register">
        Register
      </NavLink>
      <NavLink className="link" to="/login">
        Log In
      </NavLink>
    </div>
  );
};
