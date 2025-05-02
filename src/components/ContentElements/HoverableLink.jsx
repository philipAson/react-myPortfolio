import { motion, useAnimationControls } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const HoverableLink = ({ children, className, onRegister, as = "span", ...rest }) => {
  const controls = useAnimationControls();
  const ref = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const trigger = () => {
    if (isPlaying) return;
    setIsPlaying(true);

    controls.start({
      scale: [1, 1.2, 0.95, 1.05, 1],
      transition: { duration: 0.8 },
    }).then(() => setIsPlaying(false));
  };

  useEffect(() => {
    if (onRegister && ref.current) {
      onRegister(ref, trigger);
    }
  }, [onRegister]);

  const MotionTag = motion[as]; // dynamic motion.element type

  return (
    <MotionTag
      ref={ref}
      animate={controls}
      className={className}
      whileHover={{ scale: 1.1 }}
      style={{ display: "inline-block" }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default HoverableLink;
