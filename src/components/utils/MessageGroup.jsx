import React, { useState, useEffect } from 'react';

const MessageGroup = ({ children }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [lastMessage, setLastMessage] = useState(null);

  useEffect(() => {
    setLastMessage(currentMessage);
  }, [currentMessage]);

  const childrenWithProps = React.Children.map(children, (child, index) => {
    const newProps = {
      setCurrentMessage,
      index,
      currentMessage,
      lastMessage,
    };
    return React.cloneElement(child, newProps);
  });
  return (
    <div className="message-group">
      <div>
        <img
          src="https://pippin-portfolio-bucket.s3.eu-north-1.amazonaws.com/DSC04169.JPG"
          alt="meeee"
        />
      </div>
      <div>
        {childrenWithProps}
      </div>
    </div>
  );
};

export default MessageGroup;
