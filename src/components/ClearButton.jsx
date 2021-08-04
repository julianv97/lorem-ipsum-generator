import React from "react";

const ClearButton = ({ clearAll }) => {
  return (
    <div className="bg-mint-green h-screen w-full flex justify-center items-start pb-5">
      <button
        className="uppercase px-2 py-1 rounded text-white bg-dark-green"
        onClick={() => {
          clearAll();
        }}
      >
        clear all
      </button>
    </div>
  );
};

export default ClearButton;
