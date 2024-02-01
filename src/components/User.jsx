import React from "react";
import "./User.css";

const User = ({ user }) => {
  return (
    <div className="user-card">
      <div>
        <span>UserId: {user.id}</span>
      </div>
      <div>
        <span>Name: {user.name}</span>
      </div>
      <div>
        <span>UserName : {user.username}</span>
      </div>
      <div>
        <span>Email : {user.email}</span>
      </div>
      <div>
        <div>
          <span> Street: {user.address.street}</span>
        </div>
        <div>
          <span> City: {user.address.city}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
