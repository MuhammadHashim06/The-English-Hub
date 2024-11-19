// import "./Goals.css";
// import gimg1 from "../../../Images/goalimg.png";
// import gimg2 from "../../../Images/goalimg1.png";


// const content = [{
//   heading: "Learn english your way",
//   subheading:
//     "We recommend lessons, topics, and activities to help you reach your goals. You choose the things that get you talking, making moves toward where you want to go",
//     buttonurl:'',
//   card1: {
//     text: "Focus on your unique goals",
//     imgurl: gimg1,
//   },
//   card2: {
//     text: "Choose the way you learn",
//     imgurl: gimg2,
//   },
//  },{
//     heading: "Learn english your way",
//     subheading:
//       "We recommend lessons, topics, and activities to help you reach your goals. You choose the things that get you talking, making moves toward where you want to go",
//       buttonurl:'',
//     card1: {
//       text: "Focus on your unique goals",
//       imgurl: gimg1,
//     },
//     card2: {
//       text: "Choose the way you learn",
//       imgurl: gimg2,
//     },
//    },
//    {
//     heading: "Learn english your way",
//     subheading:
//       "We recommend lessons, topics, and activities to help you reach your goals. You choose the things that get you talking, making moves toward where you want to go",
//       buttonurl:'',
//     card1: {
//       text: "Focus on your unique goals",
//       imgurl: gimg1,
//     },
//     card2: {
//       text: "Choose the way you learn",
//       imgurl: gimg2,
//     },
//    }
// ];

// export default function Goals() {
//   return (
//     <div className="goals" >
//     {content.map(c=>{
// <div className="">
//       <div className="uppercontent">
//         <h1>{c.heading}</h1>
//         <p>{c.subheading}</p>
//         <button>Start Learning</button>
//       </div>
//       <div className="imagesection">
//         <div className="card">
//           <p>{c.card1.text}</p>
//           <img src={c.card1.imgurl} />
//         </div>
//         <div className="card">
//         <p>{c.card2.text}</p>
//         <img src={c.card2.imgurl} />
//         </div>
//       </div>
//     </div>
//     })}
//     </div>
//   );
// }
import "./Goals.css";
import gimg1 from "../../../Images/goalimg.png";
import gimg2 from "../../../Images/goalimg1.png";

const content = [
  {
    heading: "Learn English your way",
    subheading:
      "We recommend lessons, topics, and activities to help you reach your goals. You choose the things that get you talking, making moves toward where you want to go.",
    buttonurl: "",
    buttontext:"Start Leanring",
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
    heading: "Explore native English speaking tutors",
    subheading:
      "We recommend lessons, topics, and activities to help you reach your goals. You choose the things that get you talking, making moves toward where you want to go.",
    buttonurl: "",
    buttontext:"Explore tutors",
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
    heading: "Track your progress",
    subheading:
      "We recommend lessons, topics, and activities to help you reach your goals. You choose the things that get you talking, making moves toward where you want to go.",
    buttonurl: "",
    buttontext:"Start Leanring",
    card1: {
      text: "Focus on your unique goals",
      imgurl: gimg1,
    },
    card2: {
      text: "Choose the way you learn",
      imgurl: gimg2,
    },
  },
  // Repeat the content objects as needed
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
    </div>
  );
}
