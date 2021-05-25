import React from 'react';

import './field.scss';

const Field = ({ identifier, placeholder, label, type, value, changeField }) => {
  const handleChange = (event) => {
    const { value: inputValue, name } = event.target;
    changeField(name, inputValue);
  };
  return (
    <div className="field">
      <label
        className="label"
        htmlFor={identifier}
      >
        {label}
      </label>
      <input
        className="input"
        id={identifier}
        placeholder={placeholder}
        name={identifier}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Field;
