import React, { useEffect } from 'react';

import './chatList.scss';
import ChatCard from './ChatCard';
// import conversations from 'src/data/conversations';

const ChatList = ({
  loadConversations,
  conversations,
  userId,
  clearConv,
}) => {
  useEffect(() => {
    clearConv();
    loadConversations();
  }, []);

  return (
    <div className="chatList">
      {conversations.map((conversation) => {
        let interlocutor = '';
        let interlocutorId = null;
        if (conversation.user1 == userId) {
          interlocutor = conversation.user2Nickname;
          interlocutorId = conversation.user2;
        }
        else {
          interlocutor = conversation.user1Nickname;
          interlocutorId = conversation.user1;
        }

        return (
          <ChatCard
            key={conversation.id}
            id={interlocutorId}
            user2={interlocutor}
            lastMessage={userId}
          />
        );
      })}
    </div>
  );
};

export default ChatList;
