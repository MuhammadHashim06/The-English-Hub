import "./TheTutor.css";
import tprofile1 from "../../../Images/t1.png"
import tprofile2 from "../../../Images/t2.png"
import tprofile3 from "../../../Images/t3.png"
import tprofile4 from "../../../Images/t4.png"
import {  NavLink } from "react-router-dom";
export default function TheTutor() {

    const TheTutors=[{
        profileurl:tprofile1,
        name:'Anna',
        rating:'5',
        country:'United States'
    },{
        profileurl:tprofile2,
        name:'Renee',
        rating:'5',
        country:'United States'
    },{
        profileurl:tprofile3,
        name:'Rusell',
        rating:'5',
        country:'United States'
    },{
        profileurl:tprofile4,
        name:'Trevor',
        rating:'5',
        country:'United States'
    },]

  return (
    <div className="thetutor">
      <div className="tutorsection">
        <div className="tutorcontent">
          <h1>The Tutor</h1>
          <p>
            100% of tutors on our platform are native English speakers. Many
            hold graduate degrees from top universities in the US, UK, and
            Canada. We are continually impressed by these tutors, and we think
            you will be too!
          </p>
        </div>

        <div className="tutorlist">
            {
                TheTutors.map((tutor,key)=>(
                    <div className="tutorcard"key={key} >
                    <div className="tutorimg">
                      <img src={tutor.profileurl} alt="" />
                    </div>
                    <div className="tutordetail">
                        <div className="uppertext">
                        <h1>{tutor.name}</h1>
                        <div className="rating"><i className="fas fa-star"></i>{tutor.rating}</div>
                        </div>
                       
                        <p>{tutor.country}</p>
                    </div>
                  </div>
                ))
            }
        </div>

      </div>
      <NavLink to={"/featured-tutors"}>
          <button>Explore all Tutor</button>
        </NavLink>
    </div>
  );
}
