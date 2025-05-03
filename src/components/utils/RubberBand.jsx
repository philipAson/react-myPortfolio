import { motion, useAnimationControls } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const RubberBand = ({ children, onRegister }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef();

  const rubberBand = () => {
    if (isPlaying) return; // Undvik dubbeltrigger
    setIsPlaying(true);

    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, 1, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
        duration: 1.5,
      },
    }).then(() => setIsPlaying(false));
  };

  useEffect(() => {
    if (onRegister && ref.current) {
      onRegister(ref, rubberBand);
    }
  }, [onRegister]);

  return (
    <motion.span
      ref={ref}
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      style={{ display: "inline-block", height: "fit-content", margin: "0 0 0.75rem 0"}} // viktigt för positionering!
    >
      {children}
    </motion.span>
  );
};

export default RubberBand;
