import React, { useState, useEffect } from "react";
import "./Chat.css";
import BotItem from "./BotItem/BotItem";
import UserItem from "./UserItem/UserItem";
import InputChat from "./InputChat/InputChat";
import Select from "./Select/Select";
import { doing, aboutMe } from "../../data/Actions";

const Chat = () => {
  let idCounter = 0;

  const [msg, setMsg] = useState({});

  const [openSelect, setOpenSelect] = useState(false);

  const [chat, setChat] = useState([
    {
      id: 0,
      emitter: "Cat",
      msg: ["¡Hola!", "¿Como es tu nombre?"],
    },
  ]);

  function firstResponse(name) {
    let newChat = {
      id: idCounter + 2,
      emitter: "Cat",
      msg: [
        `¡Mucho gusto ${name}!`,
        "Mi nombre es Sunny, soy un bot aun en desarrollo",
        "Eso quiere decir que aún no estoy preparado para tus preguntas especificas",
        "¡Lo que no significa que no podamos interactuar!",
        "Haceme una pregunta de la lista, y con gusto respondo.",
      ],
    };
    if (newChat) {
      setChat([...chat, newChat]);
    }
  }

  useEffect(() => {
    if (chat.length === 2) {
      setTimeout(() => {
        firstResponse(msg.msg);
      }, 500);
      setMsg({ ...msg, msg: "" });
      setTimeout(() => setOpenSelect(true), 600);
    }
  }, [chat]);

  function getMeMessage(value) {
    idCounter = idCounter + 1;
    setMsg({
      id: idCounter,
      emitter: "User",
      msg: value,
    });
  }

  function sendMessage(e) {
    e.preventDefault();
    setChat([...chat, msg]);
  }

  let options = [
    {
      id: "What are you doing?",
      text: "¿Que hacés?",
    },
    // {
    //   id: "Send me the current temperature",
    //   text: "Mandame la temperatura actual",
    // },
    {
      id: "Tell me about you",
      text: "Contame sobre vos",
    },
  ];

  const [interactions, setInteractions] = useState([]);

  function handleSelectedOptions(value) {
    let result;
    switch (value) {
      case "What are you doing?":
        result = doing[Math.floor(Math.random() * doing.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;

      case "Tell me about you":
        result = aboutMe[Math.floor(Math.random() * doing.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;
      default:
        console.log("No hay valores");
        break;
    }
  }

  return (
    <div className="chatbot-chat-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div className="chatbot-chat-container-body">
            {chat.map((message, index) =>
              message.emitter === "Cat" ? (
                <BotItem key={index} text={message.msg} />
              ) : (
                <UserItem key={index} text={message.msg} />
              )
            )}

            {openSelect && (
              <Select
                handleSelectedOptions={handleSelectedOptions}
                options={options}
              />
            )}
            {interactions.length > 0 &&
              interactions.map((interaction, index) => (
                <>
                  <BotItem key={index} text={interaction} />
                  <Select
                    handleSelectedOptions={handleSelectedOptions}
                    options={options}
                  />
                </>
              ))}
          </div>
          <div className="chatbot-chat-container-input">
            <InputChat
              chat={chat}
              msg={msg}
              getMeMessage={getMeMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
