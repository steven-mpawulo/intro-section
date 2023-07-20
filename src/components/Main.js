import React from 'react'
import Databiz from '../images/client-databiz.svg'
import Audiophile from '../images/client-audiophile.svg'
import Meet from '../images/client-meet.svg'
import Maker from '../images/client-maker.svg'
import Hero from '../images/image-hero-desktop.png'
<<<<<<< HEAD
import '../styles/main.css'
=======
>>>>>>> ccd0653250b51b16a173d49db48ff94efbff5031

const Main = () => {
  return (
    <main>
<<<<<<< HEAD
        <div className="major-container">
            <div className="first-container">
                <p className='first-text'>Make <br />Remote work </p>
=======
        <div className="main-container">
            <div className="first-container">
                <p>Make</p>
                <p>Remote work</p>
>>>>>>> ccd0653250b51b16a173d49db48ff94efbff5031
                <p>Get your team in sync, no matter your location</p>
                <p>Streamline processes, create team rituals, and watch productivity soar.</p>
                <button className='learn-more-button'>Learn more</button>
                <div className="my-images">
                    <img src={Databiz} alt="databiz" />
                    <img src={Audiophile} alt="" />
                    <img src={Meet} alt="" />
                    <img src={Maker} alt="" />
                </div>
            </div>
            <div className="second-container">
<<<<<<< HEAD
                <img src={Hero} alt="Hero" className='hero'/>
=======
                <img src={Hero} alt="" />
>>>>>>> ccd0653250b51b16a173d49db48ff94efbff5031
            </div>
        </div>
    </main>
  )
}

export default Main