import React from 'react';
import classNames from 'classnames';

const Message = ({ fromId, fromNickname, content,currentId }) => {
  console.log(currentId);  
  const cssClass = classNames('message', {
    'message--own': currentId == fromId ,
  }); 
  
  return (
    <div className={cssClass}>
      <h3 className="message--from">{fromNickname}</h3>
      <p className="message--content">{content}</p>
    </div>
  )
};

export default Message;
