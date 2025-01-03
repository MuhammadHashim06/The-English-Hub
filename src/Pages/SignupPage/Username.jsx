import { useState } from "react";
import "./Username.css";
import LearningGoals from "./LearningGoals";
import IndustrySelection from "./IndustrySelection";
import StudiesSelection from "./StudiesSelection";

const Ussername = () => {
  const [step, setStep] = useState(1);

  const goToNextStep = () => {
    setStep(step + 1);
  };

  const goToPreviousStep = () => {
    setStep(step - 1);
  };

  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedStudies, setSelectedStudies] = useState([]);
  const [selectedGoals, setSelectedGoals] = useState([]);

  // Handle the selected industries from IndustrySelection
  const handleIndustrySelection = (industries) => {
    setSelectedIndustries(industries); // Update selected industries state
  };

  // Handle the selected studies from StudiesSelection
  const handleStudiesSelection = (studies) => {
    setSelectedStudies(studies); // Update selected studies state
  };

  // Handle the selected goals from LearningGoals
  const handleLearningGoalsSelection = (goals) => {
    setSelectedGoals(goals); // Update selected goals state
  };
  return (
    <div className="user-container">
      {/* Step 1: Sign Up */}
      {step === 1 && (
        <div className="signup-form">
          <h1>What’s your Name?</h1>
          <table>
            <tr>
              <td>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="First name in English"
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Last name in English"
                    required
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input type="date" required />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label>Country</label>
                  <input type="text" placeholder="Your country" required />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label>Accent Preference</label>
                  <select required>
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
                    placeholder="Your native language"
                    required
                  />
                </div>
              </td>
            </tr>
          </table>
          <div className="form-group">
            <label>Address</label>
            <textarea placeholder="Your full address" required />
          </div>
          <hr />
          <div className="form-buttons">
            <button onClick={goToNextStep} className="next-button">
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 2: English Level */}
      {step === 2 && (
        <div className="english-level-form">
          <h1>How would you describe your English speaking level?</h1>
          <p>
            We’ll help you find your speaking level after you sign up. For now,
            we’d like to hear your own sense of where you are.
          </p>
          <div className="radio-options">
            {[
              {
                label: "True Beginner",
                description:
                  "You are just starting and have no prior experience speaking English.",
              },
              {
                label: "Beginner",
                description:
                  "You know basic English phrases but struggle with full conversations.",
              },
              {
                label: "Intermediate",
                description:
                  "You can hold conversations on familiar topics but make frequent errors.",
              },
              {
                label: "Upper Intermediate",
                description:
                  "You communicate clearly in most situations, with minor mistakes.",
              },
              {
                label: "Advanced",
                description:
                  "You speak English fluently and confidently in almost any situation.",
              },
            ].map((level, index) => (
              <div key={index} className="radio-option">
                <input type="radio" name="level" id={`level-${index}`} />
                <label htmlFor={`level-${index}`}>
                  {level.label}
                  <span className="info-icon" title={level.description}>
                    i
                  </span>
                </label>
              </div>
            ))}
          </div>
          <hr />
          <div className="form-buttons">
            {/* <button onClick={goToPreviousStep} className="prev-button">Back</button> */}
            <button onClick={goToNextStep} className="next-button">
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <LearningGoals
          goToPreviousStep={() => {}}
          goToNextStep={() => {}}
          onLearningGoalsSelect={handleLearningGoalsSelection} // Pass the handler here
        />
      )}
      {step === 4 && (
        <IndustrySelection
          goToPreviousStep={() => {}}
          goToNextStep={() => {}}
          onIndustrySelect={handleIndustrySelection} // Pass the handler here
        />
      )}
      {step === 5 && (
        <StudiesSelection
          goToPreviousStep={() => {}}
          goToNextStep={() => {}}
          onStudiesSelect={handleStudiesSelection} // Pass the handler here
        />
      )}
      {/* Step 6: Subscribe */}
      {step === 6 && (
        <div className="subscribe-form">
          <h1>Subscribe Today</h1>
          <p>
            Get access to all of English Hub lessons and courses, taught by
            native speakers.
          </p>
          <p>Save today. Learn for life.</p>
          <button className="explore-button">Explore Plans</button>
          <hr />
          <div className="form-buttons">
            <button
              onClick={() => alert("Thank you for visiting!")}
              className="not-ready-button"
            >
              I’m not ready
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ussername;
