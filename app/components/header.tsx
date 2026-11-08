"use client";
import { motion } from "framer-motion";

export default function Head() {
  return (
    <>
      <div className="flex flex-row justify-start items-center h-full w-[60%]">
        <p className="text-primary-content font-bold">Roof Search</p>
      </div>
      <div className="flex flex-row justify-evenly items-center h-full w-[40%]">
        <motion.p
          className="text-primary-content rounded-2xl px-6 py-3 hover:bg-accent hover:text-accent-content transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
        >
          Home
        </motion.p>
        <motion.p
          className="text-primary-content rounded-2xl px-6 py-3 hover:bg-accent hover:text-accent-content transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
        >
          About Us
        </motion.p>
        <motion.p
          className="text-primary-content rounded-2xl px-6 py-3 hover:bg-accent hover:text-accent-content transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
        >
          Contact
        </motion.p>
      </div>
    </>
  );
}
