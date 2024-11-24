import { Link } from "react-router-dom";
import './TutorFooter.css'
export default function TutorFooter() {
  return (
    <div className="tutorfooter">
      <div className="join list">
        <h1>Links</h1>
        <ul>
          <Link>
            <li>Courses</li>
          </Link>
          <Link>
            <li>Blog</li>
          </Link>
          <Link>
            <li>Careers</li>
          </Link>
          <Link>
            <li>Press</li>
          </Link>
        </ul>
      </div>
      <div className="about list">
        <h1>About</h1>

        <ul>
          <Link>
            <li>Cambly</li>
          </Link>
          <Link>
            <li>Cambly Kids</li>
          </Link>
          <Link>
            <li>Cambly for Organizations</li>
          </Link>
          <Link>
            <li>Become a Tutor</li>
          </Link>
          <Link>
            <li>Become an Ambassador</li>
          </Link>
        </ul>
      </div>
      <div className="usefullink list">
        <h1>Usefull Links</h1>
        <ul>
       




          <Link>
            <li> Cambly Help Center</li>
          </Link>
          <Link>
            <li>Cambly (iOS)</li>
          </Link>
          <Link>
            <li>Cambly (Android)</li>
          </Link>
          <Link>
            <li>Cambly Kids (iOS)</li>
          </Link>
          <Link>
          <li>Cambly Kids (Android)
            </li></Link>
        </ul>
      </div>
    </div>
  );
}
