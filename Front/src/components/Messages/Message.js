import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Message = ({ nickname, content, isOwn }) => {
  const cssClass = classNames('message', {
    'message--own': isOwn,
  });

  return (
    <div className={cssClass}>
      <div className="message-author">{nickname}</div>
      <div className="message-content">{content}</div>
    </div>
  );
};

Message.propTypes = {
  nickname: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired, 
  isOwn: PropTypes.bool.isRequired,
};

export default Message;
