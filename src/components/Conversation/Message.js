import React from 'react';
import classNames from 'classnames';

const Message = ({ sender, content, own }) => {
  const cssClass = classNames('message', {
    'message--own': own == sender ,
  }); 
  return (
    <div className={cssClass}>
      <h3 className="message--from">{sender}</h3>
      <p className="message--content">{content}</p>
    </div>
  )
};

export default Message;
