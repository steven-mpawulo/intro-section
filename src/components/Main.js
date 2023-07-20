import React from 'react'
import Databiz from '../images/client-databiz.svg'
import Audiophile from '../images/client-audiophile.svg'
import Meet from '../images/client-meet.svg'
import Maker from '../images/client-maker.svg'
import Hero from '../images/image-hero-desktop.png'

const Main = () => {
  return (
    <main>
        <div className="main-container">
            <div className="first-container">
                <p>Make</p>
                <p>Remote work</p>
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
                <img src={Hero} alt="" />
            </div>
        </div>
    </main>
  )
}

export default Main