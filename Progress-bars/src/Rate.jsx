import React, { useState } from "react";

const Rate = () => {
  const [value, setValue] = useState(40); // State to track the value of the range input

  return (
    <div>
      <div className="flex justify-between">
        <p className="font-semibold   text-xs">Rating</p>
        <p className="font-semibold   text-xs">{value}</p>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        className="range range-error range-xs"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
    </div>
  );
};

export default Rate;
