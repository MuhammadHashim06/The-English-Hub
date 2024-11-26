import "./Footer.css";
import logo from '../Images/logo.png'
import { Link } from "react-router-dom";
// import appstore from '../Images/AppStore.png'
// import googleplay from '../Images/Googleplay.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li>Help center</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Join</h4>
          <ul>
            <li>Cambly for kids</li>
            <li>Cambly for business</li>
            <li>Become a tutor</li>
            <li>Become an ambassador</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Other</h4>
          <ul>
            <Link to='/privatepolicy'>
            <li>Privacy policy</li>
            </Link>
            <Link to='/useragreement' >
            <li>Terms and conditions</li></Link>
          </ul>
        </div>
        <div className="footer-section social">
          <h4>Social</h4>
          <div className="social-icons">
            <i className="fab fa-instagram"></i> {/* Font Awesome Brands */}
            <i className="fab fa-facebook-square"></i> {/* Font Awesome Brands */}
            <i className="fab fa-youtube"></i> {/* Font Awesome Brands */}
            <i className="fab fa-twitter"></i> {/* Font Awesome Brands */}
          </div>

        </div>
        {/* <div className="footer-section  app-links">
          <img src={appstore} alt="Download on the App Store" />
          <img src={googleplay} alt="Get it on Google Play" />
        </div> */}
      </div>

      <div className="footer-bottom">
        <img src={logo} alt="the enlgish hub Logo" className="footer-logo" />
        <p>The English Hub Inc. © Copyright 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
