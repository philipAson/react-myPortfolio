import React, { useEffect, useState } from "react";
import vidBglocal from "../assets/vidBgSmall.mp4";

const VideoBg = () => {
  const s3Url =
    "https://pippin-portfolio-bucket.s3.eu-north-1.amazonaws.com/vidBgSmall.mp4";

  const [video, setVideo] = useState(null);

  const loadVideo = async () => {
    setVideo(s3Url);
  };

  useEffect(() => {
    loadVideo();
  }, []);

  return (
    <div className="bgContainer">
      {/* when editing */}
      {/* <video src={video} autoPlay loop muted /> */}
      {/* when deploying */}
      <video src={vidBglocal} autoPlay loop muted />
    </div>
  );
};

export default VideoBg;
