import React from 'react';
import { NavLink } from 'react-router-dom'

import './footer.scss';

const Footer = ({ isConnected }) => (
  <div className="footer">
    {isConnected && <NavLink to="/membres">Membres</NavLink>}
    {!isConnected && <NavLink to="/">Se connecter</NavLink>}
    {!isConnected && <NavLink to="/inscription">S'inscrire</NavLink>}
    {isConnected && <NavLink to="/conversations">Conversations</NavLink>}
    {isConnected && <NavLink to="/deconnexion">Déconnexion</NavLink>}
  </div>
);

export default Footer;
