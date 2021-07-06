import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import validator from 'validator';
import Popup from 'reactjs-popup';

import Field from 'src/components/Field';
import './settingsRegistration.scss';
import logo from 'src/assets/Chatbox.svg';

const SettingsRegistration = ({
  email,
  password,
  nickname,
  submitForm,
  updateField,
  errorMessage,
  setErrorMessage }) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })) {
      submitForm();
    } else {
      setErrorMessage('Mot de passe: au moins 8 caractères, dont 1 chiffre, 1 majuscule, 1 minuscule, 1 caractère spécial')
    }
    if (!errorMessage) {
      setOpen((o) => !o);
    }
  };

  return (
    <div className="settingsRegistration">
      <img className="settingsRegistration--logo" src={logo} alt="cut cat" />
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

        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div className="modal">
            <a className="close" onClick={closeModal}>&times;
            </a>{errorMessage}
          </div>
        </Popup>

        <Field
          type="text"
          identifier="nickname"
          placeholder=""
          label="Pseudonyme"
          value={nickname}
          changeField={(identifier, newValue) => {
            updateField(identifier, newValue);
          }}
        />
        <button className="settingsRegistration--button" type="submit">Envoyer</button>
        <NavLink to="/" className="settingsRegistration--ToLogin">Déjà inscrit ? Connecte-toi !</NavLink>
      </form>

    </div>
  );
};

export default SettingsRegistration;
