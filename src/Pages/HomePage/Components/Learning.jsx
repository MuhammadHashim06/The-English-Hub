import { NavLink } from 'react-router-dom'
import './Learning.css'
export default function Learning() {
  return (
    <div className='learning'>
        <h1>Start the Conversation</h1>
        <div className='startbuttons' >
        <button>Get Started</button>
        <button>Explore Plans</button>
        </div>
        <p>Already have an account? <NavLink> Log in </NavLink> </p>
    </div>
  )
}
