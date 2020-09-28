import React from "react";
import { useHistory } from "react-router-dom";
import "./done_style.css";
import Email_Send_Img from "../../../assets/mail 1.png";

function Done() {
  let history = useHistory();
  const stepp_4 = () => {
    history.push("/Registrationform/Verfication");
  };
  return (
    <div>
      <p className="done">Done</p>
      <p className="its_done">Its Done</p>
      <p className="title">
        Form is completed! <span>Please find your entry soon.</span>
      </p>
      <div className="email_done">
        <img className="email_img" src={Email_Send_Img} alt="loading" />
        <p className="thx">Thank You!</p>
      </div>
      <div className="btn">
        <button onClick={stepp_4} className="stepp_4">
          Continue
        </button>
      </div>
    </div>
  );
}

export default Done;
