import { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; // Firestore functions
import { db } from "../../Backend/loginwithgoogle"; // Firebase configuration
import "./Username.css";
import LearningGoals from "./LearningGoals";
import InterestTopic from "./InterestTopic";
import { useLocation, useNavigate } from "react-router-dom";

const UserDetail = () => {
    const location = useLocation(); // Access uid from the state
  const navigate = useNavigate();
   // Get the uid from the state
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "",
    address: "",
    email: "",
    englishGoal: "",
    interests: [],
    accentPreference: "",
    nativeLanguage: "",
    subscription:"free",
    role:'student'

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTopicSelection = (topics) => {
    setFormData((prevData) => ({ ...prevData, interests: topics }));
  };

  const handleLearningGoalsSelection = (goal) => {
    setFormData((prevData) => ({ ...prevData, englishGoal: goal }));
  };

  const goToNextStep = async () => {
    if (step === 4) {
      try {
        const { uid } = location.state;// Replace with actual user ID logic
        await setDoc(doc(db, "users", uid), formData);
        alert("Data saved successfully!");
        navigate('/')
      } catch (error) {
        console.error("Error saving data:", error);
        alert("Failed to save data.");
      }
    } else {
      setStep(step + 1);
    }
  };

  const goToPreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="user-container">
      {/* Step 1: Sign Up */}
      {step === 1 && (
        <div className="signup-form">
          <h1>What’s your Name?</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name in English"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name in English"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      required
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      name="country"
                      placeholder="Your country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <label>Accent Preference</label>
                    <select
                      name="accentPreference"
                      required
                      value={formData.accentPreference}
                      onChange={handleChange}
                    >
                      <option value="">Select your preferred accent</option>
                      <option value="us">US English</option>
                      <option value="uk">UK English</option>
                      <option value="aus">Australian English</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label>Native Language</label>
                    <input
                      type="text"
                      name="nativeLanguage"
                      placeholder="Your native language"
                      required
                      value={formData.nativeLanguage}
                      onChange={handleChange}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              placeholder="Your full address"
              required
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <hr />
          <div className="form-buttons">
            <button onClick={goToNextStep} className="next-button">
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Learning Goals */}
      {step === 2 && (
        <LearningGoals
          goToPreviousStep={goToPreviousStep}
          goToNextStep={goToNextStep}
          onLearningGoalsSelect={handleLearningGoalsSelection}
        />
      )}

      {/* Step 3: Interest Topics */}
      {step === 3 && (
        <InterestTopic
          goToPreviousStep={goToPreviousStep}
          goToNextStep={goToNextStep}
          onTopicSelect={handleTopicSelection}
        />
      )}

      {/* Step 4: Final Step */}
      {step === 4 && (
        <div className="welcome-section">
          <h2>Welcome to Our Platform!</h2>
          <p>
            Thank you for providing your details. We are excited to have you on
            board!
          </p>
          <div className="form-group conditioncheck">
            <label className="acceptcondition">
              <input type="checkbox" required />
              I accept the <a href="#">terms and conditions</a>.
            </label>
          </div>
          <div className="form-buttons">
            <button onClick={goToNextStep} className="not-ready-button">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
