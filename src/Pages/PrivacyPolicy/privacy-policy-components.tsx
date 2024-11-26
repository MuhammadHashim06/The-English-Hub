// // App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrivacyPolicy from './pages/PrivacyPolicy';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/privacy" element={<PrivacyPolicy />} />
//         {/* Add other routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// pages/PrivacyPolicy.jsx
import PolicyHeader from './components/PolicyHeader.jsx';
import TableOfContents from './components/TableOfContents';
import PolicySection from './components/PolicySection.js';
import { 
  collectInformationSections, 
  useInformationSections, 
  disclosureInformationSections,
  additionalRegionalSections 
} from './data/policySections.js';

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <PolicyHeader />
      <TableOfContents />
      
      <section id="information-collection">
        <h2 className="text-2xl font-bold mb-4">1. The Information We Collect</h2>
        {collectInformationSections.map((section, index) => (
          <PolicySection key={index} {...section} />
        ))}
      </section>

      <section id="information-use">
        <h2 className="text-2xl font-bold my-4">2. How We Use the Information We Collect</h2>
        {useInformationSections.map((section, index) => (
          <PolicySection key={index} {...section} />
        ))}
      </section>

      <section id="information-disclosure">
        <h2 className="text-2xl font-bold my-4">3. With Whom & Why We Disclose Your Information</h2>
        {disclosureInformationSections.map((section, index) => (
          <PolicySection key={index} {...section} />
        ))}
      </section>

      {/* Add more sections as needed */}
      <section id="regional-disclosures">
        <h2 className="text-2xl font-bold my-4">13. Additional Regional Disclosures</h2>
        {additionalRegionalSections.map((section, index) => (
          <PolicySection key={index} {...section} />
        ))}
      </section>
    </div>
  );
}

export default PrivacyPolicy;




// components/PolicySection.jsx
