import React from 'react'
import TextSpan from './TextSpan';

const OverlayMenu = () => {

    const title = "Hi, i'm Philip".split("");

  return (
    <div className="container">
        <div className='title'>{title.map((letter, index) => {
            return(
                <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </TextSpan>
            )
        })}</div>
      </div>
  )
}

export default OverlayMenu