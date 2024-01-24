import React from "react";

const Priority = (props) => {
  return (
    <>
      <div className="priority">{props.priority}</div>
      <div className="booking-summary">{props.button}</div>
    </>
  );
};

export default Priority;
