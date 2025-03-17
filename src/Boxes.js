import React from "react";
import "./Boxes.css";

const Boxes = () => {
  return (
    <div className="container">
      <h1 className="heading">Boxes</h1>
      <div className="box-container">
        <div className="box small-box">Small</div>
        <div className="box medium-box">Medium</div>
        <div className="box large-box">Large</div>
      </div>
    </div>
  );
};

export default Boxes;
