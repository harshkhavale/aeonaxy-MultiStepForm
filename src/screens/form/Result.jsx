import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import Paths from "./Paths";

const Result = () => {
  const [showPaths, setShowPaths] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPaths(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // Run only once on component mount

  return (
    <div className="result">
      {!showPaths && (
        <div className="flex justify-center items-center flex-col gap-10">
          <FontAwesomeIcon
            icon={faCircle}
            className="h-20 font-bold text-yellow-500"
          />
          <p className="font-bold text-2xl flex justify-center text-center items-center">
            Finding learning path recommendations for you based on your
            responses
          </p>
        </div>
      )}

      {showPaths && <Paths />}
    </div>
  );
};

export default Result;
