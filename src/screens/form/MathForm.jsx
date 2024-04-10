import React, { useState } from "react";
import { mathOptions } from "../../constant";

const MathForm = () => {
  const [selectedLevel, setSelectedLevel] = useState();

  return (
    <div className=" flex flex-col gap-10">
      <header className="flex justify-center items-center md:gap-6 gap-2 flex-col">
        <h1 className="font-bold md:text-3xl text-2xl">
          What is your math comfort level?
        </h1>
        <p>
          Choose the highest level you feel confident in - you can always adjust
          later.{")"}
        </p>
      </header>
      <main className="flex items-center justify-center flex-wrap gap-2">
        {mathOptions.map((option, index) => (
          <div
            onClick={() => setSelectedLevel(option.title)}
            className={`flex flex-col w-5/12 items-center border-2 rounded-2xl border-gray-200 gap-4 p-4 shadow-sm ${
              selectedLevel == option.title
                ? "border border-yellow-600 shadow-md"
                : "border border-gray-100"
            }`}
            key={index}
          >
            <img
              src={option.image}
              alt={option.title}
              className="md:w-auto w-full h-full"
            />
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold">{option.title}</p>
              <p className="">{option.level}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default MathForm;
