import "./Footer.css";
import logo from '../Images/logo.png'
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
            <li>Privacy policy</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
        <div className="footer-section social">
          <h4>Social</h4>
          <div className="social-icons">
            <i className="fa fa-instagram"></i>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-youtube"></i>
            <i className="fa fa-x-twitter"></i>
          </div>
        </div>
        <div className="footer-section  app-links">
        <img src="appstore.png" alt="Download on the App Store" />
        <img src="googleplay.png" alt="Get it on Google Play" />
      </div>
      </div>

      <div className="footer-bottom">
        <img src={logo} alt="the enlgish hub Logo" className="footer-logo" />
        <p>The English Hub Inc. © Copyright 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
