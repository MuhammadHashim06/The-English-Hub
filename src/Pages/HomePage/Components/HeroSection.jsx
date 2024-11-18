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
        <h1>Every new word brings you closer to your goal</h1>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
