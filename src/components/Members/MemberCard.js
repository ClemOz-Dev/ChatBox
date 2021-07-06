import React from 'react';
import { Link } from 'react-router-dom';

const MemberCard = ({ id, nickname }) => (
  <Link to={`/conversation/${id}`}>
    <div className="memberCard">
      <h1 className="memberCard--nickname">{nickname}</h1>
    </div>
  </Link>
);

export default MemberCard;
