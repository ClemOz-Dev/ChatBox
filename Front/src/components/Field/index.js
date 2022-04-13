
import React from 'react';
import PropTypes from 'prop-types';

import './field.scss';

const Field = ({
  identifier,
  placeholder,
  label,
  type,
  value,
  changeField,
}) => {
  const handleChange = (event) => {
    const { value: inputValue, name } = event.target;
    changeField(name, inputValue);
  };

  return (
    <div className="field">
      <input
        className="input"
        id={identifier}
        placeholder={placeholder}
        name={identifier}
        type={type}
        value={value}
        onChange={handleChange}
      />
      <label
        className="label"
        htmlFor={identifier}
      >
        {label}
      </label>
    </div>
  );
};

Field.propTypes = {
  identifier: PropTypes.string.isRequired, 
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,  
  type: PropTypes.string, 
  value: PropTypes.string,
  changeField: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
  value: '',
};

export default Field;
