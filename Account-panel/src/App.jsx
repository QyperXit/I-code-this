import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import "./App.css";
import AvatarComponent from "./AvatarComponent";

function App() {
  function slideRight() {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  return (
    <div className="container relative ml-auto mr-auto mt-10 bg-blue-600   w-[15em]  overflow-x-scroll p-5">
      <div className=" text-white mb-2 text-xl font-bold">Switch account</div>
      <div
        className=" overflow-x-scroll scrollbar-hide scroll-smooth"
        id="slider"
      >
        {" "}
        {/* Fixed width container */}
        <AvatarComponent />
      </div>
      <MdChevronRight
        className=" absolute right-0 top-[4em] text-cyan-50 cursor-pointer  active:size-8"
        size={30}
        onClick={slideRight}
      />
      <button className=" bg-blue-300 py-1 px-3 text-center rounded-sm mt-5 text-white   hover:bg-gray-300">
        Add account
      </button>
      <ul className=" decoration-none flex flex-col gap-2  text-white font-semibold mt-3">
        <li className=" cursor-pointer hover:text-gray-300">
          Account settings
        </li>
        <li className=" cursor-pointer hover:text-gray-300">Subscription</li>
        <li className=" cursor-pointer hover:text-gray-300">Support</li>
        <li className=" cursor-pointer hover:text-gray-300">Sign Out</li>
      </ul>
    </div>
  );
}

export default App;
