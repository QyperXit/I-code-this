import React from "react";

const BarPercent = ({ setValue, value }) => {
  return (
    <>
      <input
        type="range"
        min={0}
        max={100}
        value={value} // Bind the value to the state variable
        className="range range-warning range-xs w-[300px]" // Use the daisyui range component class and any custom tailwind classes
        onChange={(e) => setValue(parseInt(e.target.value))} // Update the state when the input value changes
      />
    </>
  );
};

export default BarPercent;
