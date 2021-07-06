import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import './conversation.scss';
import Form from 'src/containers/Conversation/Form';
import Message from './Message';

const Conversation = ({
  createConv,
  loadMessages,
  messages,
  currentId
}) => {
  const { id } = useParams();
  console.log('messages', messages);
  const refMessagesContainer = useRef(null);
  useEffect(() => {
    // loadMessages({ id });
    createConv({ id });
  }, []);

  useEffect(() => {
    refMessagesContainer.current.scrollTo({
      top: refMessagesContainer.current.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }, [messages]);
  // console.log(messages);
  return (
    <div className="conversation">
      <div className="conversation--messages-container" ref={refMessagesContainer}>
        {messages.map((message) => (
          <Message
            key={message.id}
            fromId={message.from_id}
            fromNickname={message.fromNickname}
            content={message.content}
            currentId={currentId}
          />
        ))}
      </div>
      <Form />
    </div>
  );
};

export default Conversation;
