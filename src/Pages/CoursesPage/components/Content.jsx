import "./Content.css";

import fundamentalimg1 from "../../../Images/Courses/fundamental1.png";

const fundamentalcourses = [
  {
    courseimg: fundamentalimg1,
    heading: "Fundamentals of English Fluency",
    subheading:
      "Gain confidence and fluency in conversational English. There is something for everyone, with courses for all skill levels covering everything from the basics of smalltalk to crafting well-formed opinions about complex, topical issues.",
    experiencelevel: "BEGINNER",
    lessons: "7 LESSONS",
  },
  {
    courseimg: fundamentalimg1,
    heading: "Fundamentals of English Fluency",
    subheading:
      "Gain confidence and fluency in conversational English. There is something for everyone, with courses for all skill levels covering everything from the basics of smalltalk to crafting well-formed opinions about complex, topical issues.",
    experiencelevel: "BEGINNER",
    lessons: "7 LESSONS",
  },
  {
    courseimg: fundamentalimg1,
    heading: "Fundamentals of English Fluency",
    subheading:
      "Gain confidence and fluency in conversational English. There is something for everyone, with courses for all skill levels covering everything from the basics of smalltalk to crafting well-formed opinions about complex, topical issues.",
    experiencelevel: "BEGINNER",
    lessons: "7 LESSONS",
  },
  {
    courseimg: fundamentalimg1,
    heading: "Fundamentals of English Fluency",
    subheading:
      "Gain confidence and fluency in conversational English. There is something for everyone, with courses for all skill levels covering everything from the basics of smalltalk to crafting well-formed opinions about complex, topical issues.",
    experiencelevel: "BEGINNER",
    lessons: "7 LESSONS",
  },
  {
    courseimg: fundamentalimg1,
    heading: "Fundamentals of English Fluency",
    subheading:
      "Gain confidence and fluency in conversational English. There is something for everyone, with courses for all skill levels covering everything from the basics of smalltalk to crafting well-formed opinions about complex, topical issues.",
    experiencelevel: "BEGINNER",
    lessons: "7 LESSONS",
  },
  {
    courseimg: fundamentalimg1,
    heading: "Fundamentals of English Fluency",
    subheading:
      "Gain confidence and fluency in conversational English. There is something for everyone, with courses for all skill levels covering everything from the basics of smalltalk to crafting well-formed opinions about complex, topical issues.",
    experiencelevel: "BEGINNER",
    lessons: "7 LESSONS",
  },
];

export default function Content() {
  return (
    <div className="coursecontent">
      <h1>Discover Courses</h1>
      <div className="fundamental contentbox">
        <div className="contentdiv">
          <h1>Fundamentals of English Fluency</h1>
          <p>
            Gain confidence and fluency in conversational English. There is
            something for everyone, with courses for all skill levels covering
            everything from the basics of smalltalk to crafting well-formed
            opinions about complex, topical issues.
          </p>
        </div>
        <div className="contentcards">
          {fundamentalcourses.map((course, key) => (
            <div className="card" key={key}>
              <div className="cardimg">
                <img src={course.courseimg} alt="card image" />
              </div>
              <div className="cardcontent">
                <div className="uppercontent" >
                <h1>{course.heading}</h1>
                <p>{course.subheading}</p>
                </div>
                <span>
                  {course.experiencelevel} . {course.lessons}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




{/* <div className="card">
            <div className="cardimg">
              <img src="" alt="card image" />
            </div>
            <div className="cardcontent">
              <h3>Basic Conversation Topics</h3>
              <p>
                Improve your conversation skills and gain confidence interacting
                in English
              </p>
              <span>BEGINEER . 7 LESSON</span>
            </div> */}