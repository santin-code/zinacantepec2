import React from "react";
import "./thanks-preference.css";
import "../app.css";

const ThanksPreference1 = ({ image }) => {
  return (
    <div className="preference__container ">
      <div className="container">
        <img src={image} alt="Gracias logo" className="thanks__logo" />
      </div>
    </div>
  );
};

export default ThanksPreference1;
