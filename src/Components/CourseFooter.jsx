import { Link } from "react-router-dom";
import "./CourseFooter.css";
export default function CourseFooter() {
  return (
    <div className="coursefooter">
      <ul>
        <Link to={"/privacypolicy"}>
          <li>Privacy Policy </li>
        </Link>
        <Link to={"/useragreement"}>
          <li>Terms and Conditions </li>
        </Link>
        <Link>
          <li>Jobs </li>
        </Link>
        <Link>
          <li>Contact</li>
        </Link>
        <Link>
          <li>Press </li>
        </Link>
      </ul>
      <div className="social-icons">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-twitter"></i>
      </div>
      <p>The English Hub Inc. © Copyright 2024. All Rights Reserved.</p>
    </div>
  );
}
