import { useEffect, useRef } from "react";

// * Use this hook to check if click is outside the element
const useOutsideClick = (callback) => {
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // * This will be the function to be executed when click outside the element
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener("click", handleClickOutside, { capture: true });
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside, {
        capture: true,
      });
    };
  }, [ref]);

  // * Use this ref to be passed in the element
  return ref;
};

export default useOutsideClick;
