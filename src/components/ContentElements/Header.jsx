import React from "react";
import RubberBand from "../utils/RubberBand";
import { Reveal } from "../utils/Reveal";

const Header = () => {
  const title = "Hi, i'm Philip".split("");
  return (
    <div className="Header">
        <Reveal>
        {title.map((letter, index) => {
        return (
          <RubberBand key={index}>
            {letter === " " ? "\u00A0" : letter}
          </RubberBand>
        );
      })}
        </Reveal>
      
    </div>
  );
};

export default Header;
