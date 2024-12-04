// import { NavLink } from "react-router-dom";
// import logo from "../Images/logo.png";
// import "./Navbar.css";
// import { useEffect, useState } from "react";
// import { Drawer, Button } from "antd";
// import { MenuOutlined } from "@ant-design/icons";

// export default function Navbar() {
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

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Drawer handlers
//   const showDrawer = () => {
//     setIsDrawerVisible(true);
//   };

//   const closeDrawer = () => {
//     setIsDrawerVisible(false);
//   };

//   return (
//     <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
//       <div className="leftnav">
//         <div className="logo">
//           <NavLink to="/">
//             <img src={logo} alt="logo" />
//           </NavLink>
//         </div>
//         <div className="navlinks">
//           <NavLink className="nav-link" to={"/method"}>
//             Method
//           </NavLink>
//           {/* <NavLink className="nav-link" to={"/featured-tutors"}>
//             Tutors
//           </NavLink> */}
//           <NavLink className="nav-link" to={"/courses"}>
//             Courses
//           </NavLink>
//           <NavLink className="nav-link" to={"/resources"}>
//             Resources
//           </NavLink>
//           <NavLink className="nav-link" to={"/kids"}>
//             Kids
//           </NavLink>
//           <NavLink className="nav-link" to={"/business"}>
//             Business
//           </NavLink>
//           <NavLink className="nav-link" to={"/tool"}>
//             Smart Transcript tool
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
//               <NavLink
//                 className="nav-link"
//                 to={"/method"}
//                 onClick={closeDrawer}
//               >
//                 Method
//               </NavLink>
//               {/* <NavLink
//                 className="nav-link"
//                 to={"/featured-tutors"}
//                 onClick={closeDrawer}
//               >
//                 Tutors
//               </NavLink> */}
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
//               <NavLink className="nav-link" to={"/kids"} onClick={closeDrawer}>
//                 Kids
//               </NavLink>
//               <NavLink
//                 className="nav-link"
//                 to={"/business"}
//                 onClick={closeDrawer}
//               >
//                 Business
//               </NavLink>
//               <NavLink className="nav-link" to={"/tool"} onClick={closeDrawer}>
//                 Smart Transcript tool
//               </NavLink>
//             </div>
//           </Drawer>
//         </div>
//       </div>
//     </div>
//   );
// }
// src/Components/Navbar.jsx


import { NavLink } from "react-router-dom";
import { navbarData } from "../Pages/HomePage/data/siteData";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export default function Navbar(props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 25);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showDrawer = () => setIsDrawerVisible(true);
  const closeDrawer = () => setIsDrawerVisible(false);
console.log(props);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""} ${props.newclass}`}>
      <div className="leftnav">
        <div className="logo">
          <NavLink to="/">
            <img src={navbarData.logo} alt="logo" />
          </NavLink>
        </div>
        <div className="navlinks">
          {navbarData.links.map((link) => (
            <NavLink 
              key={link.name} 
              className="nav-link" 
              to={link.path}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="rightdiv">
        <div className="navbuttons">
          <NavLink to={'/login'}>
            <button>Login</button>
          </NavLink>
          <NavLink to={'/signup'}>
            <button className="signupbtn">Signup</button>
          </NavLink>
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
              {navbarData.links.map((link) => (
                <NavLink
                  key={link.name}
                  className="nav-link"
                  to={link.path}
                  onClick={closeDrawer}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}