// import "./Login.css";
// import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../Backend/loginwithgoogle";
// import googlelogo from "../../Images/google.png";
// import logo from '../../Images/logo.png';
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const loginWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
    
//     // Optional: You can set custom parameters, such as forcing the user to select an account
//     provider.setCustomParameters({
//       prompt: 'select_account', // This forces the user to choose an account
//     });

//     try {
//       // Initiate the sign-in process using Firebase's signInWithPopup
//       const result = await signInWithPopup(auth, provider);
      
//       // The signed-in user info
//       const user = result.user;
//       console.log('User Info:', user);

//       // You can do something with the user, like storing it in a state or redirecting to another page
//     } catch (error) {
//       // Handle errors (e.g., network issues, denied permission, etc.)
//       console.error('Error during Google sign-in:', error.message);
//     }
//   };

//   const emailLogin = async (e) => {
//     e.preventDefault(); // Prevent form from refreshing the page
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       console.log("User logged in:", userCredential.user);
//     } catch (error) {
//       console.error("Error during Email Login:", error.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <div className="logo"><img src={logo} alt="Logo" /></div>
//         <h1 className="welcome-text">Welcome back!</h1>

//         <div className="social-login">
//           <button onClick={loginWithGoogle} className="social-button google">
//             <img src={googlelogo} alt="Google logo" /> Continue with Google
//           </button>
//         </div>

//         <div className="separator">
//           <span>OR</span>
//         </div>

//         <form className="login-form" onSubmit={emailLogin}>
//           <input
//             type="email"
//             placeholder="Enter your email address"
//             className="form-input"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Enter a password"
//             className="form-input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <div className="forgot-password">
//             <a href="#">Forgot password?</a>
//           </div>

//           <button type="submit" className="login-button">
//             Log in
//           </button>
//         </form>

//         <div className="signup">
//           Dont have an account? <Link to="/signup">Sign up</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import "./Login.css";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Backend/loginwithgoogle"; // Firebase auth instance
import googlelogo from "../../Images/google.png";
import logo from "../../Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // To show loading feedback
  const [error, setError] = useState(null); // To display errors
  const navigate = useNavigate(); // For navigation

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account", // Forces the user to choose an account
    });

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      // Navigate to the next page after login
      navigate("/dashboard", { state: { uid: user.uid } });
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
      setError(error.message); // Display error message
    }
  };

  const emailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear previous errors
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in:", user);
      // Navigate to the next page after login
      navigate("/dashboard", { state: { uid: user.uid } });
    } catch (error) {
      console.error("Error during Email Login:", error.message);
      setError(error.message); // Display error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="welcome-text">Welcome back!</h1>

        {error && <div className="error-message">{error}</div>} {/* Display errors */}

        <div className="social-login">
          <button onClick={loginWithGoogle} className="social-button google">
            <img src={googlelogo} alt="Google logo" /> Continue with Google
          </button>
        </div>

        <div className="separator">
          <span>OR</span>
        </div>

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

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
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
