import { motion, useAnimationControls } from "framer-motion"
import { useState } from "react";

const RubberBand = ({children}) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = () => {

      controls.start({

        transform: [
          "scale3d(1, 1, 1)",
          "scale3d(1.4, .55, 1)",
          "scale3d(.75, 1.25, 1)",
          "scale3d(1.25, 1, 1)",
          "scale3d(.9, 1.05, 1)",
          "scale3d(1, 1, 1)",
        ],
        transition:{
          times: [0, .4, .6, .7, .8, .9],
          duration: 1.5,
        }

      })
      setIsPlaying(true);
  }
  

  return (
    <motion.span 
    animate = {controls}
    onMouseOver={() => {
      if(!isPlaying)
      rubberBand();
    }}
    onAnimationComplete={() => setIsPlaying(false)}
    >
        {children}
    </motion.span>
  )
}

export default RubberBand