"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function Inp() {
  const [isRentActive, setRentActive] = useState(false);
  const [isBuyActive, setBuyActive] = useState(true);
  const switcher = () => {
    setRentActive(!isRentActive);
    setBuyActive(!isBuyActive);
  };
  return (
    <>
      <div className="flex flex-col justify-start items-center w-[80%] h-[80%] bg-primary rounded-2xl">
        <div className="flex flex-row justify-center w-full h-[20%] mb-3">
          <p
            className={`w-1/2 font-medium text-center text-xl border-3 rounded-l-2xl flex flex-col justify-center items-center hover:bg-secondary hover:text-secondary-content hover:border-secondary-content transition-colors duration-200 ${isBuyActive ? "bg-accent text-accent-content border-black" : "bg-primary text-primary-content border-primary-content"}`}
            onClick={switcher}
          >
            Buy
          </p>
          <p
            className={`w-1/2 font-medium text-center text-xl border-3 rounded-r-2xl flex flex-col justify-center items-center hover:bg-secondary hover:text-secondary-content hover:border-secondary-content transition-colors duration-200 ${isRentActive ? "bg-accent text-accent-content border-black" : "bg-primary text-primary-content border-primary-content"}`}
            onClick={switcher}
          >
            Rent
          </p>
        </div>
        <label
          htmlFor="postcode"
          className="w-[50%] text-left mb-1 font-medium"
        >
          Enter Post Code
        </label>
        <input
          className="input bg-white border-2 border-black text-center text-lg"
          id="postcode"
        />
        <motion.button
          className="rounded-xl bg-accent text-accent-content text-medium mt-5 text-lg px-7 py-2"
          whileHover={{ scale: 1.2 }}
        >
          Search
        </motion.button>
      </div>
    </>
  );
}
