import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut = ({ logout }) => {
  const navigate = useNavigate();

  const action = (e) => {
    e.preventDefault();
    logout();
    navigate("/")
    ;}
  
  

  return (
    <div className="borderNoTop">
      <h2>Log in</h2>
      <form onSubmit={action}>
  
        <input type="submit" value="Log out" className="myButton" />
      </form>
    </div>
  );
};

export default LogOut;