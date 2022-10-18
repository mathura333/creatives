import React from "react";

const AddCreatives = ({ setOpenDrawer, openDrawer, disabled }) => {
  return (
    <button
      disabled={openDrawer || disabled}
      onClick={() => setOpenDrawer((prev) => !prev)}
      className="bg-white disabled:opacity-40 text-black rounded-sm w-36"
    >
      Add Creatives
    </button>
  );
};

export default AddCreatives;
