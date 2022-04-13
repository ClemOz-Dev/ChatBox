import React from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';

import './form.scss';

const Form = ({ value, setValue, manageSubmit }) => {
  console.log('rendu de Form');

  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        placeholder="Saisissez un message"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button className="form-submit" type="submit">
        <Send size={46} />
      </button>
    </form>
  );
};

Form.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
};

export default Form;
