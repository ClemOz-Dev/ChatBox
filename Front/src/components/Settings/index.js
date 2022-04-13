import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Field from 'src/components/Field';

import './settings.scss';

const Settings = ({
  open,
  toggleOpen,
  email,
  password,
  updateSettingsField,
  submitLogin,
}) => {
  const cssClassButton = classNames('settings-toggle', {
    'settings-toggle-open': open,
  });
  
  const cssClassDiv = classNames('settings', {
    'settings--open': open,
  });

  return (
    <div className={cssClassDiv}>
      <button
        type="button"
        className={cssClassButton}
        onClick={() => {
          toggleOpen();
        }}
      >
        +
      </button>
      <form
        className="settings-form"
        onSubmit={(event) => {
          event.preventDefault();
          submitLogin();
        }}
      >
        <Field
          identifier="email"
          placeholder="superchat@oclock.io"
          label="Adresse e-mail"
          value={email}
          changeField={(identifier, newValue) => {           
            updateSettingsField(identifier, newValue);
          }}
        />
        <Field
          identifier="password"
          placeholder=""
          label="Mot de passe"
          type="password"
          value={password}
          changeField={(identifier, newValue) => {         
            updateSettingsField(identifier, newValue);
          }}
        />
        <button type="submit" className="settings-submit">Envoyer</button>
      </form>
    </div>
  );
};

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateSettingsField: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired,
};

export default Settings;
