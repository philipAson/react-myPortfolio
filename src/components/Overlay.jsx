import React from "react";
import { Reveal } from "./utils/Reveal";
import { About } from "./ContentElements/About";
import Header from "./ContentElements/Header";
import Links from "./ContentElements/Links";

const OverlayMenu = () => {
  return (
    <div className="OverlayContainer">
      <Reveal>
        <Header/>
      </Reveal>
      <div className="overlay-grid">
        <Reveal>
          <About />
        </Reveal>
        <div></div>
        <div></div>
        <Reveal>
          <Links />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <div></div>
        <div></div>
        <Reveal>
          <Links />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <div></div>
        <div></div>
        <Reveal>
          <Links />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <div></div>
        <div></div>
        <Reveal>
          <Links />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <div></div>
        <div></div>
        <Reveal>
          <Links />
        </Reveal>
        
      </div>
    </div>
  );
};

export default OverlayMenu;
