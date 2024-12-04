// import "./HeroSection.css";
// import backvideo from "../../../Videos/HeroSection.mp4";
// import { Link } from "react-router-dom";
// const HeroSection = () => {
//   return (
//     <div className="hero-section">
//       <video autoPlay muted loop playsInline className="background-video">
//         <source src={backvideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="herotext">
//         <h1>Learn english from anywhere in the world</h1>
//         <p>
//           Learn English the natural way with native English tutors guiding you
//           every step of the way, no matter what level of English you have. Learn
//           from anywhere in the world, at any time!{" "}
//         </p>
//         <Link to='/signup'><button>Start Now</button></Link>
        
//       </div>
//       <div className="bottombar">
//         <div className="smalldiv">
//           <i className="fas fa-signal"></i> {/* Icon */}
//           <p>All levels welcome</p>
//         </div>
//         <div className="smalldiv">
//           <i className="fas fa-users"></i> {/* Icon */}
//           <p>Real conversations with native speakers</p>
//         </div>
//         <div className="smalldiv">
//           <i className="fas fa-location-dot"></i> {/* Icon */}
//           <p>Anytime, anywhere, 24/7</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
// src/Components/HeroSection.jsx
import "./HeroSection.css";
import { heroSectionData }from "../data/siteData.js";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <video autoPlay muted loop playsInline className="background-video">
        <source src={heroSectionData.backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="herotext">
        <h1>{heroSectionData.title}</h1>
        <p>{heroSectionData.description}</p>
        <Link to='/signup'><button>Start Now</button></Link>
      </div>
      <div className="bottombar">
        <div className="smalldiv">
          <p>{heroSectionData.description}</p>
        </div>
        {/* {heroSectionData.bottomBar.map((item, index) => (
          <div key={index} className="smalldiv">
            <i className={item.icon}></i>
            <p>{item.text}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default HeroSection;