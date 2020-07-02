import React from "react";
import Bot from "./components/Bot/Bot";
import "./Home.css";
import Pulse from "react-reveal/Pulse";
import Bounce from "react-reveal/Bounce";

const Home = ({ history }) => {
  return (
    <div className="home-bot-container">
      <div className="home-bot-content">
        <Bounce top>
          <Bot cat history={history} />
        </Bounce>
        <div className="home-bot-greeting">
          <Pulse forever={true}>
            <h1 className="titulo">¡¡Buenos Días!!</h1>
          </Pulse>
          <Pulse forever={true}>
            <label className="subtitulo">Presióname para saber más.</label>
          </Pulse>
        </div>
      </div>
    </div>
  );
};

export default Home;
