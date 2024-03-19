import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from "@radix-ui/react-icons";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import React from "react";
import RadioGroupDemo from "./RadioGroupDemo";

const toggleGroupItemClasses =
  "hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 flex h-[255px] w-[200px] items-center justify-center bg-white text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none";

const ToggleGroupDemo = () => (
  <ToggleGroup.Root
    className="inline-flex bg-mauve6 rounded mt shadow-[0_2px_10px] shadow-blackA4 space-x-px"
    type="single"
    defaultValue="center"
    aria-label="Text alignment"
  >
    <ToggleGroup.Item
      className="color-mauve11 flex h-[255px] w-[195px] items-center justify-center bg-white text-base leading-4 "
      value="none"
      aria-label="left aligned"
    >
      <div className="flex flex-col  relative">
        <RadioGroupDemo />
      </div>
    </ToggleGroup.Item>
    <ToggleGroup.Item
      className={toggleGroupItemClasses}
      value="left"
      aria-label="Left aligned"
    >
      <div className="flex flex-col">
        <h1 className=" text-black   font-semibold">For individuals</h1>
        <p className=" text-gray-600 text-xs mt-3 font-semibold">
          {" "}
          $9.99 / Month
        </p>
        <button className="hover:bg-slate-600 bg-black text-white   w-fit mx-auto py-2 px-4 mt-4 rounded-sm">
          Buy now
        </button>
      </div>
    </ToggleGroup.Item>
    <ToggleGroup.Item
      className={toggleGroupItemClasses}
      value="center"
      aria-label="Center aligned"
    >
      <div className="flex flex-col">
        <h1 className=" text-black   font-semibold">For families</h1>
        <p className=" text-gray-600 text-xs mt-3 font-semibold">
          {" "}
          $16.99 / Month
        </p>
        <button className=" hover:bg-slate-600 bg-black text-white   w-fit mx-auto py-2 px-4 mt-4 rounded-sm">
          Buy now
        </button>
      </div>
    </ToggleGroup.Item>
    <ToggleGroup.Item
      className={toggleGroupItemClasses}
      value="right"
      aria-label="Right aligned"
    >
      <div className="flex flex-col  relative">
        <h1 className=" text-black   font-semibold">For teams</h1>
        <p className=" text-gray-600 text-xs mt-3 font-semibold">
          {" "}
          $16.58 / Month
        </p>
        <button className=" hover:bg-slate-600 bg-black text-white   w-fit mx-auto py-2 px-4 mt-4 rounded-sm">
          Buy now
        </button>
        <p className="  text-gray-700  text-sm  w-full     absolute maxc  bottom-[-35px]">
          or <span className=" underline ">purchase now</span>
        </p>
      </div>
    </ToggleGroup.Item>
  </ToggleGroup.Root>
);

export default ToggleGroupDemo;
