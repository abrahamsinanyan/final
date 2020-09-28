import React from "react";
import Line from "../../../assets/Line 1.png";
import Visa from "../../../assets/visa logo.png";
import Icone_color from "../../../assets/Icon color.png";
import { useSelector } from "react-redux";
import "./registration_4_style.css";

function Registration_4() {
  
  let name = useSelector((state) => state.name);
  let option = useSelector((state) => state.option_value);
  return (
    <div>
      <div className="contan_reg4">
        <div className="title_reg4">
          <p className="title_p_reg4">Method Prefer</p>
          <img src={Line} alt="loading" />
        </div>
        <div className="inputs_reg4">
          <p>Name</p>
          <input value={name} disabled className="name_reg4" />
          <div>
            <p>Número de tarjeta</p>
            <input className="name_reg4" />
            <div className="a">
              <div className="visa_logo">
                <img src={Visa} alt="loading" />
              </div>
            </div>
          </div>
          <div className="inputs_row">
            <div className="padding_input">
              <p>Fecha de expiración</p>
              <input className="name_row_reg4" />
            </div>
            <div>
              <p className="text_line">
                CVV <img src={Icone_color} alt="loading" />
              </p>
              <input className="name_row_reg4" />
            </div>
          </div>
          <p id="quiz">Questions?</p>
        </div>
        <div className="btns_reg4">
          <button className="prev_reg4">Previous</button>
          <button className="cont_prev4">Continue</button>
        </div>
      </div>
      <div className="union">
        <div className="contanier_union">
          <div className="header_union">
            <p>{option}</p>
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

export default Registration_4;
