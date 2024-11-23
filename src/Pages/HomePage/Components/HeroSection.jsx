import "./HeroSection.css"; // We'll define the styles here
import backvideo from "../../../Videos/HeroSection.mp4";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <video autoPlay
      muted
      loop
      playsInline
      className="background-video">
        <source src={backvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="herotext">
        <h1>Learn english from anywhere in the world</h1>
        <button>Start Now</button>
      </div>
      <div className="bottombar">
      <div className="smalldiv">
        <i className="fas fa-signal"></i> {/* Icon */}
        <p>All levels welcome</p>
      </div>
      <div className="smalldiv">
        <i className="fas fa-users"></i> {/* Icon */}
        <p>Real conversations with native speakers</p>
      </div>
      <div className="smalldiv">
        <i className="fas fa-location-dot"></i> {/* Icon */}
        <p>Anytime, anywhere, 24/7</p>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
