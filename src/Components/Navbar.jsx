import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.png';
import './Navbar.css';
import { useEffect, useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="leftnav">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        {/* Drawer for Mobile View */}
        <div className="mobile-menu">
          <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />
          <Drawer
            title="Menu"
            placement="right"
            onClose={closeDrawer}
            visible={isDrawerVisible}
          >
            <NavLink className="nav-link" to={'/method'} onClick={closeDrawer}>
              Method
            </NavLink>
            <NavLink className="nav-link" to={'/featured-tutors'} onClick={closeDrawer}>
              Tutors
            </NavLink>
            <NavLink className="nav-link" to={'/courses'} onClick={closeDrawer}>
              Courses
            </NavLink>
            <NavLink className="nav-link" to={'/resources'} onClick={closeDrawer}>
              Resources
            </NavLink>
            <NavLink className="nav-link" to={'/kids'} onClick={closeDrawer}>
              Kids
            </NavLink>
            <NavLink className="nav-link" to={'/business'} onClick={closeDrawer}>
              Business
            </NavLink>
          </Drawer>
        </div>

        {/* Desktop View Links */}
        <div className="navlinks">
          <NavLink className="nav-link" to={'/method'}>
            Method
          </NavLink>
          <NavLink className="nav-link" to={'/featured-tutors'}>
            Tutors
          </NavLink>
          <NavLink className="nav-link" to={'/courses'}>
            Courses
          </NavLink>
          <NavLink className="nav-link" to={'/resources'}>
            Resources
          </NavLink>
          <NavLink className="nav-link" to={'/kids'}>
            Kids
          </NavLink>
          <NavLink className="nav-link" to={'/business'}>
            Business
          </NavLink>
        </div>
      </div>
      <div className="navbuttons">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
}
