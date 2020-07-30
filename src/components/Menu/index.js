import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';
import Button from '../Button';

import './Menu.css';

// import ButtonLink from './components/ButtonLink/index';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Alura logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
