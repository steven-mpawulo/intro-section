import React from 'react'
import Logo from '../images/logo.svg'
import '../styles/header.css'
import ArrowDown from '../images/icon-arrow-down.svg'

const Header = () => {
  return (
    <header>
        <div className="my-header">
        <div className="my-logo">
        <img src={Logo} alt="" />
        </div>
      <div className="my-navigation">
      <nav>
      <ul>
            <li>
              <div className="features-container">
                <p>Features</p>
                <img src={ArrowDown} alt="Arrow down" className='arrow-down'/>

              </div>
            </li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
            
        </ul>
      </nav>
      </div>
        <div className="login-register">
        <a href="#login">Login</a>
        <button className='register'>Register</button>
        </div>
        </div>
        
    </header>
  )
}

export default Header