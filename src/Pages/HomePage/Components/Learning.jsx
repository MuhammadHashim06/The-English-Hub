// import { Link, NavLink } from "react-router-dom";
// import "./Learning.css";
// export default function Learning() {
//   return (
//     <div className="learning">
//       <h1>Start your journey to improving your English today </h1>
//       <div className="startbuttons">
//         <Link to={"/signup"}>
//           <button>Get Started</button>
//         </Link>
//         <Link to={"/signup"}>
//           <button>Begin now</button>
//         </Link>
//       </div>
//       <p>
//         Already have an account? <NavLink to={"/login"}> Log in </NavLink>{" "}
//       </p>
//     </div>
//   );
// }
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