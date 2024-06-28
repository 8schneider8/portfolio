import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <div className='Navbar'>
        <p className="name">Nguyen Huong Giang</p>
        <ul className="nav-menu">
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default navbar