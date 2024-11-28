// import './CourseNavbar.css'
// import { NavLink } from "react-router-dom";
// import logo from "../Images/logo.png";
// import { useEffect, useState } from "react";
// import { Drawer, Button } from "antd";
// import { MenuOutlined } from "@ant-design/icons";

// export default function CourseNavbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDrawerVisible, setIsDrawerVisible] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY > 25) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

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
//     <div className={`coursenavbar ${isScrolled ? "scrolled" : ""}`}>
//       <div className="leftnav">
//         <div className="logo">
//           <NavLink to="/">
//             <img src={logo} alt="logo" />
//           </NavLink>
//         </div>
//         <div className="navlinks">
//         <NavLink className="nav-link" to={"/business"}>
//            For Organization          </NavLink>
//         <NavLink className="nav-link" to={"/kids"}>
//           For Kids
//           </NavLink>
//           <NavLink className="nav-link" to={"/courses"}>
//            Our Courses
//           </NavLink>
//         </div>
//       </div>
//       <div className="rightdiv">
//         <div className="navbuttons">
//           <NavLink to={'/login'}>
//             <button>Login</button>
//           </NavLink>
//           <NavLink to={'/signup'}>
//             <button className="signupbtn" >Signup</button>
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
//             visible={isDrawerVisible}
//           >
//             <div className="mobile-navlinks">
//             <NavLink className="nav-link" to={"/business"} onClick={closeDrawer} >
//            For Organization          </NavLink>
//         <NavLink className="nav-link" to={"/kids"} onClick={closeDrawer} >
//           For Kids
//           </NavLink>
//           <NavLink className="nav-link" to={"/courses"} onClick={closeDrawer} >
//            Our Courses
//           </NavLink>
//             </div>
//           </Drawer>
//         </div>
//       </div>
//     </div>
//   );
// }
import "./CourseNavbar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../Images/logo.png";
import { navLinks, authButtons } from "../Pages/CoursesPage/data/courseData";

export default function CourseNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 25);
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Drawer handlers
  const showDrawer = () => setIsDrawerVisible(true);
  const closeDrawer = () => setIsDrawerVisible(false);

  return (
    <div className={`coursenavbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Left Section */}
      <div className="leftnav">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="navlinks">
          {navLinks.map((link, index) => (
            <NavLink key={index} className="nav-link" to={link.path}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="rightdiv">
        <div className="navbuttons">
          {authButtons.map((button, index) => (
            <NavLink key={index} to={button.path}>
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
            visible={isDrawerVisible}
          >
            <div className="mobile-navlinks">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  className="nav-link"
                  to={link.path}
                  onClick={closeDrawer}
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
