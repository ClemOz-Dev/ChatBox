// == Import npm
import React from 'react';

// == Import
import LostCat from 'src/assets/lostcat.gif';
import './err404.scss';

// == Composant
const Err404 = () => (
  <div className="err404">
    <h1 className="err404--title">404</h1>
    <img className="err404--image" src={LostCat} alt="cat searching" />
    <p className="err404--text">Tu es perdu mon ami ?</p>
  </div>
);

// == Export
export default Err404;
