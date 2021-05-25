import React from 'react';

import './chatList.scss';
import ChatCard from './ChatCard';
import conversations from 'src/data/conversations';

const ChatList = () => (
  <div className="chatList">
    <button
      type="button"
      className="settings--toggle"
      onClick={() => {
        toggleOpen();
      }}
    >
      +
      </button>
    {conversations.map((conversation) => (
      <ChatCard
        key={conversation.id}
        id={conversation.id}
        user2={conversation.user2}
        lastMessage={conversation.messages[conversation.messages.length - 1].content}
      />
    ))}
  </div>
);

export default ChatList;
