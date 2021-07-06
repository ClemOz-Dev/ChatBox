import React, { useEffect } from 'react';

import './members.scss';
import MemberCard from './MemberCard';

const Members = ({
  loadMembers,
  members,
  currentId,
  currentNickname,
  setInputValue,
  submitFilter,
  clearConv,
}) => {
  useEffect(() => {
    clearConv();
    loadMembers();
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFilter();
  };

  const membersWithoutCurrentUser = members.filter((member) => member.id !== currentId);

  return (
    <div className="members">
      <h1 className="members--title">Bienvenue {currentNickname} !</h1>
      <form
        className="membersForm"
        onSubmit={handleSubmit}
      >
        <label htmlFor="keyword">Je recherche  </label>
        <input
          type="text"
          name="keyword"
          id="keyword"
          onChange={handleChange}
        />
        <button type="submit">-</button>
      </form>
      {!members?.length && <h1>Coucou</h1>}
      <div className="membersList">
        {membersWithoutCurrentUser.map((member) => (
          <MemberCard
            key={member.id}
            id={member.id}
            nickname={member.nickname}
          />
        ))}
      </div>
    </div>
  );
};

export default Members;
