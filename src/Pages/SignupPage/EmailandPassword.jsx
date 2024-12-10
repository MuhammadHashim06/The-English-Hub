// import { useState } from 'react';
// import './EmailandPassword.css'; // Import CSS file
// import { useNavigate } from 'react-router-dom';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase imports

// const EmailandPassword = () => {
//   const navigate = useNavigate(); // Corrected navigate initialization
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false); // For loading state

//   const handleSignup = async (e) => {
//     e.preventDefault(); // Prevent default form submission
//     if (!email.trim()) {
//       alert('Please enter a valid email address.');
//       return;
//     }
//     if (!password.trim() || password.length < 6) {
//       alert('Password must be at least 6 characters long.');
//       return;
//     }

//     const auth = getAuth();
//     setLoading(true);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const uid = userCredential.user.uid; // Get the user UID
//       alert('Signup successful!');
//       // Navigate to the next page, passing UID
//       navigate('/signup/role', { state: { uid } });
//     } catch (error) {
//       console.error('Error signing up:', error);
//       alert(`Signup failed: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const navigateBack = () => {
//     navigate('/signup');
//   };

//   return (
//     <div className="email-password">
//       <form className="signup-form" onSubmit={handleSignup}>
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
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {/* <hr /> */}
//         <div className="form-buttons">
//           <button type="button" onClick={navigateBack} className="back-button">
//             ←
//           </button>
//           <button type="submit" disabled={loading} className="next-button">
//             {loading ? 'Signing up...' : 'Next'}
//           </button>
//         </div>
//       </form>
//       <footer>
//         <p>The English Hub © Copyright 2024. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default EmailandPassword;




import { useState } from 'react';
import './EmailandPassword.css'; 
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; 
import axios from 'axios';

const EmailandPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
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
      const uid = userCredential.user.uid;
      
      // Call an API or Cloud Function to set the 'active' claim to false
      // await fetch('/api/setCustomClaims', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ uid, claims: { active: false } })
      // });
      await axios.put(`http://localhost:5000/deactivate-user/${uid}`, { uid });
      alert('Signup successful!');
      navigate('/signup/role', { state: { uid } });
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
        <p>The English Hub © Copyright 2024. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default EmailandPassword;
