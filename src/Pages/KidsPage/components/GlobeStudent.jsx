// import "./GlobeStudent.css";
// import profileimg1 from "../../../Images/profile1.png";
// import profileimg2 from "../../../Images/profile2.png";
// import profileimg3 from "../../../Images/profile3.png";
// import whykid1 from "../../../Images/whykids2.png";
// import whykid2 from "../../../Images/whykids1.png";
// import whykid3 from "../../../Images/whykids2svg.png";
// import coursechart from "../../../Images/courses-chart.png";
// import { Link } from "react-router-dom";

// export default function GlobeStudent() {
//   const globereivew = [
//     {
//       profileurl: profileimg1,
//       reiview:
//         '"We were looking for a platform for Dila s English education and came across Cambly Kids. Before starting Cambly Kids, Dila could only say colors and numbers in English. After her first lesson, her English improved and she started to express herself comfortably. I 100% recommend Cambly Kids."',
//       name: "Dila",
//       country: "Istanbul, Turkey",
//     },
//     {
//       profileurl: profileimg2,
//       reiview:
//         '"I started it to create an opportunity to speak English. There are many instructors who are good at handling children and entertaining them, so I enjoy taking lessons every time."',
//       name: "Sakura",
//       country: "Japan",
//     },
//     {
//       profileurl: profileimg3,
//       reiview:
//         '"I am very much looking forward to seeing my Cambly teacher. Every time I have a class, the teacher asks me to describe my favorite toy in English. I have learned many expressions and am becoming more and more fond of English."',
//       name: "Alvin",
//       country: "Hangzhou, China",
//     },
//   ];

//   const whykids = [
//     {
//       imageurl: whykid1,
//       heading: "Real Communication",
//       subheading:
//         "Cambly Kids always talk with live tutors in real time. This helps them learn English better and faster than by just memorizing words and phrases. Our conversation-based approach is not only engaging but also aids with the acquisition of other language skills, such as listening and reading ability.",
//     },
//     {
//       imageurl: whykid2,
//       heading: "Language Skills",
//       subheading:
//         "Helping kids to interact with language in multiple ways, as opposed to simply memorizing lists of words, helps cement new knowledge. Students are challenged to listen while tutors read prompts, passages, and stories, and speak to their tutor by answering questions and discussing various topics",
//     },
//     {
//       imageurl: whykid3,
//       heading: "Individualized Instruction",
//       subheading:
//         "Cambly Kids Tutors adapt to each students’ individual needs and interests as they listen and respond to kids questions and curiosities. This ensures that students are getting the attention and support they need to aid them in becoming successful language learners.",
//     },
//   ];

//   return (
//     <div className="globestudent">
//       <div className="globebox">
//         <div className="globetext">
//           <h1>Don t just take it from us</h1>
//           <p>
//             Kids of all ages all across the globe love learning with Cambly Kids
//           </p>
//         </div>
//         <div className="globereview">
//           <div className="reviewlist">
//             {globereivew.map((review, key) => (
//               <div className="reviewcard" key={key}>
//                 <div className="profileimg">
//                   <img src={review.profileurl} alt="" />
//                 </div>
//                 <div className="reviewtext">
//                   <p>{review.reiview}</p>
//                   <span>{review.name}</span>
//                   <span>{review.country}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <Link to={"/signup"}>
//             <button>Schedule a trial</button>
//           </Link>
//         </div>
//       </div>
//       <div className="whyenglish">
//         <h1>Why English Hub</h1>

//         <div className="reasonlist">
//           {whykids.map((wk, key) => (
//             <div className="resoncard" key={key}>
//               <div className="imagebox">
//                 <img src={wk.imageurl} alt="" />
//               </div>
//               <div className="reasontext">
//                 <h1>{wk.heading}</h1>
//                 <p>{wk.subheading} </p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <Link to={"/signup"}>
//           <button>Sign Up</button>
//         </Link>
//       </div>
//       <div className="kidcourses">
//         <h1>Cambly Kids Courses</h1>
//         <p>
//           Our courses are leveled according to the Common European Framework of
//           Reference or CEFR. CEFR is used internationally as a means to
//           standardize language ability. The scale ranges from A1 for beginners
//           to C-level for learners who have near-mastery of the language. At
//           Cambly Kids, we offer courses ranging from A1 to C1.
//         </p>
//         <img src={coursechart} alt="" />
//         <Link to={"/courses"}>
//           <button>See all learning plans</button>
//         </Link>
//       </div>
//     </div>
//   );
// }


import "./GlobeStudent.css";
import { Link } from "react-router-dom";
import {globeStudentData} from "../data/kidsData";

export default function GlobeStudent() {
  const { globeSection, whyEnglishSection, coursesSection } = globeStudentData;

  return (
    <div className="globestudent">
      {/* Globe Section */}
      <div className="globebox">
        <div className="globetext">
          <h1>{globeSection.heading}</h1>
          <p>{globeSection.description}</p>
        </div>
        <div className="globereview">
          <div className="reviewlist">
            {globeSection.reviews.map((review, key) => (
              <div className="reviewcard" key={key}>
                <div className="profileimg">
                  <img src={review.profileurl} alt={review.name} />
                </div>
                <div className="reviewtext">
                  <p>{review.review}</p>
                  <span>{review.name}</span>
                  <span>{review.country}</span>
                </div>
              </div>
            ))}
          </div>
          <Link to={globeSection.buttonLink}>
            <button>{globeSection.buttonLabel}</button>
          </Link>
        </div>
      </div>

      {/* Why English Section */}
      <div className="whyenglish">
        <h1>{whyEnglishSection.heading}</h1>
        <div className="reasonlist">
          {whyEnglishSection.reasons.map((reason, key) => (
            <div className="resoncard" key={key}>
              <div className="imagebox">
                <img src={reason.imageurl} alt={reason.heading} />
              </div>
              <div className="reasontext">
                <h1>{reason.heading}</h1>
                <p>{reason.subheading}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to={whyEnglishSection.buttonLink}>
          <button>{whyEnglishSection.buttonLabel}</button>
        </Link>
      </div>

      {/* Courses Section */}
      <div className="kidcourses">
        <h1>{coursesSection.heading}</h1>
        <p>{coursesSection.description}</p>
        <img src={coursesSection.image} alt="Course Chart" />
        <Link to={coursesSection.buttonLink}>
          <button>{coursesSection.buttonLabel}</button>
        </Link>
      </div>
    </div>
  );
}
