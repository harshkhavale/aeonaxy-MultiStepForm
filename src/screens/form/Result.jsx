import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
const Result = () => {
  return (
    <div>
      <div className=" flex justify-center items-center flex-col gap-10">
        <FontAwesomeIcon
          icon={faCircle}
          className=" h-20 font-bold text-yellow-500"
        />
        <p className=" font-bold text-2xl flex justify-center text-center items-center">
          Finding learning path recommendations for you based on your responses
        </p>
      </div>
    </div>
  );
};

export default Result;
