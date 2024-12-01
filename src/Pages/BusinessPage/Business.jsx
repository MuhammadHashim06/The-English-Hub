// import "./Business.css";
// import logo from "../../Images/logo.png";
// import { Link } from "react-router-dom";

// import img1 from "../../Images/50941228-0-Tablet.jpg.png";
// import img2 from "../../Images/Image+Background.png";
// import img3 from "../../Images/Image+Background1.png";
// import img4 from "../../Images/Image1.png";
// import reviewimg1 from "../../Images/review1.png"
// import reviewimg2 from "../../Images/review2.png"
// import reviewimg3 from "../../Images/review3.png"

// export default function Business() {
//   const reviews = [
//     {
//       reviewtext:
//         "Improve your public speaking and presentation skills with a marketing consultant from Toronto.",
//       imgeurl: reviewimg1,
//       name: "",
//       profession: "",
//       country: "",
//     },
//     {
//       reviewtext:
//         "Build listening comprehension and aviation vocabulary hearing the adventures of an international pilot.",
//       imgeurl: reviewimg2,
//       name: "",
//       profession: "",
//       country: "",
//     },
//     {
//       reviewtext:
//         "Practice speaking while discussing the latest technologies with a software engineer working in San Francisco.",
//       imgeurl: reviewimg3,
//       name: "",
//       profession: "",
//       country: "",
//     },
//   ];

//   return (
//     <div className="business">
//       <div className="businessnav">
//         <div className="logo">
//           <Link to={'/'} >
//           <img src={logo} alt="" />
//           </Link>
//           <p>
//             The English Hub <small>FOR ORGANIZATION</small>{" "}
//           </p>
//         </div>
//         <div className="navlink">
//           <Link to={"/"}>For Student</Link>
//           <a href={"#qoute"}>Get Qoute </a>
//         </div>
//       </div>

//       <div className="businesshero">
//         <div className="herocontent">
//           <h1>Unlock your company s global potential</h1>
//           <p>
//             The English Hub equips your team with the real-world English skills to
//             succeed anywhere through specialized private English tutoring from
//             any device.
//           </p>
//           <a href={"#qoute"}>
//           <button>Get Qoute</button>
//           </a>
//         </div>
//       </div>
//       <div className="businesssection">
//         <div className="section">
//           <div className="scontent">
//             <h1>Why The English Hub?</h1>
//             <p>
//               The English Hub gives instant access to private lessons with
//               hundreds of patient, professional native English speaking tutors
//               from the UK, US, Australia, Canada and more.
//             </p>
//           </div>
//           <div className="simg">
//             <img src={img1} alt="Section Image" />
//           </div>
//         </div>
//         <div className="section">
//           <div className="simg">
//             <img src={img2} alt="Section Image" />
//           </div>
//           <div className="scontent">
//             <h1>Lessons for any schedule</h1>
//             <p>
//               Students can book ahead of time with their favorite tutors or call
//               on-demand from anywhere, from any device.
//             </p>
//           </div>
//         </div>
//         <div className="section">
//           <div className="scontent">
//             <h1>Private Tutoring</h1>
//             <p>
//               Every student can focus on their individual needs and goals in
//               1-on-1 classes.
//             </p>
//           </div>
//           <div className="simg">
//             <img src={img3} alt="Section Image" />
//           </div>
//         </div>
//         <div className="section">
//           <div className="simg">
//             <img src={img4} alt="Section Image" />
//           </div>
//           <div className="scontent">
//             <h1>English for the real world</h1>
//             <p>
//               Students build skills and confidence to navigate real world
//               situations with ease through our conversation based methodology.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="banner">
//         <div className="bannercontent">
//           <h1>Empower your global team today</h1>
//           <a href="#qoute">

//           <button> Get Quote</button>
//           </a>
//         </div>
//       </div>
//       <div className="reviewsection">
//         <div className="uppercontent">
//           <h1>Excel in multi-cultural business</h1>
//           <p>
//             {" "}
//             On The English Hub, students learn more than English - they develop the
//             communication skills to stand out in their field.
//           </p>
//         </div>
//         <div className="reivewbox">
//           {reviews.map((reivew, key) => (
//             <div className="reviewcard" key={key}>
//               <div className="reviewtext">
//                 <p>{reivew.reviewtext}</p>
//               </div>
//               <div className="reviewimage">
//                 <img src={reivew.imgeurl} alt="userimg" />
//               </div>
//             </div>
//           ))}

