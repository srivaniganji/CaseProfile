import React from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { CiStethoscope } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { LuHeartPulse } from "react-icons/lu";
import { TbBodyScan } from "react-icons/tb";
import "./Hero.css";
import Doctor from './Doctor.jpeg'

const Hero = () => {
  return (
    <div className="container">
    <div className="hero">
      <div className="hero-card">
        <h1>Miryam.MD</h1>  <hr />
        <div className="doctor-and-buttons">
          <div className="doctor-image">
            <img
              src={Doctor}
              alt="Doctor"
              className="doctor-img"
            />
          </div>
          <div className="buttons">
            <div>
              <h2>
                Hey! Im Miryam,
              </h2>
              <p>
                Your AI Healthcare doctor trained by Human doctors.
              </p>
              <h3>
                How can I help you? <HiOutlineInformationCircle className="icon" />
              </h3></div>
            <button>Diagnose <CiStethoscope className="icon" /></button>
            <button>Talk <MdOutlinePhoneInTalk className="icon" /></button>
            <button>Interpret Scan <TbBodyScan className="icon" /></button>
            <button>Treat <LuHeartPulse className="icon" /></button>
            <button>More...</button>
          </div>
        </div>
        <div className="input-container">
          <AiOutlinePaperClip className="attachment-icon" />
          <input
            type="text"
            placeholder="Type your message..."
            className="input-field"
          />
          <button className="send-button">SEND</button>
        </div>
        <p className="privacy-text"><MdOutlinePrivacyTip className="icon" /> Privacy Guaranteed</p>
      </div>
    </div>
    </div>
  );
};

export default Hero;
