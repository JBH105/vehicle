import Image from "next/image";
import React from "react";

const NoItemFound = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h2 className="text-orange font-semibold mb-4 text-2xl">
          No Vehicle Found
        </h2>
        <span className="text-gray-600 block">
          Come back for the Add Vehicle
        </span>
      </div>
    </div>
  );
};

export default NoItemFound;
