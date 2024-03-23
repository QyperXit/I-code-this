import { motion } from "framer-motion";
import React from "react";

const ProgressBar = () => {
  return (
    <>
      <div>
        <p className=" text-center">Please wait while the page is loading</p>
        <motion.div
          className="bar h-[5px] bg-white rounded mt-4"
          initial={{ width: 0 }}
          animate={{ width: "300px" }}
          transition={{ duration: 1 }}
        />
      </div>
    </>
  );
};

export default ProgressBar;
