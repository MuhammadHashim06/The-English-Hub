import logo from "../../../Images/logo.png";

export const kidsNavData = {
  logo: logo,
  navLinks: [
    { path: "/method", label: "Our Methodology" },
    // { path: "/featured-tutors", label: "The Tutors" },
    { path: "/courses", label: "Courses" },
    // { path: "/resources", label: "Resources" },
  ],
  buttons: [
    { path: "/login", label: "Login", className: "" },
    { path: "/signup", label: "Signup", className: "signupbtn" },
  ],
};

 



import teacherkids from "../../../Images/New Images/k1.jpg";
import studentvideo from "../../../Videos/AI_Progress.mp4";
import trial from "../../../Images/New Images/k2.jpg";

export const kidsHeroData = {
  heroSection: {
    heading: "Online English Learning for Kids",
    description:
      "At The English Hub, we have a child-centred approach when it comes to teaching your little ones English.",
    buttonLabel: "Schedule a trial",
    image: teacherkids,
    buttonLink: "/signup",
  },
  studentSection: {
    video: studentvideo,
    heading: "",
    description:
      "We offer a range of courses tailored for specific age groups which you can select from, however we understand that some children are ready to thrive in their confidence and may want to have a go at an advanced course we build for adults, which they absolutely can for no additional cost! The choice is yours and we offer what works best for your child.",
    buttonLabel: "Schedule a trial",
    buttonLink: "/signup",
  },
  trialSection: {
    heading:
      "Have a read below to thoroughly understand our methodology and why we developed it:",
    description:
      "Our tutors are gentle, patient and all native English speakers to help your child develop English fluently.",
    buttonLabel: "Join now",
    image: trial,
    buttonLink: "/signup",
  },
};


import profileimg1 from "../../../Images/profile1.png";
import profileimg2 from "../../../Images/profile2.png";
import profileimg3 from "../../../Images/profile3.png";
import whykid1 from "../../../Images//New Images/b1.jpg";
import whykid2 from "../../../Images/New Images/b2.jpg";
import whykid3 from "../../../Images/New Images/b3.jpg";
import coursechart from "../../../Images/New Images/k3.jpg";

export const globeStudentData = {
  globeSection: {
    heading: "Don’t just take it from us",
    description: "We use a child-centered approach combined with gentle teaching as our methodology. We teach children confidence in learning English without the use of rewards or ‘gaining’ something from their achievement, other than lots of praise, motivation and encouraging them to be proud of themselves, which boosts their confidence from the get-go and removes the negative thought of needing to gain a reward at the end which only creates pressure and a negative mindset in a child.",
    reviews: [
      {
        profileurl: profileimg1,
        review:
          '"We were looking for a platform for Dila’s English education and came across Cambly Kids. Before starting Cambly Kids, Dila could only say colors and numbers in English. After her first lesson, her English improved and she started to express herself comfortably. I 100% recommend Cambly Kids."',
        name: "Dila",
        country: "Istanbul, Turkey",
      },
      {
        profileurl: profileimg2,
        review:
          '"I started it to create an opportunity to speak English. There are many instructors who are good at handling children and entertaining them, so I enjoy taking lessons every time."',
        name: "Sakura",
        country: "Japan",
      },
      {
        profileurl: profileimg3,
        review:
          '"I am very much looking forward to seeing my Cambly teacher. Every time I have a class, the teacher asks me to describe my favorite toy in English. I have learned many expressions and am becoming more and more fond of English."',
        name: "Alvin",
        country: "Hangzhou, China",
      },
    ],
    buttonLabel: "Schedule a trial",
    buttonLink: "/signup",
  },
  whyEnglishSection: {
    heading: "Why English Hub",
    reasons: [
      {
        imageurl: whykid1,
        heading: "",
        subheading:
          "We use interactive communicative activities and fun engagements such as singing, story time and games.",
      },
      {
        imageurl: whykid2,
        heading: "",
        subheading:
          "Our lessons are recorded and we offer a smart transcript tool which also offers improvement suggestions on grammar, vocabulary and pronunciation.",
      },
      {
        imageurl: whykid3,
        heading: "",
        subheading:
          "Our tutors provide concise feedback after the lesson, allowing you to understand exactly what your child needs and how they are developing.",
      },
    ],
    buttonLabel: "Sign Up",
    buttonLink: "/signup",
  },
  coursesSection: {
    heading: "The English Hub Kids Goals",
    subheading1:
      "Our goal is to make learning English a fun activity rather than a hassle for your child, which brings a positive mindset for them to be eager to learn. The English Hub allows children to learn with native English tutors, which already sets an English speaking environment for them.",
    subheading2:'Based on a child centered approach, we allow children to choose what works for them and develop conversation based on their interests. In some cases, children may feel shy or nervous, which is why we highly recommend trying out some ice breakers from our courses to get the ball rolling!',image: coursechart,
    buttonLabel: "See all learning plans",
    buttonLink: "/courses",
    imageurl:coursechart
  },
};


import tprofile1 from "../../../Images/t1.png";
import tprofile2 from "../../../Images/t2.png";
import tprofile3 from "../../../Images/t3.png";
import tprofile4 from "../../../Images/t4.png";

export const theTutorData = {
  sectionContent: {
    heading: "The Tutor",
    description:
      "100% of tutors on our platform are native English speakers. Many hold graduate degrees from top universities in the US, UK, and Canada. We are continually impressed by these tutors, and we think you will be too!",
  },
  tutors: [
    {
      profileurl: tprofile1,
      name: "Anna",
      rating: "5",
      country: "United States",
    },
    {
      profileurl: tprofile2,
      name: "Renee",
      rating: "5",
      country: "United States",
    },
    {
      profileurl: tprofile3,
      name: "Rusell",
      rating: "5",
      country: "United States",
    },
    {
      profileurl: tprofile4,
      name: "Trevor",
      rating: "5",
      country: "United States",
    },
  ],
  button: {
    label: "Explore all Tutors",
    link: "/featured-tutors",
  },
};
