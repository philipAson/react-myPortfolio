import React from 'react'
import RubberBand from './utils/RubberBand';
import { Reveal } from './utils/Reveal';
import { About } from './About';

const OverlayMenu = () => {

    const title = "Hi, i'm Philip".split("");

  return (
    <div className="container">
        <Reveal>
        <div className='title'>{title.map((letter, index) => {
            return(
                <RubberBand key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </RubberBand>
            )
        })}</div>
        </Reveal>
        <Reveal>
            <About/>
        </Reveal>
        <Reveal>
            <About/>
        </Reveal>
        <Reveal>
            <About/>
        </Reveal>
        <Reveal>
            <About/>
        </Reveal>
        <Reveal>
            <About/>
        </Reveal>
        <Reveal>
            <About/>
            <About/>
            <About/>
        </Reveal>
        <Reveal>
            <About/>
        </Reveal>
        <Reveal>
            <About/>
        </Reveal>
        <Reveal>
            <About/>
        </Reveal>
        <Reveal>
            <About/>
        </Reveal>
        <Reveal>
            <About/>
        </Reveal>
        <Reveal>
            <About/>
        </Reveal>
      </div>
  )
}

export default OverlayMenu