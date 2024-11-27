// import "./Footer.css";
// import logo from '../Images/logo.png'
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-section">
//           <h4>About</h4>
//           <ul>
//             <li>Help center</li>
//             <li>Careers</li>
//             <li>Press</li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h4>Join</h4>
//           <ul>
//             <Link to={'/kids'} >
//             <li>Cambly for kids</li>
//             </Link>
//             <Link to={'/business'}>
//             <li>Cambly for business</li>
//             </Link>
//             <Link to={'/featured-tutors'} >
//             <li>Become a tutor</li>
//             </Link>
//             <li>Become an ambassador</li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h4>Other</h4>
//           <ul>
//             <Link to='/privacypolicy'>
//             <li>Privacy policy</li>
//             </Link>
//             <Link to='/useragreement' >
//             <li>Terms and conditions</li></Link>
//           </ul>
//         </div>
//         <div className="footer-section social">
//           <h4>Social</h4>
//           <div className="social-icons">
//             <i className="fab fa-instagram"></i> {/* Font Awesome Brands */}
//             <i className="fab fa-facebook-square"></i> {/* Font Awesome Brands */}
//             <i className="fab fa-youtube"></i> {/* Font Awesome Brands */}
//             <i className="fab fa-twitter"></i> {/* Font Awesome Brands */}
//           </div>

//         </div>
//       </div>

//       <div className="footer-bottom">
//         <img src={logo} alt="the enlgish hub Logo" className="footer-logo" />
//         <p>The English Hub Inc. © Copyright 2024. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// }
// src/Components/Footer.jsx
import "./Footer.css";
import logo from '../Images/logo.png';
import { Link } from "react-router-dom";
import { footerData } from "../Pages/HomePage/data/siteData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {footerData.sections.map((section, index) => (
          <div key={index} className="footer-section">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, linkIndex) => (
                <Link key={linkIndex} to={link.path}>
                  <li>{link.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
        
        <div className="footer-section social">
          <h4>Social</h4>
          <div className="social-icons">
            {footerData.socialIcons.map((icon, index) => (
              <i key={index} className={icon}></i>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <img src={logo} alt="The English Hub Logo" className="footer-logo" />
        <p>{footerData.copyright}</p>
      </div>
    </footer>
  );
}