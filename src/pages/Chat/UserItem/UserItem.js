import React from "react";
import "./UserItem.css";
import user from "../../../assets/imagenes/user.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const UserItem = ({ text }) => {
  return (
    <div className="user-item-container">
      <Fade right>
        <div className="user-item-messages">
          <label>{text}</label>
        </div>
      </Fade>
      <Zoom>
        <img src={user} alt="woman-user-avatar" />
      </Zoom>
    </div>
  );
};

export default UserItem;
