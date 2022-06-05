import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderPropsInterface } from "../../Interfaces/interfaces";
import "./Header.css";

const Header = ({ text }: HeaderPropsInterface): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1>Finding Falcone !</h1>
      {text === "start mission" && (
        <button className="btn_header" onClick={() => navigate("/mission")}>
          Start Mission
        </button>
      )}
      {text === "history" && (
        <button className="btn_header" onClick={() => navigate("/")}>
          Read History
        </button>
      )}
    </div>
  );
};

export default Header;
