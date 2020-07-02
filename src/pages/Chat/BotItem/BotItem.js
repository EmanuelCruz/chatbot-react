import React from "react";
import "./BotItem.css";
import botAvatar from "../../../assets/imagenes/sunny.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const BotItem = ({ text }) => {
  return (
    <div className="bot-item-container">
      <Zoom>
        <img src={botAvatar} alt="bot-avatar"></img>
      </Zoom>
      <div className="bot-item-messages">
        {text.map((t, index) => (
          <Fade left>
            <label key={index}>{t}</label>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default BotItem;
