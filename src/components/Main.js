import React from 'react'
import Databiz from '../images/client-databiz.svg'
import Audiophile from '../images/client-audiophile.svg'
import Meet from '../images/client-meet.svg'
import Maker from '../images/client-maker.svg'
import Hero from '../images/image-hero-desktop.png'
import '../styles/main.css'

const Main = () => {
  return (
    <main>
        <div className="major-container">
            <div className="first-container">
                <p className='first-text'>Make <br />Remote work </p>
                <p className='second-text'>Get your team in sync, no matter your location</p>
                <p className='third-text'>Streamline processes, create team rituals,and watch productivity soar.</p>
                <button className='learn-more-button'>Learn more</button>
                <div className="my-images">
                    <img src={Databiz} alt="databiz" />
                    <img src={Audiophile} alt="" />
                    <img src={Meet} alt="" />
                    <img src={Maker} alt="" />
                </div>
            </div>
            <div className="second-container">
                <img src={Hero} alt="Hero" className='hero'/>
            </div>
        </div>
    </main>
  )
}

export default Main