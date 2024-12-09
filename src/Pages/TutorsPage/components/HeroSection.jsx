import "./HeroSection.css";
import { tutorData } from "../data/tutordata";
import { Link } from "react-router-dom";
export default function HeroSection() {
  const tutors = [
    {
      name: "Michelle Burns",
      rating: 4.89,
      reviews: 2211,
      country: "UK",
      location: "Scotland but live in Mauritius",
      flag_icon: "uk-flag-icon.png",
      tutor_since: 2022,
      calendar_icon: "calendar-icon.png",
      profile_image: "michelle-burns-profile.jpg",
      description:
        "Hi! I'm Michelle. Language lover and tutor of English (particular... see more",
      highlights: [
        {
          icon: "chat-icon.png",
          text: "1000+ Chats",
        },
      ],
      action: {
        text: "Schedule trial",
        button_class: "schedule-btn",
      },
    },
    {
      name: "Teacher Colleen",
      rating: 4.95,
      reviews: 1425,
      country: "US",
      location: "Herbster, Wisconsin",
      flag_icon: "usa-flag-icon.png",
      tutor_since: 2022,
      calendar_icon: "calendar-icon.png",
      profile_image: "teacher-colleen-profile.jpg",
      description:
        "Hi, I am Colleen from northern Wisconsin on beautiful Lake Superior... see more",
      highlights: [
        {
          icon: "chat-icon.png",
          text: "1000+ Chats",
        },
        {
          icon: "certified-icon.png",
          text: "Certified Teacher",
        },
      ],
      action: {
        text: "Schedule trial",
        button_class: "schedule-btn",
      },
    },
    {
      name: "Ronnie UK",
      rating: 4.95,
      reviews: 6902,
      country: "UK",
      location: "United Kingdom",
      flag_icon: "uk-flag-icon.png",
      tutor_since: 2018,
      calendar_icon: "calendar-icon.png",
      profile_image: "ronnie-uk-profile.jpg",
      description:
        "Hi! I live in the Midlands in the UK. I am in interested in techn... see more",
      highlights: [
        {
          icon: "chat-icon.png",
          text: "1000+ Chats",
        },
        {
          icon: "certified-icon.png",
          text: "Certified Teacher",
        },
      ],
      action: {
        text: "Schedule trial",
        button_class: "schedule-btn",
      },
    },
    {
      name: "Sang Kim",
      rating: 4.91,
      reviews: 2177,
      country: "US",
      location: "Houston, TX, America",
      flag_icon: "usa-flag-icon.png",
      tutor_since: 2022,
      calendar_icon: "calendar-icon.png",
      profile_image: "sang-kim-profile.jpg",
      description:
        "Hi, my name is Sang Kim, and I am a terrific English teacher. If ... see more",
      highlights: [
        {
          icon: "chat-icon.png",
          text: "1000+ Chats",
        },
        {
          icon: "certified-icon.png",
          text: "Certified Teacher",
        },
      ],
      action: {
        text: "Schedule trial",
        button_class: "schedule-btn",
      },
    },
    {
      name: "Jeff the Tutor",
      rating: 4.84,
      reviews: 6274,
      country: "US",
      location: "North America",
      flag_icon: "usa-flag-icon.png",
      tutor_since: 2020,
      calendar_icon: "calendar-icon.png",
      profile_image: "jeff-the-tutor-profile.jpg",
      description:
        "I'm a Cambly Super Tutor specializing is North American English... see more",
      highlights: [
        {
          icon: "chat-icon.png",
          text: "1000+ Chats",
        },
        {
          icon: "certified-icon.png",
          text: "Certified Teacher",
        },
      ],
      action: {
        text: "Schedule trial",
        button_class: "schedule-btn",
      },
    },
  ];

  return (
    <div className="tutorhero">
      <div className="herodiv">
        <h1>{tutorData.topsection.title}</h1>
        <p>{tutorData.topsection.heading}</p>
      </div>
      {/* 
      <div className="tutorlist">
        <div className="findtutor">
          <h1>Find Tutor</h1>{" "}
          <div className="findtutorbtn">
            {" "}
            <button>Search...</button> <button>Availability</button>{" "}
            <button>Accent</button>
          </div>{" "}
        </div>
        <div className="list">
          {tutors.map((tutor, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                <img
                  src={tutor.profile_image}
                  alt={tutor.name}
                  className="profile-img"
                />
                <div className="card-title">
                  <h2>{tutor.name}</h2>
                  <p>
                    <span className="rating">{tutor.rating}</span> •{" "}
                    {tutor.reviews} reviews
                  </p>
                  <p>
                    <img
                      src={tutor.flag_icon}
                      alt={`${tutor.country} Flag`}
                      className="flag-icon"
                    />
                    {tutor.location}
                  </p>
                  <p>
                    <img
                      src={tutor.calendar_icon}
                      alt="Calendar Icon"
                      className="icon"
                    />
                    Tutor since {tutor.tutor_since}
                  </p>
                </div>
              </div>
              <div className="card-body">
                <p>
                  {tutor.description}
                  <a href="#">see more</a>
                </p>
                <div className="highlights">
                  {tutor.highlights.map((highlight, index) => (
                    <p key={index}>
                      <img
                        src={highlight.icon}
                        alt={highlight.text}
                        className="icon"
                      />
                      {highlight.text}
                    </p>
                  ))}
                </div>
              </div>
              <div className="card-footer">
                <button className={tutor.action.button_class}>
                  {tutor.action.text}
                </button>
              </div>
            </div>
          ))}

          
      </div>
      </div> */}
      <div className="middlesection">
        <div className="text">
          <p>{tutorData.middelsection.heading}</p>
          <div className="video">
          <video autoPlay loop playsInline >
            <source src={tutorData.middelsection.videoUrl} type="video/mp4" />
          </video>
        </div>
          <p>{tutorData.middelsection.heading2}</p>
          <Link to={tutorData.middelsection.link}>
          <button>{tutorData.middelsection.buttontext}</button>
          </Link>
        </div>
        {/* <div className="video">
          <video autoPlay loop playsInline >
            <source src={tutorData.middelsection.videoUrl} type="video/mp4" />
          </video>
        </div> */}
      </div>
      {/* <div className="bottom">
        <h1>Sign up to see all of these incredible tutors</h1>
        <button className="signup">
          Sign up to see all tutors <i className="fa-solid fa-arrow-right"></i>{" "}
        </button>
      </div> */}
    </div>
  );
}

