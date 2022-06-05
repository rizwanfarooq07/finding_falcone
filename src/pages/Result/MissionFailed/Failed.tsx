import React from "react";
import { useNavigate } from "react-router-dom";
import crashed from "../../../assets/crashed.png";
import "./Failed.css";

const Failed = ({ totalTimeTaken }: any): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="failedContainer">
      <h1 className="failed_heading">
        Oops..! You were unable to find the Queen of Falicornia
      </h1>
      <div className="detials_container">
        <img
          className="img"
          src={crashed}
          alt="falcone"
          height={300}
          style={{ opacity: 0.8 }}
        />
        <div className="failed_details">
          <p>Mission Failed</p>
          <p>Time taken: {totalTimeTaken}</p>
        </div>
      </div>
      <div className="btn_container">
        <button className="failed_btn" onClick={() => navigate("/mission")}>
          Try Again !
        </button>
        <button className="failed_btn" onClick={() => navigate("/")}>
          Read History
        </button>
      </div>
    </div>
  );
};

export default Failed;
