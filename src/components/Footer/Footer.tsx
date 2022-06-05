import { padding } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <h3
        style={{
          backgroundColor: "black",
          opacity: 0.5,
          color: "white",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <span
          style={{ color: "cyan", fontWeight: "normal", marginRight: "10px" }}
        >
          &#169;
        </span>{" "}
        Rizwan Farooqui 2022{" "}
        <span
          style={{ color: "cyan", fontWeight: "normal", marginLeft: "10px" }}
        >
          Finding Queen
        </span>
      </h3>
    </div>
  );
};

export default Footer;
