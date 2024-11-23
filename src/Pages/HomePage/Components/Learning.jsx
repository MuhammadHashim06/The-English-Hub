import { NavLink } from 'react-router-dom'
import './Learning.css'
export default function Learning() {
  return (
    <div className='learning'>
        <h1>Start your journey to improving your English today </h1>
        <div className='startbuttons' >
        <button>Get Started</button>
        <button>Begin now</button>
        </div>
        <p>Already have an account? <NavLink> Log in </NavLink> </p>
    </div>
  )
}
