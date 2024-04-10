import React from "react";
import { studentbanner } from "../../assets";

const Greeting1 = () => {
  return (
    <div>
      <div className="greet md:grid grid-cols-2 items-center">
        <img src={studentbanner} alt="" />
        <div className="info">
          <p className=" font-bold text-2xl">You're in the right place</p>
          <p>
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science, and computer science.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Greeting1;
