import { useState } from 'react';
import './NameInput.css'; // Import CSS file
import logo from './logo.png'; // Replace with your logo file path

const Username = () => {
  const [name, setName] = useState('');

  const handleNext = () => {
    if (name.trim()) {
      alert(`Proceeding with the name: ${name}`);
    } else {
      alert('Please enter your name.');
    }
  };

  return (
    <div className="name-input-container">
      {/* Header Section */}
      <header className="name-input-header">
        <img src={logo} alt="Logo" className="name-input-logo" />
      </header>

      {/* Form Section */}
      <div className="name-input-box">
        <h1>Whats your name?</h1>
        <label htmlFor="name" className="name-input-label">
          Your name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your preferred name"
          className="name-input-field"
        />
        <p className="name-input-description">
          Enter your preferred name in English characters.
        </p>
        <button className="name-input-next" onClick={handleNext}>
          Next
        </button>
      </div>

      {/* Footer */}
      <footer className="name-input-footer">
        <p>CAMBLY Inc. © Copyright 2024. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Username;
