import "./HeroSection.css";
import heroback from "../../../Images/resourceimage.png";
import resimg1 from "../../../Images/res1.png";
import resimg2 from "../../../Images/res2.png";
import resimg3 from "../../../Images/res3.png";
import resimg4 from "../../../Images/res4.png";
import resimg5 from "../../../Images/res5.png";
import resimg6 from "../../../Images/res6.png";

export default function HeroSection() {
  const resources = [
    {
      imgurl: resimg1,
      heading: "Discover your speaking level",
      subheading: "Answer questions out loud and get feedback along the way.",
    },
    {
      imgurl: resimg2,
      heading: "Learn new vocabulary",
      subheading: "Check how well you know words and their meanings.",
    },
    {
      imgurl: resimg3,
      heading: "Improve your grammar",
      subheading:
        "Challenge yourself with grammar rules for whatever level youre trying to reach",
    },
    {
      imgurl: resimg4,
      heading: "Practice pronunciation",
      subheading:
        "Learn which sounds you need to focus on to speak with confidence.",
    },
    {
      imgurl: resimg5,
      heading: "Read the news",
      subheading:
        "Pick an article, choose your level, and practice English one headline at a time.",
    },
    {
      imgurl: resimg6,
      heading: "Practice speaking on your own",
      subheading:
        "Role play a scene or talk about a topic, all at your own pace.",
    },
  ];
  return (
    <div className="resourcehero">
      <div className="rhero">
        <img src={heroback} alt="" />
        <div className="rherobox">
          <div className="rherohead">
            <h1>Try our free learning activities</h1>
          </div>
          <div className="rherocontent">
            <p>
              Get a taste of Cambly with our most popular tools. Unlock them all
              when you sign up—no subscription required.
            </p>
            <button>Sign up to access</button>
          </div>
        </div>
      </div>

      <div className="resourceslist">
        {resources.map((resource, key) => (
          <div className="resourcecard" key={key}>
            <div className="cardimg">
              <img src={resource.imgurl} alt="" />
            </div>
            <div className="cardbody">
              <h1>{resource.heading}</h1>
              <p>{resource.subheading}</p>
            </div>
          </div>
        ))}
        {/* <div className="resourcecard">
          <div className="cardimg">
            <img src="" alt="" />
          </div>
          <div className="cardbody"></div>
        </div> */}
      </div>
    </div>
  );
}
