import React, { useState } from "react";
import { roles } from "../../constant";
import useMediaQuery from "@mui/material/useMediaQuery";

const RoleForm = () => {
  const [selectedRole, setSelectedRole] = useState();
  return (
    <div className=" flex flex-col gap-10">
      <header className="flex justify-center items-center md:gap-6 gap-2 flex-col">
        <h1 className="font-bold md:text-3xl text-2xl">
          Which describes you best?
        </h1>
        <p>This will help us personalize your experience.</p>
      </header>
      <main className="flex flex-col gap-2">
        {roles.map((role, index) => (
          <div
            onClick={() => setSelectedRole(role.role)}
            className={`flex items-center rounded-md gap-4 p-4 shadow-sm ${
              selectedRole === role.role
                ? "border border-yellow-600 shadow-md"
                : "border border-gray-100"
            }`}
            key={index}
          >
            <img src={role.image} alt={role.role} className="w-8 h-8" />
            <div className="flex items-center">
              <p className="font-bold pr-2">{role.role}</p>
              <p>{role.tagline && role.tagline}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default RoleForm;