//           <div className="reviewcard">
//             <div className="reviewtext">
//               <p></p>
//             </div>
//             <div className="reviewimage">
//               <img src="" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="businessfooter" >
//       <div className="footer">
//       <div className="footer-content">
//         {/* Form Section */}
//         <div className="form-section">
//           <h2 className="form-title">Join The English Hub</h2>
//           <p className="form-description">
//             Get in touch to discuss how The English Hub can best support your team.
//           </p>
//           <form className="footer-form" id="qoute" >
//             <input type="text" placeholder="Name" required className="form-input" />
//             <input
//               type="email"
//               placeholder="Work Email"
//               required
//               className="form-input"
//             />
//             <input
//               type="text"
//               placeholder="Organization Name"
//               required
//               className="form-input"
//             />
//             <input type="text" placeholder="Role" required className="form-input" />
//             <input
//               type="number"
//               placeholder="Number of Students"
//               required
//               className="form-input"
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               required
//               className="form-input"
//             />
//             <textarea
//               placeholder="Message"
//               rows="4"
//               className="form-textarea"
//             ></textarea>
//             <button type="submit" className="form-submit-button">
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* Footer Links Section */}
//         <div className="footer-links-section">
//           <div className="footer-links">
//             <Link href="#privacy" className="footer-link">Privacy Policy</Link>
//             <Link href="#terms" className="footer-link">Terms</Link>
//             <a href="#contact" className="footer-link">Contact</a>
//           </div>
//           <div className="footer-icons">
//             <a href="#linkedin" className="footer-icon" aria-label="LinkedIn">
//               <i className="fab fa-linkedin"></i>
//             </a>
//             <a href="#youtube" className="footer-icon" aria-label="YouTube">
//               <i className="fab fa-youtube"></i>
//             </a>
//             <a href="#instagram" className="footer-icon" aria-label="Instagram">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
//           <div className="footer-copyright">
//             The English Hub Inc. © Copyright 2020. All rights reserved.
//           </div>
//         </div>
//       </div>
//     </div>
//       </div>
//     </div>
//   );
// }

import "./Business.css";
import { Link } from "react-router-dom";
import {
  navbar,
  heroSection,
  sections,
  // reviews,
  footer,
} from "./data/businessData";

export default function Business() {
  return (
    <div className="business">
      {/* Navbar */}
      <div className="businessnav">
        <div className="logo">
          <Link to={"/"}>
            <img src={navbar.logo} alt="Logo" />
          </Link>
          <p>
            {navbar.title}
          </p>
        </div>
        <div className="navlink">
        <Link to={navbar.links[0].to} >
                {navbar.links[0].label}
              </Link>
          
        </div>
      </div>

      {/* Hero Section */}
      <div className="businesshero">
        <div className="herocontent">
          <h1>{heroSection.description}</h1>
          {/* <a href="#qoute">
            <button>{heroSection.buttonText}</button>
          </a> */}
        </div>
      </div>

      {/* Sections */}
      <div className="businesssection">
        {sections.map((section, index) => (
          <div className="section" key={index}>
            <div className="scontent">
              <h1>{section.title}</h1>
              <p>{section.description}</p>
            </div>
            <div className="simg">
              <img src={section.img} alt={`Section ${index}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Reviews */}
      {/* <div className="reviewsection">
        <div className="uppercontent">
          <h1>Excel in multi-cultural business</h1>
          <p>
            On The English Hub, students learn more than English - they develop
            the communication skills to stand out in their field.
          </p>
        </div>
        <div className="reivewbox">
          {reviews.map((review, index) => (
            <div className="reviewcard" key={index}>
              <div className="reviewtext">
                <p>{review.reviewtext}</p>
              </div>
              <div className="reviewimage">
                <img src={review.imgeurl} alt={`Review ${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div> */}
<div className="botomsection">
  <div className="innerdiv">
    <div className="innertext">
      <h1>
        {heroSection.bottomcontent}
      </h1>
    </div>
  </div>
</div>
      {/* Footer */}
      <div className="businessfooter">
        <div className="footer">
          <div className="footer-content">
            {/* Form */}
            {/* <div className="form-section">
              <h2 className="form-title">{footer.form.title}</h2>
              <p className="form-description">{footer.form.description}</p>
              <form className="footer-form" id="qoute">
                {footer.form.inputs.map((input, index) => (
                  <input
                    key={index}
                    type={input.type}
                    placeholder={input.placeholder}
                    required={input.required}
                    className="form-input"
                  />
                ))}
                <textarea
                  placeholder={footer.form.textarea.placeholder}
                  rows={footer.form.textarea.rows}
                  className="form-textarea"
                ></textarea>
                <button type="submit" className="form-submit-button">
                  {footer.form.submitButton}
                </button>
              </form>
            </div> */}

            {/* Links and Socials */}
            <div className="footer-links-section">
              <div className="footer-links">
                {footer.links.map((link, index) => (
                  <a href={link.href} key={index} className="footer-link">
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="footer-icons">
                {footer.socialLinks.map((social, index) => (
                  <a
                    href={social.href}
                    key={index}
                    className="footer-icon"
                    aria-label={social.ariaLabel}
                  >
                    <i className={social.iconClass}></i>
                  </a>
                ))}
              </div>
              <div className="footer-copyright">
                The English Hub Inc. © Copyright 2020. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
