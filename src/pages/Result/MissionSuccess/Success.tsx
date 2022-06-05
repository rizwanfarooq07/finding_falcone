import React from "react";
import { useNavigate } from "react-router-dom";
import falcone from "../../../assets/falcone.png";
import falcone1 from "../../../assets/mf1.png";
import { SuccessPropsInterface } from "../../../Interfaces/interfaces";
import "./Success.css";

const Success = ({
  result,
  totalTimeTaken,
}: SuccessPropsInterface): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="successContainer">
      <h1 className="success_heading">
        Congratulations! You have successfully found the Queen of Falicornia
      </h1>
      <div className="detials_container">
        <img
          src={falcone1}
          alt="falcone"
          height={300}
          style={{ opacity: 0.8 }}
        />
        <div className="success_details">
          <p>Found Falcone on {result.planet_name}</p>
          <p>Time taken: {totalTimeTaken}</p>
        </div>
      </div>
      <div className="btn_container">
        <button className="success_btn" onClick={() => navigate("/mission")}>
          Try Again !
        </button>
        <button className="success_btn" onClick={() => navigate("/")}>
          Read History
        </button>
      </div>
    </div>
  );
};

export default Success;
