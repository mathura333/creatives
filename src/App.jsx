import { useEffect, useRef, useState } from "react";
import FilterCreatives from "./components/FilterCreatives";
import CreativesBar from "./components/CreativesBar";
import AddCreatives from "./components/AddCreatives";
import CreativesDrawer from "./components/CreativesDrawer";
import AllCreatives from "./components/AllCreatives";

function App() {
  const isFetched = useRef(false);
  const [colors, setColors] = useState([]);
  const [creatives, setCreatives] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [filters, setFilters] = useState({
    titleSubtitle: "",
    color: null,
  });

  useEffect(() => {
    const fetchColors = async () => {
      const res = await fetch(
        "https://random-flat-colors.vercel.app/api/random?count=5"
      );
      const data = await res.json();

      setColors(data.colors);
      isFetched.current = true;
    };
    if (!isFetched.current) {
      fetchColors();
    }
  }, [isFetched]);

  const filteredCreatives = creatives.filter(({ title, subtitle, color }) => {
    if (!filters.color && !filters.titleSubtitle) {
      return true;
    }
    if (filters.color) {
      if (color === filters.color) {
        if (filters.titleSubtitle) {
          return (
            title.includes(filters.titleSubtitle) ||
            subtitle.includes(filters.titleSubtitle)
          );
        }
        return true;
      }
      return false;
    }
    return (
      title.includes(filters.titleSubtitle) ||
      subtitle.includes(filters.titleSubtitle)
    );
  });

  return (
    <>
      <div className="p-10 flex flex-col gap-10">
        <FilterCreatives
          colors={colors}
          filters={filters}
          setFilters={setFilters}
        />
        <div className="flex flex-col gap-4 mt-10">
          <CreativesBar total={5} current={creatives.length} />
          <AddCreatives
            setOpenDrawer={setOpenDrawer}
            openDrawer={openDrawer}
            disabled={creatives.length >= 5}
          />
        </div>
        <AllCreatives creatives={filteredCreatives} />
      </div>
      {openDrawer && (
        <CreativesDrawer
          setCreatives={setCreatives}
          colors={colors}
          onClose={() => setOpenDrawer(false)}
        />
      )}
    </>
  );
}

export default App;
