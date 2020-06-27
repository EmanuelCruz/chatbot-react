import React, { useState } from "react";
import "./Chat.css";
import BotItem from "./BotItem/BotItem";
import UserItem from "./UserItem/UserItem";
import InputChat from "./InputChat/InputChat";

const Chat = () => {
  const [msg, setMsg] = useState({});

  const [chat, setChat] = useState([
    {
      id: 0,
      emmiter: "Cat",
      msg: ["¡Hola!", "¿Como es tu nombre?"],
    },
  ]);

  return (
    <div className="chatbot-chat-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div className="chatbot-chat-container-body">
            {chat.map((message, index) =>
              message.emmiter === "Cat" ? (
                <BotItem text={message.msg} />
              ) : (
                <UserItem text={message.msg} />
              )
            )}
          </div>
          <div className="chatbot-chat-container-input">
            <InputChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
