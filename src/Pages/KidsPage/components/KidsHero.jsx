import "./KidsHero.css";
import teacherkids from "../../../Images/kidsteacher.png";
import studentvideo from "../../../Videos/AI_Progress.mp4";
import trial from "../../../Images/trial.png";
import { Link } from "react-router-dom";
export default function KidsHero() {
  return (
    <div className="kidhero">
      <div className="herobox">
        <div className="herotext">
          <h1>Online English Learning for Kids</h1>
          <p>
            1-on-1 English classes for kids ages 4-15, taught by certified
            native English speaking teachers from around the world.
          </p>
          <Link to={"/signup"}>
            <button>Schedule a trial</button>
          </Link>
        </div>
        <div className="heroimage">
          <img src={teacherkids} alt="" />
        </div>
      </div>

      <div className="student">
        <div className="studentvideo">
          <video autoPlay controls controlsList="nodownload">
            <source src={studentvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="studentcontent">
          <h1>Meet Raaid</h1>
          <p>
            Raaid joined Cambly Kids in January 2021 and completed all courses
            by 2022. Raaid took 5 lessons a week – meeting 102 tutors and
            spending over 10,000 minutes practicing his English. This culminated
            in him winning the Silicon Valley App Development Competition. We
            are proud to be a part of Raaid’s success story. Thank you Raaid!
          </p>
          <Link to={"/signup"}>
            <button>Schedule a trial</button>
          </Link>
        </div>
      </div>
      <div className="trialbox">
        <div className="trialtext">
          <h1>
            Unlock free games, quizzes, and workbooks when you sign up. No
            subscription required.
          </h1>
          <p>
            Unlock free games, quizzes, and workbooks when you sign up. No
            subscription required.
          </p>{" "}
          <Link to={"/signup"}>
            <button>Join now</button>
          </Link>
        </div>
        <div className="trialimage">
          <img src={trial} alt="" />
        </div>
      </div>
    </div>
  );
}
