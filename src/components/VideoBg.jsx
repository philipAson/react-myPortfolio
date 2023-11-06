import React, { useEffect, useState } from "react";

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
      <video src={video} autoPlay loop muted onCanPlay={loadVideo} />
    </div>
  );
};

export default VideoBg;
