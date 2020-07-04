import React from "react";
import "./UserItem.css";
import user from "../../../assets/imagenes/user.png";

const UserItem = ({ text }) => {
  return (
    <div className="user-item-container">
      <div className="user-item-messages">
        <label>{text}</label>
      </div>
      <img src={user} alt="woman-user-avatar" />
    </div>
  );
};

export default UserItem;
