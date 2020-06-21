import React from "react";
import Lottie from "react-lottie";
import "./Bot.css";
import animationBot from "./bot-sunny.json";

const Cat = ({ history }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationBot,
  };

  function handleonClick() {
    history.push("/chat");
  }

  return (
    <div onClick={handleonClick} className="bot-container">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Cat;
