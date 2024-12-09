// HeroSectionData.js

import conversation from "../../../Images/New Images/A5ECC3E3-8697-49ED-AFFD-EB40449FA223.jpeg";
import feedback from "../../../Images/New Images/b2.jpg";
import individual from "../../../Images/New Images/b3.jpg";
import videoUrl from '../../../Images/New Images/Method.mp4'
import methodimg from '../../../Images/New Images/method.jpg'

export const mainSectionData = {
  main:{
  heading:'The English Hub Methods',
  subheading:'Our method is specifically designed for you to engage in conversation with native English speakers. We understand that traditionally, English is taught through grammar being the first step, but we find that this tends to puts your skills on hold in actually practicing English. That’s why, our friendly native English speaking tutors help you start your first step in speaking English and building your fluency step by step.',
  videoUrl:videoUrl,
  imageUrl:methodimg
},
methoddiv:{
  heading:'Our Methods',
  subheading:'Stuck on what to talk about? We understand. That’s why we have carefully created courses for a range of interests and goals, along with ice breaker activities you can start with. Check out The English Hub courses',
  imageUrl:methodimg,
  buttonText:'See all Cources',
  link:'/courses'
}
}

export const bottomSectionData = [
  {
    title: "Learn through conversations with native speakers",
    description:
      "Our method is specifically designed for you to engage in conversation with native English speakers.",
    image: conversation,
    imageAlt: "Conversation Image",
    extraText:
      "Choose from thousands of tutors with different backgrounds, industries, accents, and more—so you can talk about what really matters to you.",
  },
  {
    title: "Break traditional barriers and learn the effective way",
    description:
      "We understand that traditionally, English is taught through grammar being the first step, but we find that this tends to puts your skills on hold in actually practicing English. That’s why, our friendly native English-speaking tutors help you start your first step in speaking English and building your fluency step by step.",
    image: feedback,
    imageAlt: "Feedback Image",
    extraText:
      "Choose from thousands of tutors with different backgrounds, industries, accents, and more—so you can talk about what really matters to you.",
  },
  {
    title: "A solution for everyone, learn with topics that matter to you",
    description:
      "Stuck on what to talk about? We understand. That’s why we have carefully created courses for a range of interests and goals, along with ice breaker activities you can start with. Check out The English Hub courses.",
    image: individual,
    imageAlt: "Individualized Learning Image",
    extraText:
      "Choose from thousands of tutors with different backgrounds, industries, accents, and more—so you can talk about what really matters to you.",
  },
];
