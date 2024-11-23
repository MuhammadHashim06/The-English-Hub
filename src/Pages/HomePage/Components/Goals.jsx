import "./Goals.css";
import gimg1 from "../../../Images/goalimg.png";
import gimg2 from "../../../Images/goalimg1.png";
import gimg3 from "../../../Images/goalimg2.png"
import gimg4 from "../../../Images/goalimg3.png"
import gimg5 from "../../../Images/goalimg4.png"
import gimg6 from "../../../Images/goalimg5.png"

import aiprogress from '../../../Videos/AI_Progress.mp4'
const content = [
  {
    heading: "English tailored to you and your goals",
    subheading:
      "We recommend lessons, topics, and activities to help you reach your goals. You choose the things that get you talking, making moves toward where you want to go.",
    buttonurl: "",
    buttontext: "Start Leanring",
    card1: {
      text: "Focus on your unique goals",
      imgurl: gimg3,
    },
    card2: {
      text: "Choose the way you learn",
      imgurl: gimg4,
    },
  },
  {
    heading: "Connect with native english tutors to perfect your English ",
    subheading:
      "We recommend lessons, topics, and activities to help you reach your goals. You choose the things that get you talking, making moves toward where you want to go.",
    buttonurl: "",
    buttontext: "Explore tutors",
    card1: {
      text: "Focus on your unique goals",
      imgurl: gimg1,
    },
    card2: {
      text: "Choose the way you learn",
      imgurl: gimg2,
    },
  },
  {
    heading: "Keep track of how you’re improving ",
    subheading:
      "We recommend lessons, topics, and activities to help you reach your goals. You choose the things that get you talking, making moves toward where you want to go.",
    buttonurl: "",
    buttontext: "Start Leanring",
    card1: {
      text: "Focus on your unique goals",
      imgurl: gimg5,
    },
    card2: {
      text: "Choose the way you learn",
      imgurl: gimg6,
    },
  },
];

export default function Goals() {
  return (
    <div className="goals">
      {content.map((c, index) => (
        <div className="goal-section" key={index}>
          <div className="uppercontent">
            <h1>{c.heading}</h1>
            <p>{c.subheading}</p>
            <button>{c.buttontext}</button>
          </div>
          <div className="imagesection">
            <div className="card">
              <p>{c.card1.text}</p>
              <img src={c.card1.imgurl} alt="Card 1" />
            </div>
            <div className="card">
              <p>{c.card2.text}</p>
              <img src={c.card2.imgurl} alt="Card 2" />
            </div>
          </div>
        </div>
      ))}
      <div className="videosection">
      <div className="videocontent">
        <h1>Improvement over perfection </h1>
        <p>Start your English journey, progress everyday</p>
</div>
        <video controls
        autoPlay 
        className="progressvideo" >
            <source src={aiprogress} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}


{/* <a href={c.buttonurl || "#"} className="start-learning-button">
  Start Learning
</a> */}