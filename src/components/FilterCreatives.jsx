import React from "react";

const FilterCreatives = ({ colors, filters, setFilters }) => {
  console.log("filters", filters);

  const handleColorClick = (color) => {
    if (filters.color === color) {
      setFilters((prev) => ({ ...prev, color: null }));
    } else {
      setFilters((prev) => ({ ...prev, color }));
    }
  };
  return (
    <div>
      <h1 className="font-bold text-lg mb-5">Filter By</h1>
      <div className="flex gap-5">
        <div className="flex flex-col gap-2">
          <p>Color</p>
          <div className="flex gap-2 flex-wrap">
            {colors.map((color) => (
              <div
                className={`w-5 h-5 cursor-pointer rounded-full border-white ${
                  filters.color === color
                    ? "border-4 border-double"
                    : "border-2"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>title / subtitle:</p>
          <input
            value={filters.titleSubtitle}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, titleSubtitle: e.target.value }))
            }
            className="rounded-sm px-3 py-1 text-black"
            placeholder="search across title and subtitle"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterCreatives;
