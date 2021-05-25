import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './form.scss';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Form = () => {

  return (
    <form className="form">
      <input
        className="form-input"
        type="text"
        placeholder="Saisissez un message"
      />
      <button className="send-button" type="submit">
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
};

export default Form;
