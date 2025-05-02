// BackgroundDotTrailSin.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const TRAIL_LENGTH = 75;
const DOT_SIZE = 1.5;

const BackgroundDotTrailSin = () => {
  const x = useMotionValue(100);
  const y = useMotionValue(100);
  const velocity = useRef({ x: 1, y: 1 });
  const [trail, setTrail] = useState([]);
  const dotRef = useRef(null);
  const tick = useRef(0);

  useEffect(() => {
    let animationFrame;

    const move = () => {
      const dot = dotRef.current;
      if (!dot) return;

      const bounds = document.body.getBoundingClientRect();

      let newX = x.get() + velocity.current.x;
      let newY = y.get() + velocity.current.y;

      // Zigzag-modifiering med sinus
      tick.current += 0.05;
      newY += Math.sin(tick.current) * 0.5;
      newX += Math.cos(tick.current * 0.2) * 1;

      // Studs på kanter
      if (newX <= 0 || newX >= bounds.width - DOT_SIZE) {
        velocity.current.x *= -1;
        tick.current += Math.PI;
      }

      if (newY <= 0 || newY >= bounds.height - DOT_SIZE) {
        velocity.current.y *= -1;
        tick.current += Math.PI;
      }

      x.set(newX);
      y.set(newY);

      setTrail((prevTrail) => {
        const next = [...prevTrail, { x: newX, y: newY }];
        return next.length > TRAIL_LENGTH ? next.slice(-TRAIL_LENGTH) : next;
      });

      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
        opacity: 0.5,
      }}
    >
      {trail.map((point, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            left: point.x,
            top: point.y,
            width: DOT_SIZE,
            height: DOT_SIZE,
            borderRadius: "50%",
            backgroundColor: "crimson",
            opacity: index / TRAIL_LENGTH,
          }}
        />
      ))}
      <motion.div
        ref={dotRef}
        style={{
          position: "absolute",
          x,
          y,
          width: DOT_SIZE,
          height: DOT_SIZE,
          borderRadius: "50%",
          backgroundColor: "crimson",
        }}
      />
    </div>
  );
};

export default BackgroundDotTrailSin;


