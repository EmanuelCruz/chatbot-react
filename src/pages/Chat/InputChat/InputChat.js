import React from "react";
import "./InputChat.css";

const InputChat = ({ chat, msg, sendMessage, getMeMessage }) => {
  return (
    <form
      onSubmit={(e) => sendMessage(e)}
      className="chatbot-chat-input-container"
    >
      <input
        disabled={chat.length >= 3 ? true : false}
        onChange={(e) => getMeMessage(e.target.value)}
        placeholder={
          chat.length >= 3 ? "Ya no podes escribir." : "Escribí tu nombre"
        }
        value={msg.msg}
        type="text"
      />
      <button type="submit" />
    </form>
  );
};

export default InputChat;
