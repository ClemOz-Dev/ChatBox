import React from 'react';
import { NavLink } from 'react-router-dom';

import Field from 'src/components/Field';
import './settings.scss';
import logo from 'src/assets/Chatbox.svg';

const Settings = ({ email, password, submitForm, updateField }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };
  return (
    <div className="settings">
      <img className="settings--logo" src={logo} />
      <form
        className="settings--loginForm"
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
        <button className="settings--button" type="submit">Connexion</button>
        <NavLink to="/inscription" className="settings--ToRegister">Pas encore de compte ? Inscris-toi !</NavLink>
      </form>

    </div>
  )
};

export default Settings;
