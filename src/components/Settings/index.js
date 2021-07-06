import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';

import Field from 'src/components/Field';
import './settings.scss';
import logo from 'src/assets/Chatbox.svg';

const Settings = ({
  email,
  password,
  errorMessage,
  setErrorMessage,
  submitForm,
  updateField
}) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setOpen((o) => !o);
      // console.log("nope");
    }
    // console.log("yes");
    submitForm();
  };
  return (
    <div className="settings">
      <img className="settings--logo" src={logo} alt="cut cat" />
      <form
        className="settings--loginForm"
        onSubmit={handleSubmit}
      >
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div className="modal">
            <a className="close" onClick={closeModal}>&times;
            </a>{errorMessage}
          </div>
        </Popup>

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
  );
};

export default Settings;
