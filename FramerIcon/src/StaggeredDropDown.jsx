import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
// import { IconType } from "react-icons";
import {
  FiBell,
  FiChevronDown,
  FiEdit,
  FiMail,
  FiPlusSquare,
  FiShare,
  FiTrash,
} from "react-icons/fi";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mt-20 sc">
      <div className="p-8 pb-56 flex items-center justify-center gap-4 bg-white">
        <FiMail />
        <FiBell />
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-1 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
          >
            <span className="font-medium text-sm">John</span>
            <motion.span variants={iconVariants}>
              <FiChevronDown />
            </motion.span>
          </button>
          <motion.div
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2  rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-max overflow-hidden"
          >
            {/* <Option setOpen={setOpen} Icon={FiEdit} text="Option" />
              <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
              <Option setOpen={setOpen} Icon={FiShare} text="Share" />
              <Option setOpen={setOpen} Icon={FiTrash} text="Remove" /> */}
            <motion.div
              variants={itemVariants}
              className="heading flex w-full gap-6 p-6 items-center"
            >
              <div className="img rounded-full aspect-w-1 w-16">
                <img
                  src="https://imgs.search.brave.com/NkyV6uuNpMkD0HQNRM63z6hL4EwQye4eN_PFtZYk0us/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/OTUxNTI3NzI4MzUt/MjE5Njc0YjJhOGE2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRsOGZH/MWxiaVV5TUhCdmNu/UnlZV2wwZkdWdWZE/QjhmREI4Zkh3dw.jpeg"
                  className=" rounded-full "
                />
              </div>
              <div className="details" setOpen={setOpen}>
                <h1 className="font-semibold text-xl text-gray-500 ">
                  John Smith
                </h1>
                <h2 className="text-lg text-gray-500">Manager</h2>
                <div className="view flex gap-x-4 mt-1">
                  <div
                    className="profile bg-cyan-600 text-white text-center rounded-lg px-2 py-1 hover:bg-sky-700 cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    View Profile
                  </div>
                  <div
                    className="add text-center flex items-center text-cyan-600 hover:bg-sky-700 cursor-pointer hover:text-white  cursor-pointer px-2 py-1 rounded-lg "
                    onClick={() => setOpen(false)}
                  >
                    Add Account
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="options flex flex-col gap-2  bg-gray-50 px-6 py-6"
            >
              <p
                className=" text-gray-500 w-fit border-b border-transparent hover:border-black cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Upgrade to{" "}
                <span className=" font-semibold  text-pink-500">PRO</span>
              </p>
              <p
                className="text-gray-500 w-fit border-b border-transparent hover:border-black cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Invite team member
              </p>
              <p
                className="text-gray-500 w-fit border-b border-transparent hover:border-black cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Feedback
              </p>
              <p
                className="text-gray-500 w-fit border-b border-transparent hover:border-black cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Helo
              </p>
              <p
                className="text-gray-500 w-fit border-b border-transparent hover:border-black cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Sign Out
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