{
  /* <div className="card">
            <div className="card-header">
              <img
                src="profile-image.jpg"
                alt="Teacher Colleen"
                className="profile-img"
              />
              <div className="card-title">
                <h2>Teacher Colleen</h2>
                <p>
                  <span className="rating">4.95</span> • 1425 reviews
                </p>
                <p>
                  <img
                    src="usa-flag-icon.png"
                    alt="USA Flag"
                    className="flag-icon"
                  />{" "}
                  Herbster, Wisconsin
                </p>
                <p>
                  <img
                    src="calendar-icon.png"
                    alt="Calendar Icon"
                    className="icon"
                  />{" "}
                  Tutor since 2022
                </p>
              </div>
            </div>
            <div className="card-body">
              <p>
                Hi, I am Colleen from northern Wisconsin on beautiful Lake
                Superior...
                <a href="#">see more</a>
              </p>
              <div className="highlights">
                <p>
                  <img src="chat-icon.png" alt="Chat Icon" className="icon" />{" "}
                  1000+ Chats
                </p>
                <p>
                  <img
                    src="certified-icon.png"
                    alt="Certified Icon"
                    className="icon"
                  />{" "}
                  Certified Teacher
                </p>
              </div>
            </div>
            <div className="card-footer">
              <button className="schedule-btn">Schedule trial</button>
            </div>
          </div>
        </div> */
}
