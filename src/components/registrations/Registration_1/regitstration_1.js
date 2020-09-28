import React, { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";
import Line from "../../../assets/Line 1.png";
import { useDispatch, useSelector } from "react-redux";
import { Set_name, Set_number } from "../../../redux/action/action";
import "../Registration_1/registration__style.css";

function Registration_1() {
  let history = useHistory();
  let valid_number = "111111111";
  let dispatch = useDispatch();
  const [numberValue, setNumberValue] = useState("");
  const [valid_value, set_valid_number] = useState(false);
  const [input_border, set_input_border] = useState(null);
  const [incorrect_input_message, set_incorrect_input_message] = useState("");
  const [name, set_name] = useState("");
  let reduxName = useSelector((state) => state.name);
  let reduxNumber = useSelector((state) => state.number);



  useEffect(() => {
    if (reduxName !== undefined && reduxNumber !== undefined) {
      set_valid_number(true);
      set_name(reduxName);
      setNumberValue(reduxNumber);
    }
  }, [reduxName, reduxNumber]);

  const next_stepp = () => {
    if (valid_number === numberValue) {
      set_valid_number(true);
      set_input_border("1px solid #E5E5E5");
      set_incorrect_input_message("");
      dispatch(Set_number(valid_number));
    } else {
      set_input_border("1px solid #FF0A0A");
      set_incorrect_input_message("Incorrect input message");
    }
    if (valid_number === numberValue && name.length >= 4) {
      dispatch(Set_name(name));
      history.push("/Registrationform/2");
    }
  };

  const prev_stepp = () => {
    set_valid_number(false);
    set_input_border("border: 1px solid #E5E5E5;");
  };
  return (
    <div>
      <div className="title_contenier">
        <p className="title_r">
          Title of the Form <img src={Line} alt="Loading" />
        </p>
        <p className="text_county">Country</p>
      </div>
      <div className="selects">
        <select>
          <option value="0">Cédula Física</option>
          <option value="1">Afghanistan</option>
          <option value="2">Armenia</option>
          <option value="3">Barbados</option>
        </select>
      </div>
      <div className="input_type">
        <div className="title_contenier">
          <p className="text_county">Number</p>
        </div>
        <input
          placeholder="0-0000-0000"
          value={numberValue}
          style={{ border: input_border }}
          onChange={(e) => setNumberValue(e.target.value)}
        />
        <div className="title_contenier">
          <p className="incorrect_message">{incorrect_input_message}</p>
        </div>
      </div>
      {valid_value ? (
        <div>
          <div className="input_type">
            <div className="title_contenier">
              <p className="text_county">Name</p>
            </div>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => set_name(e.target.value)}
            />
            <div className="title_contenier">
              <p className="incorrect_message">{incorrect_input_message}</p>
            </div>
          </div>
        </div>
      ) : null}
      <div className="prev_next_btn">
        {valid_value ? (
          <>
            {" "}
            <button onClick={prev_stepp} className="prev_spepp">
              {" "}
              Previues{" "}
            </button>
            <button onClick={next_stepp} className="continue">
              Continue
            </button>{" "}
          </>
        ) : (
          <button onClick={next_stepp} id="valid_false" className="continue">
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

export default Registration_1;
