// import "./HeroSection.css"; // We'll define the styles here
// import image from "../../../Images/Methods.jpg";
// import conversation from "../../../Images/Conversation.jpg";
// import method from "../../../Images/thinking.jpg";
// import feedback from "../../../Images/feedback.png";
// import Learning from "../../HomePage/Components/Learning";
// import individual from "../../../Images/image.png";

//     const bottomSection = [
//       {
//         "title": "Conversation Based Learning",
//         "description": "If you want to become fluent in English, there’s no way around speaking with real people. From day one on Cambly, you jump into real conversations about topics that matter to you. Whatever your level, whatever your goal.",
//         "image": conversation,
//         "imageAlt": "Conversation Image",
//         "extraText": "Choose from thousands of tutors with different backgrounds, industries, accents, and more—so you can talk about what really matters to you."
//       },
//       {
//         "title": "Feedback tailored to you",
//         "description": "Every conversation is filled with your own unique learning opportunities. We help you identify and learn from your mistakes, and test your skills as you go.",
//         "image": feedback,
//         "imageAlt": "Feedback Image",
//         "extraText": "Choose from thousands of tutors with different backgrounds, industries, accents, and more—so you can talk about what really matters to you."
//       },
//       {
//         "title": "Individualized",
//         "description": "Rather than learning through one-size-fits-all vocabulary and generic grammar rules, we create activities based on your lessons—made just for you. You get to practice on your own time, so you’re ready for your next conversation.",
//         "image": individual,
//         "imageAlt": "Individualized Learning Image",
//         "extraText": "Choose from thousands of tutors with different backgrounds, industries, accents, and more—so you can talk about what really matters to you."
//       }
//     ]

// const HeroSection = () => {
//   // State to hold the bottom section data

//   return (
//     <div className="methodhero">
//       <img src={image} alt="" className="background-image" />
//       <div className="herocontent">
//         <div className="herotext">
//           <h1>The English Hub Methods</h1>
//           <p>
//             Textbooks, memorization, and games won’t teach you real-world
//             English. We do things differently. Our conversation-based learning
//             gets you speaking right from the start. With feedback and activities
//             generated from your conversations, you get a truly individualized
//             experience that makes the language really stick.
//           </p>
//         </div>
//         <img src={method} alt="" />
//       </div>

//       <div className="bottomsection">
//         {bottomSection.map((section, index) => (
//           <div key={index} className="innersection">
//             <div className="content">
//               <h1>{section.title}</h1>
//               <p>{section.description}</p>
//             </div>
//             <div className="lowerpic">
//               <img src={section.image} alt={section.imageAlt} />
//               <p>{section.extraText}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Learning />
//     </div>
//   );
// };

// export default HeroSection;

// HeroSection.js

import "./HeroSection.css";
import Learning from "../../HomePage/Components/Learning";
import { bottomSectionData, mainSectionData } from "../data/methodData";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="methodhero">
      <div className="videocontent background-video">
      <video autoPlay muted loop playsInline className="video">
        <source src={mainSectionData.main.videoUrl} type="video/mp4" />
      </video>
      </div>
     
      {/* <img
        src={mainSectionData.main.imageUrl}
        alt=""
        className="background-image"
      /> */}
      <div className="herocontent">
      
        <div className="herotext">
          <h1>{mainSectionData.main.heading}</h1>
          <p>{mainSectionData.main.subheading}</p>
        </div>
        {/* <img src={method} alt="Learning Method" /> */}
      </div>

      <div className="methoddiv">
        <div className="methodtext">
          <h1>{mainSectionData.methoddiv.heading}</h1>
          <p>{mainSectionData.methoddiv.subheading}</p>
          <Link to={mainSectionData.methoddiv.link}>
          <button> {mainSectionData.methoddiv.buttonText} </button>
          </Link>
        </div>
        <div className="methodimage">
          <img src={mainSectionData.methoddiv.imageUrl} alt="" />
        </div>
      </div>

      <div className="bottomsection">
        {bottomSectionData.map((section, index) => (
          <div key={index} className="innersection">
            <div className="content">
              <h1>{section.title}</h1>
              <p>{section.description}</p>
            </div>
            <div className="lowerpic">
              <img src={section.image} alt={section.imageAlt} />
              <p>{section.extraText}</p>
            </div>
          </div>
        ))}
      </div>
      <Learning />
    </div>
  );
};

export default HeroSection;
