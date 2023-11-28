import React from "react";
import { Link } from "react-router-dom";
import {arrow} from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className=" font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className=" neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="" className=" w-4 h-4 object-contain" />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <>
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I am <span className="font-semibold">Argha</span> 👋
        <br />A sotware engineer from India.
      </h1>
    </>
  ),
  2: (
    <>
      <InfoBox 
        text="I am a full stack developer with 2+ years of experience in building web applications."
        link="/about"
        btnText="Know more"
      />
    </>
  ),
  3: (
    <>
      <InfoBox 
        text="I have done many projects in web development using React, Node, Express, MongoDB, MySQL, etc."
        link="/projects"
        btnText="Visit my portfolio"
      />
    </>
  ),
  4: (
    <>
      <InfoBox 
        text="Need a project done? Want to hire me? Want to collaborate? I'm just a few keystrokes away."
        link="/contact"
        btnText="Let's talk"
      />
    </>
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
