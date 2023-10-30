import React from "react";
import { Reveal } from "./utils/Reveal";
import Header from "./ContentElements/Header";
import MessageGroup from "./utils/MessageGroup";
import Message from "./utils/Message";
import Links from "./ContentElements/Links";


const OverlayMenu = () => {
  return (
    <div className="OverlayContainer">
      <Reveal>
        <Header />
      </Reveal>
      <div className="overlay-grid">
        <Reveal delayTime={0.5}>
          <MessageGroup>
            <Message text="I'm an mobile-app developer in progress and is currently looking for an internship to develop my skills!" delay={1500}/>
            <Message text="hopefully at your company. " delay={3500}/>
          </MessageGroup>
        </Reveal>
        <div></div>
        <div></div>
        <Reveal>
          <Links />
        </Reveal> 
        
        <Reveal delayTime={6}>
          <MessageGroup><Message text="What you will gain is a free worker for 10 weeks that is verry driven and eager to learn everything that involvs coding." delay={6500}/>
            <Message text="I am not afraid to dig in to new things, infact i verry much enjoy doing so!" delay={10000}/>
            <Message text="And also i thrive when given responsibility and see it as an oportunity to show that i'm reliable!" delay={12500}/>
          </MessageGroup>
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
