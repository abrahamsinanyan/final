import React, { useEffect, useState } from "react";
import Line from "../../../assets/Line 1.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./registration_3_style.css";
import { Set_option_value } from "../../../redux/action/action";

function Registration_3() {
  let dispatch = useDispatch();
  const [optivon_value, set_option_value] = useState("Daily");
  let history = useHistory();
  useEffect(() => {

    dispatch(Set_option_value(optivon_value));

  }, [dispatch, optivon_value]);
  const prev_click = () => {
    history.push("/Registrationform/Verfication");
  };
  const conti_click = () => {
    history.push("/Registrationform/4");
  };
  return (
    <div className="colm_reg3">
      <div className="contener_reg3">
        <div className="title_contenier_reg3">
          <div className="row">
            <p className="title__reg3">
              Select the Duration <img src={Line} alt="Loading" />
            </p>
          </div>
        </div>
        <div className="select_reg3">
          <select
            onChange={(e) => {
              set_option_value(e.target.value);
            }}
          >
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
          <p>
            Please select one one from these to check your cyccle of the
            recurecnce.
          </p>
          <a className="link_reg3" href="/">
            Questions?
          </a>
        </div>
        <div className="btns_cont_reg3">
          <button onClick={prev_click} className="prev_reg3">
            Previous
          </button>
          <button onClick={conti_click} className="cont_reg3">
            Continue
          </button>
        </div>
      </div>
      <div className="union">
        <div className="contanier_union">
          <div className="header_union">
            <p>{optivon_value}</p>
          </div>
          <div className="list_cont">
            <div className="list">
              <ul>
                <li>Water:</li>
                <li>Honey:</li>
                <li>Total:</li>
              </ul>
            </div>
            <div className="list">
              <ul>
                <li>1L</li>
                <li>200ml</li>
                <li>1.2L</li>
              </ul>
            </div>
          </div>
          <div className="outer_poligon">
            <div class="inner_poligon"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration_3;
