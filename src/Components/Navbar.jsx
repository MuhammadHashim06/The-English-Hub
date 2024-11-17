import { NavLink } from 'react-router-dom'
import logo from '../Images/logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'> <NavLink to="/"> <img src={logo} alt='logo' /> </NavLink> </div>
        <div className='navlinks'>
            <NavLink className="nav-link" to={'/method'} >Method</NavLink>
            <NavLink className="nav-link" to={'/featured-tutors'} >Tutors</NavLink>
            <NavLink className="nav-link" to={'/courses'} >Courses</NavLink>
            <NavLink className="nav-link" to={'/resources'} >Resources</NavLink>
            <NavLink className="nav-link" to={'/kids'} >Kids</NavLink>
            <NavLink className="nav-link" to={'/business'} >Business</NavLink>
        </div>
        <div className='navbuttons'>
        <button>Login</button>
        <button>Signup</button>
        </div>
    </div>
  )
}
