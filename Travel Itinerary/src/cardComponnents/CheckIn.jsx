import React from "react";

const CheckIn = (props) => {
  return (
    <div className="check-in">
      <p className="passenger letters">{props.pass}</p>
      <div className="Gate-checkIn">
        <div className="gate">AG</div>
        <div className="gate">II</div>
      </div>
    </div>
  );
};

export default CheckIn;
