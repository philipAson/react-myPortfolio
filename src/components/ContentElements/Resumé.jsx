import React, { useState } from "react";

const Resumé = () => {
  const resuméURL = "https://pippin-portfolio-bucket.s3.eu-north-1.amazonaws.com/CV-PhilipAndersson.pdf";

  const [resuméExpand, setResuméExpand] = useState(false);

  const toggleResumé = () => {
    setResuméExpand(!resuméExpand);
  };

  const resuméClassName = `resumé ${resuméExpand ? "expanded" : ""}`;

  return (
    <div className={resuméClassName} onClick={toggleResumé}>
      Resumé
      {resuméExpand ? (
        <iframe src={resuméURL} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Resumé;



