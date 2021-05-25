import React from 'react';
import { Link } from 'react-router-dom';

const ChatCard = ({ id, user2, lastMessage }) => (
  <Link to={`/conversation/${id}`}>
    <div className="chatCard">
      <h1 className="chatCard--name">{user2}</h1>
      <p className="chatCard--date">{lastMessage}</p>
    </div>
  </Link>
);

export default ChatCard;
