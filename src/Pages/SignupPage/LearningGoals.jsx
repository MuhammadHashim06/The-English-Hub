// import { useState } from 'react';

// const LearningGoals = ({ goToPreviousStep, goToNextStep }) => {
//   const [selectedGoals, setSelectedGoals] = useState([]);
//   const [customGoal, setCustomGoal] = useState(""); // State to track custom goal input

//   const goals = [
//     "Grow your career",
//     "Thrive at university",
//     "Prepare for a test",
//     "Just for fun",
//     "Travel abroad",
//     "Something else",
//   ];

//   const toggleGoalSelection = (goal) => {
//     if (goal === "Something else") {
//       // If "Something else" is clicked, toggle selection and reset custom goal
//       if (!selectedGoals.includes(goal)) {
//         setSelectedGoals((prevSelected) => [...prevSelected, goal]);
//         setCustomGoal(""); // Clear the input field when "Something else" is selected
//       } else {
//         setSelectedGoals((prevSelected) => prevSelected.filter((item) => item !== goal));
//         setCustomGoal(""); // Clear input when unselecting "Something else"
//       }
//     } else {
//       // Handle other goals selection
//       setSelectedGoals((prevSelected) =>
//         prevSelected.includes(goal)
//           ? prevSelected.filter((item) => item !== goal)
//           : [...prevSelected, goal]
//       );
//     }
//   };

//   const handleCustomGoalChange = (e) => {
//     setCustomGoal(e.target.value);
//   };

//   return (
//     <div className="learning-goals-form">
//       <h1>What are your learning goals?</h1>
//       <div className="selectable-items">
//         {goals.map((goal, index) => (
//           <div
//             key={index}
//             className={`selectable-item ${selectedGoals.includes(goal) ? 'selected' : ''}`}
//             onClick={() => toggleGoalSelection(goal)}
//           >
//             {goal}
//           </div>
//         ))}
//       </div>

//       {/* Conditionally render input for custom goal when "Something else" is selected */}
//       {selectedGoals.includes("Something else") && (
//         <div className="custom-input">
//           <input
//             type="text"
//             placeholder="Please specify your learning goal"
//             value={customGoal}
//             onChange={handleCustomGoalChange}
//           />
//         </div>
//       )}

//       <hr />
//       <div className="form-buttons">
//         <button type="button" onClick={goToPreviousStep} className="back-button">←</button>
//         <button onClick={goToNextStep} className="next-button">Next</button>
//       </div>
//     </div>
//   );
// };

// export default LearningGoals;

import { useState, useEffect } from "react";

const LearningGoals = ({ goToPreviousStep, goToNextStep, onLearningGoalsSelect }) => {
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [customGoal, setCustomGoal] = useState(""); // State for custom input

  const goals = [
    "Grow your career",
    "Thrive at university",
    "Prepare for a test",
    "Just for fun",
    "Travel abroad",
    "Something else",
  ];

  // Toggle selection of goals
  const toggleGoalSelection = (goal) => {
    setSelectedGoals((prevSelected) =>
      prevSelected.includes(goal)
        ? prevSelected.filter((item) => item !== goal)
        : [...prevSelected, goal]
    );
  };

  const handleCustomGoalChange = (e) => {
    setCustomGoal(e.target.value);
  };

  // Notify parent component of selected goals when they change
  const handleSelectionChange = () => {
    onLearningGoalsSelect(selectedGoals);  // Pass selected goals back to parent
  };

  // Call this whenever goal selections change
  useEffect(() => {
    handleSelectionChange();
  }, [selectedGoals]); // Re-run every time selectedGoals changes

  return (
    <div className="learning-goals-form">
      <h1>What are your learning goals?</h1>
      <div className="selectable-items">
        {goals.map((goal, index) => (
          <div
            key={index}
            className={`selectable-item ${selectedGoals.includes(goal) ? 'selected' : ''}`}
            onClick={() => toggleGoalSelection(goal)}
          >
            {goal}
          </div>
        ))}
      </div>

      {selectedGoals.includes("Something else") && (
        <div className="custom-input">
          <input
            type="text"
            placeholder="Please specify your goal"
            value={customGoal}
            onChange={handleCustomGoalChange}
          />
        </div>
      )}
<hr />
      <div className="form-buttons">
        <button type="button" onClick={goToPreviousStep} className="back-button">←</button>
        <button onClick={goToNextStep} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default LearningGoals;
