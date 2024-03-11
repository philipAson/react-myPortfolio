import React, { useState } from "react";

const Resumé = () => {
  const resuméURL = "https://pippin-portfolio-bucket.s3.eu-north-1.amazonaws.com/PhilipAnderssonCv2024.pdf";

  return (
    <div  className="resumé">
        <iframe title="Resumé" src={resuméURL} />
    </div>
  );
};

export default Resumé;



