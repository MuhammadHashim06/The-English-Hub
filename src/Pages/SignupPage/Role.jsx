import { NavLink } from "react-router-dom";
import "./Role.css"; // Importing the CSS file for styling

export default function Role() {
  return (
    <div className="role-container">
      <div className="role-box">
        <h1>Select Role</h1>
        <NavLink to={'/signup/userdetail'} className="role-button">
          <button>Student</button>
        </NavLink>
        <NavLink to={'/signup/teacherdetails'} className="role-button">
          <button>Tutor</button>
        </NavLink>
      </div>
    </div>
  );
}
