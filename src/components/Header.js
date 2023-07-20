import React from 'react'
import Logo from '../images/logo.svg'

const Header = () => {
  return (
    <header>
        <div className="my-header">
        <img src={Logo} alt="" />
        <ul>
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
            
        </ul>
        <a href="">Login</a>
        </div>
        <button className='register'>Register</button>
        
    </header>
  )
}

export default Header