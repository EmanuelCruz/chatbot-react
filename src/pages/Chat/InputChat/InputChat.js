import React from "react";
import "./InputChat.css";

const InputChat = ({ chat, msg, sendMessage, getMeMessage }) => {
  return (
    <form
      onSubmit={(e) => sendMessage(e)}
      className="chatbot-chat-input-container"
    >
      <input
        type="text"
        disabled={chat.length >= 3 ? true : false}
        onChange={(e) => getMeMessage(e.target.value)}
        placeholder={
          chat.length >= 3 ? "Ya no podes escribir." : "Escribí tu nombre"
        }
        value={msg.msg}
      />
      <button
        type="submit"
        disabled={msg.msg === undefined || msg.msg === "" ? true : false}
        className={
          msg.msg === undefined || msg.msg === ""
            ? "btn-send-disabled"
            : "btn-send-enabled"
        }
      />
    </form>
  );
};

export default InputChat;
