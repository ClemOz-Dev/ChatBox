import React from 'react';

import Field from 'src/components/Field';
import './settingsRegistration.scss';
import logo from 'src/assets/Chatbox.svg';

const SettingsRegistration = ({ email, password, submitForm, updateField }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };
  return (
    <div className="settingsRegistration">
      <img className="settingsRegistration--logo" src={logo} />
      <form
        className="settingsRegistration--loginForm"
        onSubmit={handleSubmit}
      >
        <Field
          type="email"
          identifier="email"
          placeholder=""
          label="Email"
          value={email}
          changeField={(identifier, newValue) => {
            updateField(identifier, newValue);
          }}
        />
        <Field
          type="password"
          identifier="password"
          placeholder=""
          label="Mot de passe"
          value={password}
          changeField={(identifier, newValue) => {
            updateField(identifier, newValue);
          }}
        />
        <button className="settingsRegistration--button" type="submit">Connexion</button>
        <p className="settingsRegistration--ToRegister">Pas encore de compte ? Inscris-toi !</p>
      </form>

    </div>
  )
};

export default SettingsRegistration;
