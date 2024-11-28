// src/data.js

// Images
import logo from "../../../Images/logo.png";
import img1 from "../../../Images/50941228-0-Tablet.jpg.png";
import img2 from "../../../Images/Image+Background.png";
import img3 from "../../../Images/Image+Background1.png";
import img4 from "../../../Images/Image1.png";
import reviewimg1 from "../../../Images/review1.png";
import reviewimg2 from "../../../Images/review2.png";
import reviewimg3 from "../../../Images/review3.png";

// Navbar Data
export const navbar = {
  logo,
  title: "The English Hub",
  subtitle: "FOR ORGANIZATION",
  links: [
    { to: "/", label: "For Student" },
    { href: "#qoute", label: "Get Quote" },
  ],
};

// Hero Section Data
export const heroSection = {
  title: "Unlock your company’s global potential",
  description:
    "The English Hub equips your team with the real-world English skills to succeed anywhere through specialized private English tutoring from any device.",
  buttonText: "Get Quote",
};

// Sections Data
export const sections = [
  {
    title: "Why The English Hub?",
    description:
      "The English Hub gives instant access to private lessons with hundreds of patient, professional native English speaking tutors from the UK, US, Australia, Canada and more.",
    img: img1,
  },
  {
    title: "Lessons for any schedule",
    description:
      "Students can book ahead of time with their favorite tutors or call on-demand from anywhere, from any device.",
    img: img2,
  },
  {
    title: "Private Tutoring",
    description:
      "Every student can focus on their individual needs and goals in 1-on-1 classes.",
    img: img3,
  },
  {
    title: "English for the real world",
    description:
      "Students build skills and confidence to navigate real-world situations with ease through our conversation-based methodology.",
    img: img4,
  },
];

// Reviews Data
export const reviews = [
  {
    reviewtext:
      "Improve your public speaking and presentation skills with a marketing consultant from Toronto.",
    imgeurl: reviewimg1,
  },
  {
    reviewtext:
      "Build listening comprehension and aviation vocabulary hearing the adventures of an international pilot.",
    imgeurl: reviewimg2,
  },
  {
    reviewtext:
      "Practice speaking while discussing the latest technologies with a software engineer working in San Francisco.",
    imgeurl: reviewimg3,
  },
];

// Footer Data
export const footer = {
  form: {
    title: "Join The English Hub",
    description:
      "Get in touch to discuss how The English Hub can best support your team.",
    inputs: [
      { type: "text", placeholder: "Name", required: true },
      { type: "email", placeholder: "Work Email", required: true },
      { type: "text", placeholder: "Organization Name", required: true },
      { type: "text", placeholder: "Role", required: true },
      { type: "number", placeholder: "Number of Students", required: true },
      { type: "tel", placeholder: "Phone Number", required: true },
    ],
    textarea: { placeholder: "Message", rows: 4 },
    submitButton: "Submit",
  },
  links: [
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms" },
    { href: "#contact", label: "Contact" },
  ],
  socialLinks: [
    { href: "#linkedin", iconClass: "fab fa-linkedin", ariaLabel: "LinkedIn" },
    { href: "#youtube", iconClass: "fab fa-youtube", ariaLabel: "YouTube" },
    { href: "#instagram", iconClass: "fab fa-instagram", ariaLabel: "Instagram" },
  ],
};
