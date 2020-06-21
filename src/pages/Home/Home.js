import React from "react";
import Bot from "./components/Bot/Bot";
import "./Home.css";
import Pulse from "react-reveal/Pulse";

const Home = ({ history }) => {
  return (
    <div className="home-bot-container">
      <div className="home-bot-content">
        <Bot cat history={history} />
        <div className="home-bot-greeting">
          <Pulse>
            <h1 className="titulo">¡¡Buenos Días!!</h1>
          </Pulse>
          <Pulse>
            <label className="subtitulo">Presióname para saber más.</label>
          </Pulse>
        </div>
      </div>
    </div>
  );
};

export default Home;
