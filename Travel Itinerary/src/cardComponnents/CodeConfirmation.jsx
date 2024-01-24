import React from "react";

const CodeConfirmation = (props) => {
  return (
    <>
      <div className="code-box">
        <p className="confirmation">{props.confirmation}</p>
        <p className="confirmation-code">678900</p>
      </div>
      <div className="booking-summary">{props.button}</div>
    </>
  );
};

export default CodeConfirmation;
