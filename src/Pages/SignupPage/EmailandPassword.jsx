// import { useState } from 'react';
// import './EmailandPassword.css'; // Import CSS file
// import { useNavigate } from 'react-router-dom';
// const EmailandPassword = () => {
//     const navigate = new useNavigate()
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = () => {
//     if (!email.trim()) {
//       alert('Please enter a valid email address.');
//       return;
//     }
//     if (!password.trim() || password.length < 6) {
//       alert('Password must be at least 6 characters long.');
//       return;
//     }
//     alert(`Signed up with:\nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}`);
//   };
//   const NaviagateBack = () => {
// navigate('/signup')
//   }
//   return (
//     <div className="email-password">
//       <form className="signup-form">
//         <h1>Sign up with your email</h1>
//         <p>
//           By creating an account, you agree to our{' '}
//           <a href="/terms" target="_blank">User Agreement</a> and{' '}
//           <a href="/privacy" target="_blank">Privacy Policy</a>.
//         </p>
//         <p>
//           Already have an account?{' '}
//           <a href="/login">Log in</a>
//         </p>
//         <div className="form-group">
//           <label>Email address</label>
//           <input type="email" placeholder="Enter your email" required />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input type="password" placeholder="Enter your password" required />
//         </div>
//         <div className="form-buttons">
//           <button type="button" onClick={NaviagateBack}  className="back-button">←</button>
//           <button type="submit" onClick={handleSignup}  className="next-button">Next</button>
//         </div>
//       </form>
//       <footer>
//         <p>
//           CAMBLY Inc. © Copyright 2024. All Rights Reserved.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default EmailandPassword;

import { useState } from 'react';
import './EmailandPassword.css'; // Import CSS file
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase imports

const EmailandPassword = () => {
  const navigate = useNavigate(); // Corrected navigate initialization
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // For loading state

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!email.trim()) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!password.trim() || password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    const auth = getAuth();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid; // Get the user UID
      alert('Signup successful!');
      // Navigate to the next page, passing UID
      navigate('/signup/teacherdetails', { state: { uid } });
    } catch (error) {
      console.error('Error signing up:', error);
      alert(`Signup failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const navigateBack = () => {
    navigate('/signup');
  };

  return (
    <div className="email-password">
      <form className="signup-form" onSubmit={handleSignup}>
        <h1>Sign up with your email</h1>
        <p>
          By creating an account, you agree to our{' '}
          <a href="/terms" target="_blank">User Agreement</a> and{' '}
          <a href="/privacy" target="_blank">Privacy Policy</a>.
        </p>
        <p>
          Already have an account?{' '}
          <a href="/login">Log in</a>
        </p>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* <hr /> */}
        <div className="form-buttons">
          <button type="button" onClick={navigateBack} className="back-button">
            ←
          </button>
          <button type="submit" disabled={loading} className="next-button">
            {loading ? 'Signing up...' : 'Next'}
          </button>
        </div>
      </form>
      <footer>
        <p>CAMBLY Inc. © Copyright 2024. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default EmailandPassword;
