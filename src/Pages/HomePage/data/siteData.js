// src/data/siteData.js
import logo from '../../../Images/logo.png';
import gimg1 from '../../../Images/2.jpg';
import gimg2 from '../../../Images/2.jpg';
import gimg3 from '../../../Images/3-1.jpg';
import gimg4 from '../../../Images/3-2.jpg';
import gimg5 from '../../../Images/4.jpg';
import gimg6 from '../../../Images/4.mp4';
import gimg7 from '../../../Images/6.jpg';
import gimg8 from '../../../Images/pexels-n-voitkevich-7235907.jpg';
import gimg9 from '../../../Images/6963350-hd_1080_1920_25fps.mp4'
import aiprogress from '../../../Images/5.mp4';
import backvideo from '../../../Videos/HeroSection.mp4';

export const learningData = {
  title: "Start your journey to improving your English today",
  buttons: [
    { 
      text: "Get Started", 
      link: "/signup" 
    },
    { 
      text: "Begin now", 
      link: "/signup" 
    }
  ],
  accountPrompt: {
    text: "Already have an account?",
    loginLink: "/login"
  }
};


export const navbarData = {
  logo: logo,
  links: [
    { name: "Method", path: "/method" },
    { name: "Courses", path: "/courses" },
    { name: "Resources", path: "/resources" },
    { name: "Kids", path: "/kids" },
    { name: "Business", path: "/business" },
    { name: "Smart Transcript tool", path: "/tool" }
  ]
};

export const heroSectionData = {
  backgroundVideo: backvideo,
  title: "Learn english from anywhere in the world",
  description: "Learn English the natural way with native English tutors guiding you every step of the way, no matter what level of English you have. Learn from anywhere in the world, at any time!",
  bottomBar: [
    { 
      icon: "fas fa-signal", 
      text: "All levels welcome" 
    },
    { 
      icon: "fas fa-users", 
      text: "Real conversations with native speakers" 
    },
    { 
      icon: "fas fa-location-dot", 
      text: "Anytime, anywhere, 24/7" 
    }
  ]
};

export const goalsData = {
  sections: [
    {
      heading: "Learn english from anywhere in the world",
      subheading: "",
      buttonText: "Start Learning",
      card1: {
        text: "Focus on your unique goals",
        imgUrl: gimg8
      },
      card2: {
        text: "Choose the way you learn",
        imgUrl: gimg9
      }
    },
    {
      heading: "English tailored to you and your goals",
      subheading: "We recommend lessons, topics, and activities to help you reach your goals. You choose the things that get you talking, making moves toward where you want to go.",
      buttonText: "Start Learning",
      card1: {
        text: "Focus on your unique goals",
        imgUrl: gimg1
      },
      card2: {
        text: "Choose the way you learn",
        imgUrl: gimg2
      }
    },
    {
      heading: "Improvement over perfection",
      subheading: "We recommend lessons, topics, and activities to help you reach your goals. You choose the things that get you talking, making moves toward where you want to go.",
      buttonText: "Explore tutors",
      card1: {
        text: "Focus on your unique goals",
        imgUrl: gimg3
      },
      card2: {
        text: "Choose the way you learn",
        imgUrl: gimg4
      }
    },
    {
      heading: "Connect with native english tutors to perfect your English",
      subheading: "We recommend lessons, topics, and activities to help you reach your goals. You choose the things that get you talking, making moves toward where you want to go.",
      buttonText: "Start Learning",
      card1: {
        text: "Focus on your unique goals",
        imgUrl: gimg5
      },
      card2: {
        text: "Choose the way you learn",
        imgUrl: gimg6
      }
    },
    {
      heading:'English for Children',
      subheading:'Start your English journey, progress everyday',
      progressVideo: aiprogress,
    },
    {
      heading:'English for Business and Organizations',
      imageUrl:gimg7
    },
    {
      heading:'Keep track of how you’re improving',
      imageUrl:''
    },
  ]
};

export const priceData = {
  title: "Start today. Learn for life.",
  packages: [
    {
      name: "Small groups",
      description: "Real-world practice in groups",
      actualPrice: "$10/mo",
      discountedPrice: "$9",
      offers: [
        "Work with a tutor and 1-2 students",
        "Meet learners from around the world",
        "Structured discussions for all levels",
        "For adults 21+"
      ]
    },
    {
      name: "Private+",
      description: "Full access to private and group lessons",
      actualPrice: "$52/mo",
      discountedPrice: "$26",
      offers: [
        "Our most comprehensive experience",
        "Take 100% private lessons or try groups too",
        "Rewatch your lesson videos",
        "Get personalized exercises between lessons"
      ]
    },
    // {
    //   name: "Kids",
    //   description: "For kids under 18",
    //   actualPrice: "$119/mo",
    //   discountedPrice: "$61",
    //   offers: [
    //     "1:1 time with specialized tutors",
    //     "Active learning through conversation",
    //     "Beginner to advanced courses included",
    //     "Fun games and activities"
    //   ]
    // }
  ]
};

export const footerData = {
  sections: [
    {
      title: "About",
      links: [
        { name: "Help center", path: "#" },
        { name: "Careers", path: "#" },
        { name: "Press", path: "#" }
      ]
    },
    {
      title: "Join",
      links: [
        { name: "Cambly for kids", path: "/kids" },
        { name: "Cambly for business", path: "/business" },
        { name: "Become a tutor", path: "/featured-tutors" },
        { name: "Become an ambassador", path: "#" }
      ]
    },
    {
      title: "Other",
      links: [
        { name: "Privacy policy", path: "/privacypolicy" },
        { name: "Terms and conditions", path: "/useragreement" }
      ]
    }
  ],
  socialIcons: [
    "fab fa-instagram",
    "fab fa-facebook-square",
    "fab fa-youtube",
    "fab fa-twitter"
  ],
  copyright: "The English Hub Inc. © Copyright 2024. All Rights Reserved."
};