import React from "react";

const CreativesBar = ({ total, current }) => {
  return (
    <div className="flex gap-5">
      <progress className="bg-white" max={total} value={current} /> {current} /{" "}
      {total} Creatives
    </div>
  );
};

export default CreativesBar;
