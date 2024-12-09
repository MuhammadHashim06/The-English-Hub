// src/data.js

// Images
import logo from "../../../Images/logo.png";
import img1 from "../../../Images/New Images/b1.jpg";
import img2 from "../../../Images/New Images/b2.jpg";
import img3 from "../../../Images/New Images/b3.jpg";
import img4 from "../../../Images/New Images/b4.jpg";
import img5 from "../../../Images/New Images/b5.jpg";

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
  title: "Expand your business with English globally",
  description:
    "Grow your company with employees from around the world, who can unite with the English language",
  buttonText: "Get Quote",
  bottomcontent:'Expand your business with English globally'
};

// Sections Data
export const sections = [
  {
    title: "Why Us?",
    description:
      "The English Hub offers private lessons with native English speaking tutors, in any accent of native English you prefer. Oh another thing, you can learn from anywhere in the world!",
    img: img1,
  },
  {
    title: "Start with a conversation",
    description:
      "We offer the chance to have general day-to-day conversations with native English tutors who will enhance social development in your workplace while improving speaking skills in English",
    img: img2,
  },
  {
    title: "Business courses",
    description:
      "We have courses designed for businesses and employees who can communicate effectively in English to business goals",
    img: img3,
  },
  {
    title: "Personalized course",
    description:
      "We offer personalization to courses, where you can send us your business goals or a particular topic you would like employees to better understand English in, and we will create a course for your employees specifically",
    img: img4,
  },
  // {
  //   title: "Smart Transcript Tool",
  //   description:
  //     "We offer a smart transcript tool which allows you to upload meetings and receive a transcript of the text, along with grammar, pronunciation and general improvement suggestions in phrases spoken in English.",
  //   img: img5,
  // },
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
