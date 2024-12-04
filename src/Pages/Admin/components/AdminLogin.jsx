import "../../LoginPage/Login.css";
// import {
//   GoogleAuthProvider,
//   signInWithPopup,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../../Backend/loginwithgoogle"; // Firebase auth instance
// import googlelogo from "../../Images/google.png";
import logo from "../../../Images/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // To show loading feedback
  const [error, setError] = useState(null); // To display errors
  const navigate = useNavigate(); // For navigation

  const emailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Clear previous errors
      if (
        email == "Admin@theengliahhub.com" &&
        password == "theenglishhub@123"
      ) {
        const userdata = {
          email: email,
          password: password,
        };
        sessionStorage.setItem("userdata", JSON.stringify(userdata));
        navigate("adminpanel");
      }
    } catch (error) {
      console.error("Error during Email Login:", error.message);
      setError(error.message); // Display error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-card">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="welcome-text">Welcome back!</h1>
      {error && <div className="error-message">{error}</div>}{" "}
      {/* Display errors */}
      {/* <div className="social-login">
          <button onClick={loginWithGoogle} className="social-button google">
            <img src={googlelogo} alt="Google logo" /> Continue with Google
          </button>
        </div> */}
      {/* <div className="separator">
          <span>OR</span>
        </div> */}
      <form className="login-form" onSubmit={emailLogin}>
        <input
          type="email"
          placeholder="Enter your email address"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div> */}

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>
      {/* <div className="signup">
          Dont have an account? <Link to="/signup">Sign up</Link>
        </div> */}
    </div>
  );
};

export default AdminLogin;
