import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Importera useLocation

const VideoBg = () => {
  const location = useLocation();
  const [video, setVideo] = useState("");

  useEffect(() => {
    const videoURL = location.pathname === "/about"
      ? "https://pippin-portfolio-bucket.s3.eu-north-1.amazonaws.com/Sequence+01.mp4"
      : "https://pippin-portfolio-bucket.s3.eu-north-1.amazonaws.com/vidBgSmall.mp4";

    setVideo(videoURL);
  }, [location]);

  return (
    <div className="bgContainer">
      <video
        key={video} // Gör att videon laddas om korrekt när src ändras
        src={video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ opacity: 0.8 }} // Visuell förbättring
      />
    </div>
  );
};


export default VideoBg;
