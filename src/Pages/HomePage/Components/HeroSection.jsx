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
      <div className="content">
        <h1>Welcome to Our Website</h1>
        <p>We are glad to have you here!</p>
      </div>
    </div>
  );
};

export default HeroSection;
