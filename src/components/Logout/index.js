// == Import npm
import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons'
// == Import
import './logout.scss';

// == Composant
const Logout = ({ disconnectUser, clearConv }) => {
  const history = useHistory();

  useEffect(() => {
    clearConv();
  }, []);

  const handleClick = () => {
    history.push('/');
    disconnectUser();
    window.localStorage.clear()
  };

  return (
    <div className="logout">
      <div className="confirmation">
        <p className="text">Quitter ChatBox ?</p>
        <div className="check-mark"> <FontAwesomeIcon icon={faCat} /></div>
        <button
          type="button"
          className="link"
          onClick={handleClick}
        >
          Confirmer
        </button>
      </div>

    </div>
  )
};

// == Export
export default Logout;
