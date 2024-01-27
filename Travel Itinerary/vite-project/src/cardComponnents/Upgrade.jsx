import React from "react";

const Upgrade = (props) => {
  return (
    <>
      <div className="package-text letters">{props.bags}</div>
      <div className="booking-summary">{props.button}</div>
    </>
  );
};

export default Upgrade;
