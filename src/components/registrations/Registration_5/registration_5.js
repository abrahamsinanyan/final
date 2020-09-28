import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Line from "../../../assets/Line 1.png";
import "./registration_5_style.css";
function Registration_5() {
  let history = useHistory();
  let name = useSelector((state) => state.name);
  let email = useSelector((state) => state.email);
  let id_4=useSelector((state)=>state.id_4);
  let id_6=useSelector((state)=>state.id_6)
  const prev_reg4 = () => {
    history.push("/Registrationform/4/"+id_4);
  };
  const cont_reg4 = () => {
    history.push("/Registrationform/finall/"+id_6);
  };
  return (
    <div>
      <div className="contan_reg4">
        <div className="title_reg4">
          <p className="title_p_reg4">Just on the Show</p>
          <img src={Line} alt="loading" />
        </div>
        <div className="inputs_reg4">
          <p>Name</p>
          <input value={name} type="text" className="name_reg4" />
          <p>Email</p>
          <input value={email} type="text" className="name_reg4" />
          <p>Password</p>
          <input type="password" className="name_reg4" />
        </div>
        <div id="sty">
          <button onClick={prev_reg4} className="prev_reg4">
            Previous
          </button>
          <button onClick={cont_reg4} className="cont_prev4">
            Complete It!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration_5;
