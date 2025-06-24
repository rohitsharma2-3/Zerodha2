import React from "react";
import TopComponent from "./TopComponent";

const Menu = () => {
  return (
    <div className="topbar-container border fixed-top bg-white">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points text-danger">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points text-success">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>
    <TopComponent />
    </div>
  );
};

export default Menu;