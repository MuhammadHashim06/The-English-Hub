import './CourseNavbar.css'

import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import { useEffect, useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export default function CourseNavbar() {
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

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Drawer handlers
  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <div className={`coursenavbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="leftnav">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="navlinks">
        <NavLink className="nav-link" to={"/business"}>
           For Organization          </NavLink>
        <NavLink className="nav-link" to={"/kids"}>
          For Kids
          </NavLink>
          <NavLink className="nav-link" to={"/courses"}>
           Our Courses
          </NavLink>
        </div>
      </div>
      <div className="rightdiv">
        <div className="navbuttons">
          <NavLink to={'/login'}>
            <button>Login</button>
          </NavLink>
          <NavLink to={'/signup'}>
            <button className="signupbtn" >Signup</button>
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
            <NavLink className="nav-link" to={"/business"} onClick={closeDrawer} >
           For Organization          </NavLink>
        <NavLink className="nav-link" to={"/kids"} onClick={closeDrawer} >
          For Kids
          </NavLink>
          <NavLink className="nav-link" to={"/courses"} onClick={closeDrawer} >
           Our Courses
          </NavLink>
              {/* <NavLink
                className="nav-link"
                to={"/method"}
                onClick={closeDrawer}
              >
                Method
              </NavLink>
              <NavLink
                className="nav-link"
                to={"/featured-tutors"}
                onClick={closeDrawer}
              >
                Tutors
              </NavLink>
              <NavLink
                className="nav-link"
                to={"/courses"}
                onClick={closeDrawer}
              >
                Courses
              </NavLink>
              <NavLink
                className="nav-link"
                to={"/resources"}
                onClick={closeDrawer}
              >
                Resources
              </NavLink>
              <NavLink className="nav-link" to={"/kids"} onClick={closeDrawer}>
                Kids
              </NavLink>
              <NavLink
                className="nav-link"
                to={"/business"}
                onClick={closeDrawer}
              >
                Business
              </NavLink>
              <NavLink className="nav-link" to={"/tool"} onClick={closeDrawer}>
                Smart Transcript tool
              </NavLink> */}
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
