import React from "react";
import Lottie from "react-lottie";
import "./Bot.css";
import animationBot from "./bot-sunny.json";

const Cat = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationBot,
  };

  return (
    <div className="bot-container">
      <Lottie options={defaultOptions} />
      <label>¡Buenos dias!</label>
    </div>
  );
};

export default Cat;
