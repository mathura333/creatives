import React from "react";

const AllCreatives = ({ creatives }) => {
  return (
    <div className="flex flex-col gap-8">
      {creatives.map((creative) => (
        <div
          className="p-5 rounded-md w-80"
          style={{ backgroundColor: creative.color }}
        >
          <h3 className="text-black font-bold text-xl">{creative.title}</h3>
          <h4 className="text-black font-medium text-base">
            {creative.subtitle}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default AllCreatives;
