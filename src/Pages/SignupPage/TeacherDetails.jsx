// import {doc, setDoc } from "firebase/firestore";
// // import { getAuth } from "firebase/auth";
// import { db ,auth  } from "../../Backend/loginwithgoogle";
// import { useState } from "react";
// import { useLocation } from "react-router-dom";

// const TeacherDetails = () => {
//   const { state } = useLocation();
//   const { uid } = state || {}; // Extract the UID passed from the previous page

//   const [details, setDetails] = useState({
//     firstName: "",
//     lastName: "",
//     dateOfBirth: "",
//     country: "",
//     address: "",
//     email: "",
//     education: "",
//     experience: "",
//     aboutYou: "",
//     interests: "",
//     nativeAccent: "",
//     additionalLanguages: "",
//     internetSpeed: "",
//     acceptPolicies: false,
//   });

//   const [certificates, setCertificates] = useState(null);
//   const [video, setVideo] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setDetails({ ...details, [name]: type === "checkbox" ? checked : value });
//   };

//   const handleFileChange = (e, type) => {
//     const file = e.target.files[0];
//     if (type === "certificates") {
//       setCertificates(file);
//     } else if (type === "video") {
//       setVideo(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!uid) {
//       alert("User ID is missing. Please try again.");
//       return;
//     }
  
//     try {
//       // Save user details in Firestore
//       await setDoc(doc(db, "users", uid), {
//         ...details,
//         certificateFileName: certificates?.name || null,
//         videoFileName: video?.name || null,
//         createdAt: new Date(),
//       });
  
//       alert("Data saved successfully in Firebase!");
//     } catch (error) {
//       console.error("Error saving to Firebase:", error);
//       alert("Failed to save data in Firebase.");
//     }
  
//     // Optionally also send data to the backend
//     const formData = new FormData();
//     formData.append("uid", uid);
//     formData.append("certificate", certificates);
//     formData.append("video", video);
//     Object.keys(details).forEach((key) => {
//       formData.append(key, details[key]);
//     });
  
//     try {
//       const response = await fetch("http://localhost:5000/upload", {
//         method: "POST",
//         body: formData,
//       });
  
//       if (response.ok) {
//         const result = await response.json();
//         alert("Application submitted successfully!");
//       } else {
//         const errorResult = await response.json();
//         throw new Error(errorResult.message || "Failed to submit application.");
//       }
//     } catch (error) {
//       console.error("Error submitting application:", error);
//       alert("Failed to submit application. Please try again.");
//     }
//   };
  

//   return (
//     <div>
//       <h2>Teacher Application Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>First Name:</label>
//           <input
//             type="text"
//             name="firstName"
//             value={details.firstName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input
//             type="text"
//             name="lastName"
//             value={details.lastName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Date of Birth:</label>
//           <input
//             type="date"
//             name="dateOfBirth"
//             value={details.dateOfBirth}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Country:</label>
//           <input
//             type="text"
//             name="country"
//             value={details.country}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <textarea
//             name="address"
//             value={details.address}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={details.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Education:</label>
//           <input
//             type="text"
//             name="education"
//             value={details.education}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Upload Certificates:</label>
//           <input
//             type="file"
//             onChange={(e) => handleFileChange(e, "certificates")}
//             required
//           />
//         </div>
//         <div>
//           <label>Experience:</label>
//           <textarea
//             name="experience"
//             value={details.experience}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>About You:</label>
//           <textarea
//             name="aboutYou"
//             value={details.aboutYou}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Interests/Topics:</label>
//           <input
//             type="text"
//             name="interests"
//             value={details.interests}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Native Accent:</label>
//           <select
//             name="nativeAccent"
//             value={details.nativeAccent}
//             onChange={handleChange}
//             required
//           >
//             <option value="" disabled>
//               Select an accent
//             </option>
//             <option value="British">British</option>
//             <option value="Canadian">Canadian</option>
//             <option value="American">American</option>
//             <option value="Irish">Irish</option>
//             <option value="South African">South African</option>
//             <option value="Scottish">Scottish</option>
//           </select>
//         </div>
//         <div>
//           <label>Additional Languages Spoken:</label>
//           <input
//             type="text"
//             name="additionalLanguages"
//             value={details.additionalLanguages}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Internet Speed (Enter Speed):</label>
//           <input
//             type="text"
//             name="internetSpeed"
//             value={details.internetSpeed}
//             onChange={handleChange}
//             required
//           />
//           <p>
//             Test your speed here:{" "}
//             <a href="https://speed.is/" target="_blank" rel="noopener noreferrer">
//               speed.is
//             </a>
//           </p>
//         </div>
//         <div>
//           <label>Upload Introduction Video (2-5 mins):</label>
//           <input
//             type="file"
//             onChange={(e) => handleFileChange(e, "video")}
//             required
//           />
//         </div>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               name="acceptPolicies"
//               checked={details.acceptPolicies}
//               onChange={handleChange}
//               required
//             />
//             Accept Policies & Terms and Conditions
//           </label>
//         </div>
//         <button type="submit">Submit Application</button>
//       </form>
//       <p>
//         Thank you for applying to work with The English Hub. We will review your application and respond as soon as possible.
//       </p>
//     </div>
//   );
// };

