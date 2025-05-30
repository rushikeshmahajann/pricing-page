import React from "react";

const Toggle = ({handleToggle, isYearly}) => {

  return (
    <div className="flex items-center justify-center mt-10 border-purple-50 border-3 w-max mx-auto p-1.5 rounded-full" >
      <label className="relative grid grid-cols-2 w-fit rounded-full font-medium cursor-pointer overflow-hidden font-poppin">

        <div
          className={`absolute w-1/2 h-full rounded-full bg-purple-100 transition-all duration-300 ${
            isYearly ? "left-1/2" : "left-0"
          }`}
        />

        <div
          className={`py-1.5 md:py-3 px-4 md:px-12 text-center tracking-tight text-md sm:text-lg md:text-xl z-10 transition-colors duration-300 ${
            isYearly ? "text-purple-100" : "text-green-200"
          }`}
          onClick={handleToggle}
        >
          Monthly
        </div>


        <div
          className={`py-1.5 md:py-3 px-4 md:px-12 text-center tracking-tight text-md sm:text-lg md:text-xl z-10 transition-colors duration-300 ${
            isYearly ?  "text-green-200" :"text-purple-100" 
          }`}
          onClick={handleToggle}
        >
          Yearly : save 20%
        </div>
      </label>
    </div>
  );
};

export default Toggle;
