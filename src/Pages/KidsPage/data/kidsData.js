import logo from "../../../Images/logo.png";

export const kidsNavData = {
  logo: logo,
  navLinks: [
    { path: "/method", label: "Our Methodology" },
    { path: "/featured-tutors", label: "The Tutors" },
    { path: "/courses", label: "Courses" },
    { path: "/resources", label: "Resources" },
  ],
  buttons: [
    { path: "/login", label: "Login", className: "" },
    { path: "/signup", label: "Signup", className: "signupbtn" },
  ],
};

 



import teacherkids from "../../../Images/kidsteacher.png";
import studentvideo from "../../../Videos/AI_Progress.mp4";
import trial from "../../../Images/trial.png";

export const kidsHeroData = {
  heroSection: {
    heading: "Online English Learning for Kids",
    description:
      "1-on-1 English classes for kids ages 4-15, taught by certified native English speaking teachers from around the world.",
    buttonLabel: "Schedule a trial",
    image: teacherkids,
    buttonLink: "/signup",
  },
  studentSection: {
    video: studentvideo,
    heading: "Meet Raaid",
    description:
      "Raaid joined Cambly Kids in January 2021 and completed all courses by 2022. Raaid took 5 lessons a week – meeting 102 tutors and spending over 10,000 minutes practicing his English. This culminated in him winning the Silicon Valley App Development Competition. We are proud to be a part of Raaid’s success story. Thank you Raaid!",
    buttonLabel: "Schedule a trial",
    buttonLink: "/signup",
  },
  trialSection: {
    heading:
      "Unlock free games, quizzes, and workbooks when you sign up. No subscription required.",
    description:
      "Unlock free games, quizzes, and workbooks when you sign up. No subscription required.",
    buttonLabel: "Join now",
    image: trial,
    buttonLink: "/signup",
  },
};


import profileimg1 from "../../../Images/profile1.png";
import profileimg2 from "../../../Images/profile2.png";
import profileimg3 from "../../../Images/profile3.png";
import whykid1 from "../../../Images/whykids2.png";
import whykid2 from "../../../Images/whykids1.png";
import whykid3 from "../../../Images/whykids2svg.png";
import coursechart from "../../../Images/courses-chart.png";

export const globeStudentData = {
  globeSection: {
    heading: "Don’t just take it from us",
    description: "Kids of all ages all across the globe love learning with Cambly Kids",
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
        heading: "Real Communication",
        subheading:
          "Cambly Kids always talk with live tutors in real time. This helps them learn English better and faster than by just memorizing words and phrases. Our conversation-based approach is not only engaging but also aids with the acquisition of other language skills, such as listening and reading ability.",
      },
      {
        imageurl: whykid2,
        heading: "Language Skills",
        subheading:
          "Helping kids to interact with language in multiple ways, as opposed to simply memorizing lists of words, helps cement new knowledge. Students are challenged to listen while tutors read prompts, passages, and stories, and speak to their tutor by answering questions and discussing various topics.",
      },
      {
        imageurl: whykid3,
        heading: "Individualized Instruction",
        subheading:
          "Cambly Kids Tutors adapt to each student’s individual needs and interests as they listen and respond to kids’ questions and curiosities. This ensures that students are getting the attention and support they need to aid them in becoming successful language learners.",
      },
    ],
    buttonLabel: "Sign Up",
    buttonLink: "/signup",
  },
  coursesSection: {
    heading: "Cambly Kids Courses",
    description:
      "Our courses are leveled according to the Common European Framework of Reference or CEFR. CEFR is used internationally as a means to standardize language ability. The scale ranges from A1 for beginners to C-level for learners who have near-mastery of the language. At Cambly Kids, we offer courses ranging from A1 to C1.",
    image: coursechart,
    buttonLabel: "See all learning plans",
    buttonLink: "/courses",
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
