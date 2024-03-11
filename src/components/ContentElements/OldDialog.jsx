import React from 'react'
import { Reveal } from "../utils/Reveal";
import MessageGroup from "../utils/messages/MessageGroup";
import Message from "../utils/messages/Message";
import FadeTop from "../utils/FadeTop";

const OldDialog = () => {
  return (
    <div className="overlay-grid">
        <Reveal delayTime={1}>
          <FadeTop>
            <MessageGroup>
              <Message
                text="I'm an mobile-app developer in progress and i am currently looking for an internship to develop my skills!"
                delay={1500}
              />
              <Message text="Hopefully at your company. " delay={2500} />
            </MessageGroup>
          </FadeTop>
        </Reveal>
        <Reveal delayTime={3.5}>
          <FadeTop>
            <MessageGroup isReply={true}>
              <Message
                isReply={true}
                text="Philip is studying his second year at Göteborgs folkuniversitet."
                delay={4000}
              />
              <Message
                isReply={true}
                text={
                  <a href="https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/mobilapplikationsutvecklare-distans/utbildningens-innehall/">
                    Link to the education program plan.
                  </a>
                }
                delay={4500}
              />
            </MessageGroup>
          </FadeTop>
        </Reveal>
        <Reveal delayTime={5.5}>
          <FadeTop>
            <MessageGroup>
              <Message
                text="What you will gain is a free worker for 10 weeks that is verry driven and eager to learn everything that involvs coding."
                delay={6000}
              />
              <Message
                text="I am not afraid to dig in to new things, infact i verry much enjoy doing so!"
                delay={6500}
              />
              <Message
                text="Also, i thrive when given responsibility and see it as an oportunity to show i'm reliable!"
                delay={7000}
              />
            </MessageGroup>
          </FadeTop>
        </Reveal>
        <Reveal delayTime={8}>
          <FadeTop>
            <MessageGroup isReply={true}>
              <Message
                isReply={true}
                text="Philip has been studying both iOS and Android development and been coding apps using Swift, Kotlin and Java."
                delay={8500}
              />
              <Message
                isReply={true}
                text="Lately he has been diving in to some backend and webdevelopment, using React And setting up Databases and API's with AWS services, this website was built with just that."
                delay={9350}
              />
              <Message
                isReply={true}
                text="Check out some of his github repos!"
                delay={10350}
              />
              <Message
                isReply={true}
                text={
                  <a href="https://github.com/philipAson">
                    https://github.com/philipAson
                  </a>
                }
                delay={10750}
              />
            </MessageGroup>
          </FadeTop>
        </Reveal>
        <Reveal delayTime={12}>
          <FadeTop>
            <MessageGroup>
              <Message
                text="It's supposed to be from week 49-7. But the period is flexible and we can schedule the internship a couple of weeks later if that suits you better."
                delay={12500}
              />
              <Message
                text="I live in central Skåne and would love to come by the office and introduce myself further!"
                delay={13500}
              />
            </MessageGroup>
          </FadeTop>
        </Reveal>
        <Reveal delayTime={14}>
          <FadeTop>
            <MessageGroup isReply={true}>
              <Message
                isReply={true}
                text="Yup! and here's his number and email!"
                delay={14500}
              />
              <Message isReply={true} text="+46702599344" delay={15350} />
              <Message
                isReply={true}
                text="philip.andersson.1991@hotmail.com"
                delay={16000}
              />
              <Message
                isReply={true}
                text="You can view and download his resumé in the upper right corner"
                delay={16500}
              />
            </MessageGroup>
          </FadeTop>
        </Reveal>
      </div>
  )
}

export default OldDialog