import React from 'react';
import { NavLink } from 'react-router-dom'

import './footer.scss';

const Footer = () => (
  <div className="footer">
    <NavLink to="/membres">Membres</NavLink>
    <NavLink to="/conversations">Conversations</NavLink>
    <NavLink to="/profil">Profil</NavLink>
    <NavLink to="/deconnexion">Déconnexion</NavLink>
  </div>
);

export default Footer;
