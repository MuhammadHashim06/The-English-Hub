import "./Login.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Backend/loginwithgoogle";
import googlelogo from "../../Images/google.png";
import logo from '../../Images/logo.png'
import { Link } from "react-router-dom";
const Login = () => {
  function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
    });
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo" ><img src={logo} alt="" /></div>
        <h1 className="welcome-text">Welcome back!</h1>

        <div className="social-login">
          <button onClick={loginWithGoogle} className="social-button google">
            <img src={googlelogo} alt="Google logo" /> Continue with Google
          </button>
        </div>

        <div className="separator">
          <span>OR</span>
        </div>

        <form className="login-form">
          <input
            type="email"
            placeholder="Enter your email address"
            className="form-input"
          />
          <input
            type="password"
            placeholder="Enter a password"
            className="form-input"
          />

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-button">
            Log in
          </button>
        </form>

        <div className="signup">
          Dont have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
