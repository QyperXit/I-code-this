import React from "react";

const Steps = () => {
  return (
    <div className="">
      <ul className="steps">
        <li className="step step-primary" data-content="●"></li>
        <li className="step step-primary" data-content="●"></li>
        <li
          className="step  step-primary relative cursor-pointer"
          data-content="●"
        >
          <div className="tooltip ">
            <span className=" text-xs">Step 4</span> Verified
          </div>
        </li>
        <li className="step" data-content="●"></li>
      </ul>
    </div>
  );
};

export default Steps;
