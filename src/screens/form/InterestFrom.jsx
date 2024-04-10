import React, { useState } from "react";
import { interests } from "../../constant";

const InterestForm = () => {
  const [selectedInterest, setSelectedInterest] = useState();

  return (
    <div className=" flex flex-col gap-10">
      <header className="flex justify-center items-center md:gap-6 gap-2 flex-col">
        <h1 className="font-bold md:text-3xl text-2xl">
          Which are you most interested in?
        </h1>
        <p>
          Choose just one. This will help us get you started{"("}but wont't
          limit your experience.{")"}
        </p>
      </header>
      <main className="flex flex-col gap-2">
        {interests.map((interest, index) => (
          <div
            onClick={() => setSelectedInterest(index)}
            className={`flex items-center rounded-md gap-4 p-4 shadow-sm ${
              selectedInterest === index
                ? "border border-yellow-600 shadow-md"
                : "border border-gray-100"
            }`}
            key={index}
          >
            <img
              src={interest.image}
              alt={interest.interest}
              className="w-8 h-8"
            />
            <div className="flex items-center">
              <p className="font-bold pr-2">{interest.desc}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default InterestForm;
