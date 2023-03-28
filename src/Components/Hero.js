import "./HeroStyle.css"
import React from 'react'
import IntroImage from "../assets/intro-bg.jpg"

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img src={IntroImage} alt="IntroImg" className="intro-image" />
        </div>
    </div>
  )
}

export default Hero