import { useState } from "react";
import BarPercent from "./BarPercent";
import ProgressBar from "./ProgressBar";
import Rate from "./Rate";
import Steps from "./Steps";

function App() {
  const [value, setValue] = useState(40); // State to track the value of the range input

  return (
    <div className="w-full ">
      <div className=" w-fit mx-auto  mt-20 justify-center ic flex flex-col gap-20">
        <p className=" font-bold  text-center">{value}%</p>
        <ProgressBar />
        <BarPercent setValue={setValue} value={value} />
        <Rate />
        <Steps />
      </div>
    </div>
  );
}

export default App;
