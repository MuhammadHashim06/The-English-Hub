import "./Goals.css";
import gimg1 from "../../../Images/2.jpg";
import gimg2 from "../../../Images/2.jpg";
import gimg3 from "../../../Images/3-1.jpg"
import gimg4 from "../../../Images/3-2.jpg"
import gimg5 from "../../../Images/4.jpg"
import gimg6 from "../../../Images/4.mp4"
import gimg7 from "../../../Images/6.jpg"

import aiprogress from '../../../Images/5.mp4'
const content = [
  {
    heading: "English tailored to you and your goals",
    subheading:
      "We recommend lessons, topics, and activities to help you reach your goals. You choose the things that get you talking, making moves toward where you want to go.",
    buttonurl: "",
    buttontext: "Start Leanring",
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
    heading: "Improvement over perfection  ",
    subheading:
      "We recommend lessons, topics, and activities to help you reach your goals. You choose the things that get you talking, making moves toward where you want to go.",
    buttonurl: "",
    buttontext: "Explore tutors",
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
      {/* {content.map((c, index) => (
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
      ))} */}
      <div className="goal-section">
          <div className="uppercontent">
            <h1>{content[0].heading}</h1>
            <p>{content[0].subheading}</p>
            <button>{content[0].buttontext}</button>
          </div>
          <div className="section1">
            <div className="card">
              <img src={content[0].card1.imgurl} alt="Card 1" />
            </div>
            {/* <div className="card">
              <img src={content[0].card2.imgurl} alt="Card 2" />
            </div> */}
          </div>
        </div>
        <div className="goal-section">
          <div className="uppercontent">
            <h1>{content[1].heading}</h1>
            <p>{content[1].subheading}</p>
            <button>{content[1].buttontext}</button>
          </div>
          <div className="imagesection">
            <div className="card">
              <img src={content[1].card1.imgurl} alt="Card 1" />
            </div>
            <div className="card">
              <img src={content[1].card2.imgurl} alt="Card 2" />
            </div>
          </div>
        </div>
        <div className="goal-section">
          <div className="uppercontent">
            <h1>{content[2].heading}</h1>
            <p>{content[2].subheading}</p>
            <button>{content[2].buttontext}</button>
          </div>
          <div className="imagesection">
            <div className="card">
              <img src={content[2].card1.imgurl} alt="Card 1" />
            </div>
            <div className="card">
              <video src={content[2].card2.imgurl} alt="Card 2" autoPlay="true" loop="true" />
            </div>
          </div>
        </div>
      <div className="videosection">
      <div className="videocontent">
        <h1>English for Children</h1>
        <p>Start your English journey, progress everyday</p>
</div>
        <video controls
        autoPlay 
        className="progressvideo" >
            <source src={aiprogress} type="video/mp4" />
        </video>
      </div>
      <div className="g-6" >
        <h1>English for Business and Organizations </h1>
      <img src={gimg7} alt="" />
      </div>
      <div className="g-7" >
        <h1>Keep track of how you’re improving  </h1>
      </div>
    </div>
  );
}


{/* <a href={c.buttonurl || "#"} className="start-learning-button">
  Start Learning
</a> */}