import React from "react";
import AboutBackground from "../assets/images/registeration1.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "../assets/css/landing.css";
import NavLan from "./Nav_Lan";

const AboutLan = () => {
  return (
    <>
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
      </div>
      <div className="about-section-text-container">
        <h2 className="primary-subheading">About</h2>
        <h1 className="primary-heading">
        Elevate Your Party Events with Event-Craft-Pro
        </h1>
        <p className="primary-text">
        Welcome to EventCraft Pro, where we revolutionize party event management. Through meticulous planning and creative execution, we transform your vision into unforgettable experiences. Whether it's a lively birthday bash, a sophisticated cocktail soirée, or a themed costume extravaganza, our expert team ensures seamless and memorable events. Elevate your parties with EventCraft Pro and leave a lasting impression on your guests.
        </p>
        <p className="primary-text">
        Dedicated to excellence, we go beyond logistics to curate events that reflect your brand's essence. From crafting engaging agendas to incorporating cutting-edge technology, we leave no stone unturned in delivering events that resonate with your audience.
        </p>
        {/* <div className="about-buttons-container">
          <button className="secondary-button">Sign Up</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div> */}
        
      </div>
      
    </div>
    </>
  );
};

export default AboutLan;