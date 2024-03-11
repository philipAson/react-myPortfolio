import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Importera useLocation

const VideoBg = () => {
  const location = useLocation(); // Använd useLocation för att få aktuell ruttinfo
  const [video, setVideo] = useState("");

  useEffect(() => {
    // Uppdatera video baserat på routen
    const videoURL = location.pathname === "/about"
      ? "https://pippin-portfolio-bucket.s3.eu-north-1.amazonaws.com/Sequence+01.mp4"
      : "https://pippin-portfolio-bucket.s3.eu-north-1.amazonaws.com/vidBgSmall.mp4";
    
    setVideo(videoURL);
  }, [location]); // Lägg till location som en beroende till useEffect

  return (
    <div className="bgContainer">
      <video src={video} autoPlay loop muted playsInline />
    </div>
  );
};

export default VideoBg;
