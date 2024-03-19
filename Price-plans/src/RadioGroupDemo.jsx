import * as RadioGroup from "@radix-ui/react-radio-group";
import React from "react";

const RadioGroupDemo = () => (
  <form>
    <RadioGroup.Root
      className="flex flex-col gap-2.5"
      defaultValue="default"
      aria-label="View density"
    >
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
          value="default"
          id="r1"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
        </RadioGroup.Item>
        <label
          className="text-black text-sm  font-medium leading-none pl-[15px]"
          htmlFor="r1"
        >
          Billed yearly
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
          value="comfortable"
          id="r2"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
        </RadioGroup.Item>
        <label
          className="text-black text-sm  font-medium leading-none pl-[15px]"
          htmlFor="r2"
        >
          Billed anually
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);

export default RadioGroupDemo;
