import React from "react";
import "./BotItem.css";
import botAvatar from "../../../assets/imagenes/sunny.png";

const BotItem = ({ text }) => {
  return (
    <div className="bot-item-container">
      <img src={botAvatar} alt="bot-avatar"></img>

      <div className="bot-item-messages">
        {text.map((t, index) => (
          <label key={index}>{t}</label>
        ))}
      </div>
    </div>
  );
};

export default BotItem;
