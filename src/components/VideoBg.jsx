import React from 'react'
import video from "../assets/portfolioBgVid.mp4";
import OverlayMenu from './OverlayMenu';

const VideoBg = () => {
  return (
    <div className="bgContainer">
      {/* <div className="overlay"><div/> */}
        <OverlayMenu/>
        <video src={video} autoPlay loop muted />
        
      </div>
    // </div>
  )
}

export default VideoBg