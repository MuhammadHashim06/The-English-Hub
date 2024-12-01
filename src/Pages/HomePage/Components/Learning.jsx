import { Link, NavLink } from "react-router-dom";
import "./Learning.css";
import { learningData } from "../data/siteData";

export default function Learning() {
  const { 
    title, 
    buttons, 
    accountPrompt 
  } = learningData;

  return (
    <div className="learning">
      <h1>{title}</h1>
      <div className="startbuttons">
        {buttons.map((button, index) => (
          <Link key={index} to={button.link}>
            <button>{button.text}</button>
          </Link>
        ))}
      </div>
      <p>
        {accountPrompt.text}{" "}
        <NavLink to={accountPrompt.loginLink}>Log in</NavLink>
      </p>
    </div>
  );
}