// export default TeacherDetails;

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Backend/loginwithgoogle";
import "./TeacherDetails.css";

const TeacherDetails = () => {
  const { state } = useLocation();
  const { uid } = state || {}; // Extract UID from state

  const [step, setStep] = useState(1); // Step tracker
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "",
    address: "",
    email: "",
    education: "",
    experience: "",
    aboutYou: "",
    interests: "",
    nativeAccent: "",
    additionalLanguages: "",
    internetSpeed: "",
    acceptPolicies: false,
  });

  const [certificates, setCertificates] = useState(null);
  const [video, setVideo] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDetails({ ...details, [name]: type === "checkbox" ? checked : value });
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (type === "certificates") {
      setCertificates(file);
    } else if (type === "video") {
      setVideo(file);
    }
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!uid) {
      alert("User ID is missing. Please try again.");
      return;
    }

    try {
      await setDoc(doc(db, "users", uid), {
        ...details,
        certificateFileName: certificates?.name || null,
        videoFileName: video?.name || null,
        createdAt: new Date(),
      });
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit application.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Teacher Application Form</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h3 className="form-step-title">Step 1: Personal Details</h3>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={details.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={details.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dateOfBirth"
                value={details.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Country:</label>
              <input
                type="text"
                name="country"
                value={details.country}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <textarea
                name="address"
                value={details.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h3 className="form-step-title">Step 2: Education and Experience</h3>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={details.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Education:</label>
              <input
                type="text"
                name="education"
                value={details.education}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Experience:</label>
              <textarea
                name="experience"
                value={details.experience}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Upload Certificates:</label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "certificates")}
                required
              />
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h3 className="form-step-title">Step 3: Final Details</h3>
            <div className="form-group">
              <label>About You:</label>
              <textarea
                name="aboutYou"
                value={details.aboutYou}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Interests/Topics:</label>
              <input
                type="text"
                name="interests"
                value={details.interests}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Native Accent:</label>
              <select
                name="nativeAccent"
                value={details.nativeAccent}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select your accent
                </option>
                <option value="British">British</option>
                <option value="Canadian">Canadian</option>
                <option value="American">American</option>
                <option value="Irish">Irish</option>
                <option value="South African">South African</option>
                <option value="Scottish">Scottish</option>
              </select>
            </div>
            <div className="form-group">
              <label>Additional Languages Spoken:</label>
              <input
                type="text"
                name="additionalLanguages"
                value={details.additionalLanguages}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                Internet Speed:{" "}
                <a
                  href="https://speed.is/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Test Here
                </a>
              </label>
              <input
                type="text"
                name="internetSpeed"
                value={details.internetSpeed}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Upload Introduction Video:</label>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "video")}
                required
              />
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="acceptPolicies"
                  checked={details.acceptPolicies}
                  onChange={handleChange}
                  required
                />{" "}
                Accept Policies & Terms
              </label>
            </div>
          </div>
        )}
        <div className="form-buttons">
          {step > 1 && (
            <button type="button" onClick={handleBack}>
              Back
            </button>
          )}
          {step < 3 && (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          )}
          {step === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default TeacherDetails;

