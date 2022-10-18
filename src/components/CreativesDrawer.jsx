import React, { useState } from "react";
import Cross from "../assets/icons/Cross";

const CreativesDrawer = ({ onClose, colors, setCreatives }) => {
  const [formDetails, setFormDetails] = useState({
    title: "",
    subtitle: "",
    color: null,
  });

  const handleFormChange = (field, value) => {
    setFormDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (formDetails.title && formDetails.subtitle && formDetails.color) {
      setCreatives((prev) => [
        ...prev,
        {
          title: formDetails.title,
          subtitle: formDetails.subtitle,
          color: formDetails.color,
        },
      ]);
      onClose();
    }
  };

  return (
    <div className="fixed bg-slate-700 right-0 h-screen w-96 p-5 top-0 border-white border-2">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-bold text-lg">Creative Creation</h2>
        <Cross
          className="cursor-pointer"
          fill="#ffffff"
          width="15px"
          height="15px"
          onClick={onClose}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <label className="font-bold">title</label>
            <input
              className="rounded-sm px-3 py-1 text-black"
              value={formDetails.title}
              onChange={(e) => handleFormChange("title", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold">subtitle</label>
            <input
              className="rounded-sm px-3 py-1 text-black"
              value={formDetails.subtitle}
              onChange={(e) => handleFormChange("subtitle", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold">background color</label>
            <div className="flex gap-2 flex-wrap">
              {colors.map((color) => (
                <div
                  className={`w-5 h-5 cursor-pointer rounded-full border-white ${
                    color === formDetails.color
                      ? "border-4 border-double"
                      : "border-2"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleFormChange("color", color)}
                />
              ))}
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={
            !formDetails.title || !formDetails.subtitle || !formDetails.color
          }
          className="bg-white mt-10 disabled:opacity-40 text-black rounded-sm w-36"
        >
          Done
        </button>
      </form>
    </div>
  );
};

export default CreativesDrawer;
