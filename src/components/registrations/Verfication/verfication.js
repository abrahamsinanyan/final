import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./verfication_style.css";
function Verfication() {
  let history = useHistory();
  const [code, set_code] = useState("");
  const [error_style, set_eror_style] = useState({});
  const verf_click = () => {
    if (code === "123456") {
      history.push("/Registrationform/3");
      set_eror_style({});
    } else {
      set_eror_style({ border: "1px solid #FF0A0A" });
    }
  };
  return (
    <div className="cont_5">
      <p className="verf">Enter Email Verfication</p>
      <p className="pls_enter">Please enter verfication</p>
      <input
        style={{ border: error_style.border }}
        className="input_code"
        placeholder="code"
        value={code}
        onChange={(e) => set_code(e.target.value)}
      />
      <button onClick={verf_click} className="verf_btn">
        Verfication
      </button>
    </div>
  );
}

export default Verfication;
