import './Signup.css'; // Import the CSS file
import logo from '../../Images/logo.png'; // Replace with your logo file path
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Backend/loginwithgoogle';
import { Outlet } from 'react-router-dom';

const Signup = () => {

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    
    // Optional: You can set custom parameters, such as forcing the user to select an account
    provider.setCustomParameters({
      prompt: 'select_account', // This forces the user to choose an account
    });

    try {
      // Initiate the sign-in process using Firebase's signInWithPopup
      const result = await signInWithPopup(auth, provider);
      
      // The signed-in user info
      const user = result.user;
      console.log('User Info:', user);

      // You can do something with the user, like storing it in a state or redirecting to another page
    } catch (error) {
      // Handle errors (e.g., network issues, denied permission, etc.)
      console.error('Error during Google sign-in:', error.message);
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* Logo */}
        <img src={logo} alt="Logo" className="signup-logo" />

        {/* Heading and Description */}
        <h2>Welcome! Choose how to sign up</h2>
        <p className="signup-description">Sign up with Google or Email to continue.</p>

        {/* Signup Buttons */}
        <div className="signup-buttons">
          <button
            className="signup-button signup-google"
            onClick={() => loginWithGoogle()}
          >
            <i className="fa-brands fa-google"></i>
            Sign up with Google
          </button>

          <button
            className="signup-button signup-email"
            onClick={() => alert('Signing up with Email...')}
          >
            <i className="fa-solid fa-envelope"></i>
            Sign up with Email
          </button>
        </div>

        {/* Creating account for children */}
        <div className="children-account">
          <p>Creating an account for your child?</p>
          <button className="children-account-link" onClick={() => alert('Redirecting to child account creation...')}>
            We’ve got special tutors and courses just for kids. →
          </button>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="signup-footer">
        <p className="signup-tagline">CAMBLY Inc. © Copyright 2024. All Rights Reserved.</p>
      </footer> */}
      {/* <Outlet/> */}
    </div>
  );
};

export default Signup;
