import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Line from "../../../assets/Line 1.png";
import "./registration_2_style.css";
import { Set_email, Set_phone_number } from "../../../redux/action/action";

function Registration_2() {
  let history = useHistory();
  let dispatch = useDispatch();
  const [email, set_email] = useState("");
  const [email_error, set_email_error] = useState({});
  const [phone_error, set_phone_error] = useState({});
  const [number_value, set_number_value] = useState("");
  const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let myPhoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;

  let reduxEmail = useSelector((state) => state.email);
  let reduxPhoneNumber = useSelector((state) => state.phone_number);
  useEffect(() => {
    if (reduxEmail !== undefined && reduxPhoneNumber !== undefined) {
      set_email(reduxEmail);
      set_number_value(reduxPhoneNumber);
    }
  }, [reduxEmail, reduxPhoneNumber]);

  const prev_stepp = () => {
    history.push("/Registrationform/1");
  };

  const cont_stepp = () => {
    if (re.test(String(email).toLowerCase())) {
      set_email_error({
        text: "",
        border: "",
      });
      if (
        myPhoneRegex.test(number_value) &&
        re.test(String(email).toLowerCase())
      ) {
        dispatch(Set_email(email));
        dispatch(Set_phone_number(number_value));
        history.push("/Registrationform/Done/");
      }
    } else {
      set_email_error({
        text: "Please Enter valid email address",
        border: "1px solid #FF0A0A",
      });
    }

    if (myPhoneRegex.test(number_value)) {
      set_phone_error({
        text: "",
      });
    } else {
      set_phone_error({
        text: "Enter Valid Contact number",
      });
    }
    console.log(
      myPhoneRegex.test(number_value),
      re.test(String(email).toLowerCase())
    );
  };
  return (
    <div className="contanier_reg2">
      <div className="title_contenier">
        <p className="title_r">
          Information <img src={Line} alt="Loading" />
        </p>
        <p className="text_county">Emile Addres</p>
      </div>
      <div className="inputs_reg2">
        <input
          type="text"
          style={{ border: email_error.border }}
          placeholder="Email..."
          value={email}
          onChange={(e) => set_email(e.target.value)}
          className="email"
        />
      </div>
      <p className="error_email">{email_error.text}</p>
      <div className="inputs_number_country_reg2">
        <p className="code">
          Code <span className="code_country">Country</span>
        </p>
        <div>
          <select className="select_county_code">
            <option value="0">USA +1</option>
            <option value="1">Armenia +374</option>
            <option value="2">Russia +7</option>
          </select>
          <input
            type="text"
            placeholder="phone number"
            className="phone_number"
            value={number_value}
            onChange={(e) => set_number_value(e.target.value)}
          />
        </div>
      </div>
      <p className="error_email">{phone_error.text}</p>
      <div className="btns_reg2">
        <button onClick={prev_stepp} className="prev_reg2">
          Previous
        </button>
        <button onClick={cont_stepp} className="cont_reg2">
          Continue
        </button>
      </div>
    </div>
  );
}

export default Registration_2;
