import React, { useEffect, useState } from "react";

const Message = ({
  delay,
  text,
  setCurrentMessage,
  index,
  currentMessage,
  isReply = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setCurrentMessage(index), 100);
    }, delay);
    return () => clearTimeout(timerID);
  }, []);

  let className = "message-text";
  let className2 = "message"

  if (isReply) {
    className += "-reply"
    className2 += "-reply"
  }

  if (index === 0 && currentMessage === 0) {
    className += " single";
  } else if (index === 0 && currentMessage > 0) {
    className += " top";
  } else if (index < currentMessage && index !== 0) {
    className += " middle";
  } else if (index === currentMessage) {
    className += " bottom";
  }
  return (
    <div className={className2}>
      {isVisible && <div className={className}>{text}</div>}
    </div>
  );
};

export default Message;
