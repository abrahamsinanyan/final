import React from "react";
import Ilu from "../../../assets/ilu2 1.png";
function Final() {
  return (
    <div>
      <p className="done">Done Yeah</p>
      <p className="its_done">You’re done here!</p>
      <div className="email_done">
        <img className="email_img" src={Ilu} alt="loading" />
      </div>
    </div>
  );
}

export default Final;
