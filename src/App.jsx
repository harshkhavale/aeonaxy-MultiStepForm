import React, { useState } from "react";
import RoleForm from "./screens/form/RoleForm";
import InterestForm from "./screens/form/InterestFrom";
import Greeting1 from "./screens/form/Greeting1";
import MathForm from "./screens/form/MathForm";
import Greeting2 from "./screens/form/Greeting2";
import Result from "./screens/form/Result";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [pageNo, setPageNo] = useState(0);
  const goForward = () => {
    if (pageNo < 5) {
      setPageNo((prev) => prev + 1);
    }
  };
  const goBackword = () => {
    if (pageNo > 0) {
      setPageNo((prev) => prev - 1);
    }
  };
  const renderComponent = () => {
    switch (pageNo) {
      case 0:
        return <RoleForm />;
      case 1:
        return <InterestForm />;
      case 2:
        return <Greeting1 />;
      case 3:
        return <MathForm />;
      case 4:
        return <Greeting2 />;
      case 5:
        return <Result />;
      default:
        return null;
    }
  };
  const progressBarWidth = (pageNo / 4) * 100;

  return (
    <div className=" flex text-sm md:text-base justify-center items-center h-screen md:px-40 px-4 w-screen">
      <div className=" w-full ">
        {pageNo <= 4 && (
          <div className="progressbar-container md:h-[20vh] h-[5vh] flex  items-center gap-2 w-full">
            {pageNo != 0 && (
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={goBackword}
                className="cursor-pointer"
              />
            )}

            <div className="bg-gray-300 h-1 w-full rounded-lg ">
              <div
                className="bg-primary h-full rounded-lg w-full"
                style={{ width: `${progressBarWidth}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="flex justify-center h-[80vh] items-center">
          <div>{renderComponent()}</div>
        </div>
        <div className=" flex justify-center items-center">
          <button
            onClick={goForward}
            className=" bg-black text-white px-8 py-2 rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
