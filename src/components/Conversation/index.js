import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import conversations from 'src/data/conversations';
import './conversation.scss';
import Message from './Message';
import Form from './Form';

const Conversation = () => {
  const { id } = useParams();
  const currentConversation = conversations.find(conversation => conversation.id === parseInt(id));

  const refMessagesContainer = useRef(null);
  useEffect(() => {
    refMessagesContainer.current.scrollTo({

      top: refMessagesContainer.current.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }, [currentConversation.messages]);

  return (
    <div className="conversation">      
      <div className="conversation--messages-container" ref={refMessagesContainer}>
        {currentConversation.messages.map((message) => (
          <Message
            key={message.id}
            own={currentConversation.user1}
            sender={message.from}
            content={message.content}
          />
        ))}
      </div>
      <Form />
    </div>
  )
};

export default Conversation;
