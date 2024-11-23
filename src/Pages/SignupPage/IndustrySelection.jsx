// import { useState } from "react";

// const IndustrySelection = ({ goToPreviousStep, goToNextStep }) => {
//   const [selectedIndustries, setSelectedIndustries] = useState([]);
//   const [customIndustry, setCustomIndustry] = useState(""); // State to track custom industry input

//   const industries = [
//     "Technology",
//     "Engineering",
//     "Entertainment",
//     "Public Services",
//     "Marketing",
//     "Human Resources",
//     "Healthcare",
//     "Manufacturing",
//     "Art",
//     "Education",
//     "Retail",
//     "Finance",
//     "Science",
//     "Sales",
//     "Something else",
//   ];

//   const toggleIndustrySelection = (industry) => {
//     setSelectedIndustries((prevSelected) =>
//       prevSelected.includes(industry)
//         ? prevSelected.filter((item) => item !== industry) // Unselect if already selected
//         : [...prevSelected, industry] // Select if not already selected
//     );
//   };

//   const handleCustomIndustryChange = (e) => {
//     setCustomIndustry(e.target.value); // Update custom industry input
//   };

//   return (
//     <div className="industry-form">
//       <h1>What industry do you work in?</h1>
//       <div className="selectable-items">
//         {industries.map((industry, index) => (
//           <div
//             key={index}
//             className={`selectable-item ${selectedIndustries.includes(industry) ? 'selected' : ''}`}
//             onClick={() => toggleIndustrySelection(industry)}
//           >
//             {industry}
//           </div>
//         ))}
//       </div>

//       {/* Conditionally render input for custom industry when "Something else" is selected */}
//       {selectedIndustries.includes("Something else") && (
//         <div className="custom-input">
//           <input
//             type="text"
//             placeholder="Please specify your industry"
//             value={customIndustry}
//             onChange={handleCustomIndustryChange}
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

// export default IndustrySelection;
import { useEffect, useState } from "react";

const IndustrySelection = ({ goToPreviousStep, goToNextStep, onIndustrySelect }) => {
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [customIndustry, setCustomIndustry] = useState(""); // State for custom input

  const industries = [
    "Technology",
    "Engineering",
    "Entertainment",
    "Public Services",
    "Marketing",
    "Human Resources",
    "Healthcare",
    "Manufacturing",
    "Art",
    "Education",
    "Retail",
    "Finance",
    "Science",
    "Sales",
    "Something else",
  ];

  const toggleIndustrySelection = (industry) => {
    setSelectedIndustries((prevSelected) =>
      prevSelected.includes(industry)
        ? prevSelected.filter((item) => item !== industry)
        : [...prevSelected, industry]
    );
  };

  const handleCustomIndustryChange = (e) => {
    setCustomIndustry(e.target.value);
  };

  // Notify parent component of selected industries when they change
  const handleSelectionChange = () => {
    onIndustrySelect(selectedIndustries);  // Pass selected industries back to parent
  };

  // Call this whenever industry selections are changed
  useEffect(() => {
    handleSelectionChange();
  }, [selectedIndustries]); // Re-run every time selectedIndustries changes

  return (
    <div className="industry-form">
      <h1>What industry do you work in?</h1>
      <div className="selectable-items">
        {industries.map((industry, index) => (
          <div
            key={index}
            className={`selectable-item ${selectedIndustries.includes(industry) ? 'selected' : ''}`}
            onClick={() => toggleIndustrySelection(industry)}
          >
            {industry}
          </div>
        ))}
      </div>

      {selectedIndustries.includes("Something else") && (
        <div className="custom-input">
          <input
            type="text"
            placeholder="Please specify your industry"
            value={customIndustry}
            onChange={handleCustomIndustryChange}
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

export default IndustrySelection;
