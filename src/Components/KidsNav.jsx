// import { NavLink } from "react-router-dom";
// import logo from "../Images/logo.png";
// import "./TutorNav.css";
// import { useEffect, useState } from "react";
// import { Drawer, Button } from "antd";
// import { MenuOutlined } from "@ant-design/icons";

// export default function KidsNav() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDrawerVisible, setIsDrawerVisible] = useState(false);

//   // Function to handle scroll event
//   const handleScroll = () => {
//     if (window.scrollY > 25) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   // Attach scroll event listener
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const showDrawer = () => {
//     setIsDrawerVisible(true);
//   };

//   const closeDrawer = () => {
//     setIsDrawerVisible(false);
//   };

//   return (
//     <div className={`tutornav ${isScrolled ? "scrolled" : ""}`}>
//       <div className="leftnav">
//         <div className="logo">
//           <NavLink to="/">
//             <img src={logo} alt="logo" />
//           </NavLink>
//         </div>
//         <div className="navlinks">
//           <NavLink className="nav-link" to={"/method"}>
//           Our Methodology
//           </NavLink>
//           <NavLink className="nav-link" to={"/featured-tutors"}>
//             The Tutors
//           </NavLink>
//           <NavLink className="nav-link" to={"/courses"}>
//             Courses
//           </NavLink>
//           <NavLink className="nav-link" to={"/resources"}>
//             Resources
//           </NavLink>
//         </div>
//       </div>
//       <div className="rightdiv">
//         <div className="navbuttons">
//           <NavLink to={"/login"}>
//             <button>Login</button>
//           </NavLink>
//           <NavLink to={"/signup"}>
//             <button className="signupbtn">Signup</button>
//           </NavLink>
//         </div>
//         <div className="mobile-menu">
//           <Button
//             type="text"
//             icon={<MenuOutlined />}
//             onClick={showDrawer}
//             className="drawerbutton"
//           />
//           <Drawer
//             title="Menu"
//             placement="right"
//             onClose={closeDrawer}
//             open={isDrawerVisible}
//           >
//             <div className="mobile-navlinks">
//               <NavLink
//                 className="nav-link"
//                 to={"/method"}
//                 onClick={closeDrawer}
//               >
//                 Our Methodology
//               </NavLink>
//               <NavLink
//                 className="nav-link"
//                 to={"/featured-tutors"}
//                 onClick={closeDrawer}
//               >
//                 The Tutors
//               </NavLink>
//               <NavLink
//                 className="nav-link"
//                 to={"/courses"}
//                 onClick={closeDrawer}
//               >
//                 Courses
//               </NavLink>
//               <NavLink
//                 className="nav-link"
//                 to={"/resources"}
//                 onClick={closeDrawer}
//               >
//                 Resources
//               </NavLink>
//             </div>
//           </Drawer>
//         </div>
//       </div>
//     </div>
//   );
// }


import { NavLink } from "react-router-dom";
import "./TutorNav.css";
import { useEffect, useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import kidsNavData from "../Pages/KidsPage/data/kidsData";

export default function KidsNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 25) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <div className={`tutornav ${isScrolled ? "scrolled" : ""}`}>
      <div className="leftnav">
        <div className="logo">
          <NavLink to="/">
            <img src={kidsNavData.logo} alt="logo" />
          </NavLink>
        </div>
        <div className="navlinks">
          {kidsNavData.navLinks.map((link, index) => (
            <NavLink className="nav-link" to={link.path} key={index}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="rightdiv">
        <div className="navbuttons">
          {kidsNavData.buttons.map((button, index) => (
            <NavLink to={button.path} key={index}>
              <button className={button.className}>{button.label}</button>
            </NavLink>
          ))}
        </div>
        <div className="mobile-menu">
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            className="drawerbutton"
          />
          <Drawer
            title="Menu"
            placement="right"
            onClose={closeDrawer}
            open={isDrawerVisible}
          >
            <div className="mobile-navlinks">
              {kidsNavData.navLinks.map((link, index) => (
                <NavLink
                  className="nav-link"
                  to={link.path}
                  onClick={closeDrawer}
                  key={index}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
