import React from "react";
import { Reveal } from "./utils/Reveal";
import Header from "./ContentElements/Header";
import MessageGroup from "./utils/messages/MessageGroup";
import Message from "./utils/messages/Message";

const OverlayMenu = () => {
  return (
    <div className="OverlayContainer">
      <Reveal>
        <Header />
      </Reveal>
      <div className="overlay-grid">
        <Reveal delayTime={1}>
          <MessageGroup>
            <Message
              text="I'm an mobile-app developer in progress and is currently looking for an internship to develop my skills!"
              delay={1500}
            />
            <Message text="hopefully at your company. " delay={3500} />
          </MessageGroup>
        </Reveal>
        <Reveal delayTime={4.5}>
        <MessageGroup isReply={true}>
            <Message
              isReply={true}
              text="I am not afraid to dig in to new things, infact i verry much enjoy doing so!"
              delay={12500}
            />
            <Message
              isReply={true}
              text="Also, i thrive when given responsibility and see it as an oportunity to show i'm reliable!"
              delay={13350}
            />
            <Message
              isReply={true}
              text="Also, i thrive when given responsibility and see it as an oportunity to show i'm reliable!"
              delay={13750}
            />
          </MessageGroup>
        </Reveal>
        <Reveal delayTime={9}>
          <MessageGroup>
            <Message
              text="What you will gain is a free worker for 10 weeks that is verry driven and eager to learn everything that involvs coding."
              delay={9500}
            />
            <Message
              text="I am not afraid to dig in to new things, infact i verry much enjoy doing so!"
              delay={10000}
            />
            <Message
              text="Also, i thrive when given responsibility and see it as an oportunity to show i'm reliable!"
              delay={11500}
            />
          </MessageGroup>
        </Reveal>
        <Reveal delayTime={12}>
          <MessageGroup isReply={true}>
            <Message
              isReply={true}
              text="I am not afraid to dig in to new things, infact i verry much enjoy doing so!"
              delay={12500}
            />
            <Message
              isReply={true}
              text="Also, i thrive when given responsibility and see it as an oportunity to show i'm reliable!"
              delay={13350}
            />
            <Message
              isReply={true}
              text="Also, i thrive when given responsibility and see it as an oportunity to show i'm reliable!"
              delay={13750}
            />
          </MessageGroup>
        </Reveal>
      </div>
    </div>
  );
};

export default OverlayMenu;
