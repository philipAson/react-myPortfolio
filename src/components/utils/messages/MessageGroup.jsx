import React, { useState, useEffect } from "react";
import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { croodles } from '@dicebear/collection';

const MessageGroup = ({ children, isReply = false }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [lastMessage, setLastMessage] = useState(null);
  const avatar = useMemo(() => {
    return createAvatar(croodles, {
      size: 128,
      seed: 'Croodles',
    }).toDataUriSync();
  }, []);


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

  let imgUrl = "https://pippin-portfolio-bucket.s3.eu-north-1.amazonaws.com/DSC04169.JPG";
  let className = "message-group";
  if (isReply) {
    className += "-reply";
    imgUrl = avatar;
  }

  return (
    <div className={className}>
      <div>
        <img
          src={imgUrl}
          alt="meeee"
        />
      </div>
      <div className="children">{childrenWithProps}</div>
    </div>
  );
};

export default MessageGroup;
