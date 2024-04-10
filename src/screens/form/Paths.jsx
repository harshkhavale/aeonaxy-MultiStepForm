import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { learningPaths } from "../../constant";
const Paths = () => {
  const [selectedPath, setSelectedPath] = useState();

  return (
    <div>
      <div className=" flex justify-center items-center flex-col gap-10">
        <header className="flex justify-center items-center md:gap-6 gap-2 flex-col">
          <h1 className="font-bold md:text-3xl text-2xl text-center">
            Learning paths based on your answers
          </h1>
          <p className="">Choose one to get started. You can switch anytime.</p>
        </header>
        <main className="flex  flex-col md:flex-row gap-2">
          {learningPaths.map((path, index) => (
            <div
              onClick={() => setSelectedPath(path.title)}
              className={` relative flex flex-row-reverse items-center rounded-md gap-4 p-4 shadow-sm ${
                selectedPath === path.title
                  ? "border border-yellow-600 shadow-md"
                  : "border border-gray-100"
              }`}
              key={index}
            >
              {path.popular && (
                <div className=" bg-yellow-500 text-xs absolute -top-4 start-28 p-2 rounded-full font-bold">
                  MOST POPULAR
                </div>
              )}
              <img src={path.image} alt={path.title} className="w-auto h-24" />
              <div className="flex items-center">
                <p className="pr-2">
                  <span className=" font-bold">{path.title}</span>{" "}
                  <span>{path.desc}</span>
                </p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Paths;
