import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./stepper_style.css";

function Stepper() {
  let location = useLocation();
  const [stepper_length, set_stteper_length] = useState([
    { id: 1, className: "stepp_counter1", width: "54px" },
    { id: 2, className: "stepp_counter2", width: "117px" },
  ]);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        return set_stteper_length([
          { id: 1, className: "stepp_counter1", width: "61px" },
        ]);
      case "/Registrationform/2":
        return set_stteper_length([
          {
            id: 1,
            className: "stepp_counter1",
            width: "54px",
            border: "none",
            marginTtop: "-5px",
            title: "TITEL",
            MarginrigthP:'0px'
          },
          {
            id: 2,
            className: "stepp_counter2",
            width: "117px",
            marginRight: " 369px",
            MarginrigthP:'-12px'
          },
        ]);
      case "/Registrationform/3":
        return set_stteper_length([
          {
            id: 1,
            className: "stepp_counter1",
            width: "54px",
            border: "none",
            marginTtop: "-5px",
            title: "TITEL",
            MarginrigthP:'0px'
          },
          {
            id: 2,
            className: "stepp_counter2",
            width: "117px",
            marginRight: " 369px",
            border: "none",
            title: "CONTACT",
            MarginrigthP:'-12px'
          },
          {
            id: 3,
            className: "stepp_counter2",
            width: "117px",
            marginRight: "138px",
            MarginrigthP:'-12px'
          },
        ]);
      case "/Registrationform/4":
        return set_stteper_length([
          {
            id: 1,
            className: "stepp_counter1",
            width: "54px",
            border: "none",
            marginTtop: "-5px",
            title: "TITLE",
            MarginrigthP:'0px'
          },
          {
            id: 2,
            className: "stepp_counter2",
            width: "117px",
            marginRight: " 369px",
            border: "none",
            title: "CONTACT",
            MarginrigthP:'-12px'
          },
          {
            id: 3,
            className: "stepp_counter2",
            width: "117px",
            marginRight: "138px",
            border: "none",
            title: "DURATION",
            MarginrigthP:'-12px'
          },
          {
            id: 4,
            className: "stepp_counter2",
            width: "117px",
            marginRight: '-93px',
            MarginrigthP:'-6px'
          },
        ]);
      case "/Registrationform/5":
        return set_stteper_length([
          {
            id: 1,
            className: "stepp_counter1",
            width: "54px",
            border: "none",
            marginTtop: "-5px",
            title: "TITLE",
            MarginrigthP:'0px'
          },
          {
            id: 2,
            className: "stepp_counter2",
            width: "117px",
            marginRight: " 369px",
            border: "none",
            title: "CONTACT",
            MarginrigthP:'-12px'
          },
          {
            id: 3,
            className: "stepp_counter2",
            width: "117px",
            marginRight: "138px",
            border: "none",
            title: "DURATION",
            MarginrigthP:'-12px'
          },
          {
            id: 4,
            className: "stepp_counter2",
            width: "117px",
            marginRight: "-93px",
            border: "none",
            title: "PREFER",
            MarginrigthP:'-6px'
          },
          {
            id: 5,
            className: "stepp_counter2",
            width: "97px",
            marginRight: "-303px",
          },
        ]);
      default:
    }
  }, [location.pathname]);

  return (
    <div className="contanier">
      <div className="text_content">
        <p className="regitration_text">Registration Form</p>
        <p className="title">This is Example Registratino form</p>
      </div>
      <div className="stepper_line">
        {stepper_length.map((el, index) => {
          console.log(el.className);
          return (
            <div
              ket={index}
              style={{
                width: el.width,
                marginRight: el.marginRight,
              }}
              className={el.className}
            >
              <span style={{ border: el.border }} className="count">
                {el.id}
              </span>
              <p style={{marginRight: el.MarginrigthP}} className="stepp_title" key={index}>
                {el.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stepper;
