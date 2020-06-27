import React from "react";
import "./InputChat.css";

const InputChat = () => {
  return (
    <form className="chatbot-chat-input-container">
      <input placeholder="Escribi tu nombre" type="text" />
      <button type="submit" />
    </form>
  );
};

export default InputChat;
