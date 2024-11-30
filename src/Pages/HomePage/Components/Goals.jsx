import "./Goals.css";
import {goalsData} from './../data/siteData'
import { Link } from "react-router-dom";

export default function Goals() {
  return (
    <div className="goals">
      <div className="goal-section">
          <div className="uppercontent">
            <h1>{goalsData.sections[0].heading}</h1>
            <p>{goalsData.sections[0].subheading}</p>
            <Link to={'/signup'} >
            
            <button>{goalsData.sections[0].buttonText}</button>
            </Link>
          </div>
          <div className="imagesection">
            <div className="card">
              <img src={goalsData.sections[0].card1.imgUrl} alt="Card 1" />
            </div>
            <div className="card">
              <video src={goalsData.sections[0].card2.imgUrl} alt="Card 2" autoPlay="true" loop="true" />
            </div>
          </div>
        </div>
      <div className="goal-section">
          <div className="uppercontent">
            <h1>{goalsData.sections[1].heading}</h1>
            <p>{goalsData.sections[1].subheading}</p>
            <Link to={'/signup'} > <button>{goalsData.sections[1].buttonText}</button></Link>
           
          </div>
          <div className="section1">
            <div className="card">
              <img src={goalsData.sections[1].card1.imgUrl} alt="Card 1" />
            </div>
          </div>
        </div>
        <div className="goal-section">
          <div className="uppercontent">
            <h2>{goalsData.sections[2].heading}</h2>
            <p>{goalsData.sections[2].subheading}</p>
            <Link to={'/signup'} ><button>{goalsData.sections[2].buttonText}</button></Link>
            
          </div>
          <div className="imagesection">
            <div className="card">
              <img src={goalsData.sections[2].card1.imgUrl} alt="Card 1" />
            </div>
            <div className="card">
              <img src={goalsData.sections[2].card2.imgUrl} alt="Card 2" />
            </div>
          </div>
        </div>
        <div className="goal-section">
          <div className="uppercontent">
            <h1>{goalsData.sections[3].heading}</h1>
            <p>{goalsData.sections[3].subheading}</p>
            <Link to={'/signup'} >
            
            <button>{goalsData.sections[3].buttonText}</button>
            </Link>
          </div>
          <div className="imagesection">
            <div className="card">
              <img src={goalsData.sections[3].card1.imgUrl} alt="Card 1" />
            </div>
            <div className="card">
              <video src={goalsData.sections[3].card2.imgUrl} alt="Card 2" autoPlay="true" loop="true" />
            </div>
          </div>
        </div>
      <div className="videosection">
      <div className="videocontent">
        <h1>{goalsData.sections[4].heading}</h1>
        <p>{goalsData.sections[4].subheading}</p>
</div>
        <video
        autoPlay
        loop
        className="progressvideo" >
            <source src={goalsData.sections[4].progressVideo} type="video/mp4"  />
        </video>
      </div>
      <div className="g-6" >
        <h1>{goalsData.sections[5].heading}</h1>
      <img src={goalsData.sections[5].imageUrl} alt="" />
      </div>
      <div className="g-7" >
        <h1>{goalsData.sections[6].heading}</h1>
      </div>
    </div>
  );
}


{/* <a href={c.buttonurl || "#"} className="start-learning-button">
  Start Learning
</a> */}