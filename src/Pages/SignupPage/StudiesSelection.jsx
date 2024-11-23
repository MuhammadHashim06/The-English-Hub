// import { useState } from "react";

// const StudiesSelection = ({ goToPreviousStep, goToNextStep }) => {
//   const [selectedStudies, setSelectedStudies] = useState([]);
//   const [customStudy, setCustomStudy] = useState(""); // State for the custom study input

//   const studies = [
//     "Public Services",
//     "Science",
//     "Business",
//     "Entertainment",
//     "Human Resources",
//     "Marketing",
//     "Manufacturing",
//     "Sales",
//     "Retail",
//     "Art",
//     "Technology",
//     "Finance",
//     "Engineering",
//     "Healthcare",
//     "Education",
//     "Something else",
//   ];

//   const toggleStudySelection = (study) => {
//     setSelectedStudies((prevSelected) =>
//       prevSelected.includes(study)
//         ? prevSelected.filter((item) => item !== study) // Unselect if already selected
//         : [...prevSelected, study] // Select the study
//     );
//   };

//   const handleCustomStudyChange = (e) => {
//     setCustomStudy(e.target.value); // Update custom study input
//   };

//   return (
//     <div className="studies-form">
//       <h1>What are you studying?</h1>
//       <div className="selectable-items">
//         {studies.map((study, index) => (
//           <div
//             key={index}
//             className={`selectable-item ${selectedStudies.includes(study) ? 'selected' : ''}`}
//             onClick={() => toggleStudySelection(study)}
//           >
//             {study}
//           </div>
//         ))}
//       </div>

//       {/* Conditionally render input for custom study when "Something else" is selected */}
//       {selectedStudies.includes("Something else") && (
//         <div className="custom-input">
//           <input
//             type="text"
//             placeholder="Please specify your field of study"
//             value={customStudy}
//             onChange={handleCustomStudyChange}
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

// export default StudiesSelection;
import { useState, useEffect } from "react";

const StudiesSelection = ({ goToPreviousStep, goToNextStep, onStudiesSelect }) => {
  const [selectedStudies, setSelectedStudies] = useState([]);
  const [customStudy, setCustomStudy] = useState(""); // State for custom input

  const studies = [
    "Public Services",
    "Science",
    "Business",
    "Entertainment",
    "Human Resources",
    "Marketing",
    "Manufacturing",
    "Sales",
    "Retail",
    "Art",
    "Technology",
    "Finance",
    "Engineering",
    "Healthcare",
    "Education",
    "Something else",
  ];

  // Toggle selection of studies
  const toggleStudySelection = (study) => {
    setSelectedStudies((prevSelected) =>
      prevSelected.includes(study)
        ? prevSelected.filter((item) => item !== study)
        : [...prevSelected, study]
    );
  };

  const handleCustomStudyChange = (e) => {
    setCustomStudy(e.target.value);
  };

  // Notify parent component of selected studies when they change
  const handleSelectionChange = () => {
    onStudiesSelect(selectedStudies);  // Pass selected studies back to parent
  };

  // Call this whenever study selections change
  useEffect(() => {
    handleSelectionChange();
  }, [selectedStudies]); // Re-run every time selectedStudies changes

  return (
    <div className="studies-form">
      <h1>What are you studying?</h1>
      <div className="selectable-items">
        {studies.map((study, index) => (
          <div
            key={index}
            className={`selectable-item ${selectedStudies.includes(study) ? 'selected' : ''}`}
            onClick={() => toggleStudySelection(study)}
          >
            {study}
          </div>
        ))}
      </div>

      {selectedStudies.includes("Something else") && (
        <div className="custom-input">
          <input
            type="text"
            placeholder="Please specify your study area"
            value={customStudy}
            onChange={handleCustomStudyChange}
          />
        </div>
      )}

      <div className="form-buttons">
        <button type="button" onClick={goToPreviousStep} className="back-button">←</button>
        <button onClick={goToNextStep} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default StudiesSelection;
