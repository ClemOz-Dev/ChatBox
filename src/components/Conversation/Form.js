import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './form.scss';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Form = ({ messageInputValue, setMessageInputValue, sendMessage }) => {
  const handleChange = (e) => {
    setMessageInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <input
        className="form-input"
        type="text"
        placeholder="Saisissez un message"
        value={messageInputValue}
        onChange={handleChange}
      />
      <button className="send-button" type="submit">
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
};

export default Form;
