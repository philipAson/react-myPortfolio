import React, { useEffect, useState, useRef } from "react";

const FadeTop = ({ children }) => {
  const [opacity, setOpacity] = useState(1);
  const myRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const top = myRef.current.getBoundingClientRect().top;
      if (window.matchMedia("(max-width: 600px)").matches) {
        setOpacity(Math.max(0, 1 - (50 - top) / 120));
      } else {
        setOpacity(Math.max(0, 1 - (1150 - top) / 120));
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={myRef} style={{ opacity: opacity }}>
      {children}
    </div>
  );
};

export default FadeTop;
