import { useEffect, useState } from "react";

const InterestTopic = ({ goToPreviousStep, goToNextStep, onTopicSelect }) => {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [customTopic, setCustomTopic] = useState(""); // State for custom input

  const Topics = [
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

  const toggleTopicSelection = (Topic) => {
    setSelectedTopics((prevSelected) =>
      prevSelected.includes(Topic)
        ? prevSelected.filter((item) => item !== Topic)
        : [...prevSelected, Topic]
    );
  };

  const handleCustomTopicChange = (e) => {
    setCustomTopic(e.target.value);
  };

  // Notify parent component of selected Topics when they change
  const handleSelectionChange = () => {
    onTopicSelect(selectedTopics);  // Pass selected Topics back to parent
  };

  // Call this whenever Topic selections are changed
  useEffect(() => {
    handleSelectionChange();
  }, [selectedTopics]); // Re-run every time selectedTopics changes

  return (
    <div className="Topic-form">
      <h1>What Topic do you work in?</h1>
      <div className="selectable-items">
        {Topics.map((Topic, index) => (
          <div
            key={index}
            className={`selectable-item ${selectedTopics.includes(Topic) ? 'selected' : ''}`}
            onClick={() => toggleTopicSelection(Topic)}
          >
            {Topic}
          </div>
        ))}
      </div>

      {selectedTopics.includes("Something else") && (
        <div className="custom-input">
          <input
            type="text"
            placeholder="Please specify your Topic"
            value={customTopic}
            onChange={handleCustomTopicChange}
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

export default InterestTopic;
