import React, { useEffect, useState } from 'react'

const Message = ({ delay, text, setCurrentMessage, index, currentMessage, lastMessage }) => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setCurrentMessage(index), 100);
    }, delay);
    return () => clearTimeout(timerID);
  }, []);

  let className = "message-text";
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
    <div className='message'>
        {isVisible && <div className={className}>{text}</div>}
    </div>
  )
}

export default Message