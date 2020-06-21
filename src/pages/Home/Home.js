import React from "react";
import Bot from "./components/Bot/Bot";

const Home = ({ history }) => {
  return (
    <div>
      <Bot cat history={history} />
      <label>¡¡BUENOS DIAS!!</label>
    </div>
  );
};

export default Home;
