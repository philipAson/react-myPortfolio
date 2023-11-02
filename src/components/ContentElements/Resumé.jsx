import React, { useState } from "react";

const Resumé = () => {
  const [resuméExpand, setResuméExpand] = useState(false);

  const expandResumé = () => {
    setResuméExpand(true);
  };

  return (
    <div>
      <div className="resumé" onClick={expandResumé}>
        Resumé
      </div>
      <div className="resumé-container">
        
      </div>
    </div>
  );
};

export default Resumé;
