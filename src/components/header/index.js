import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/product-list">Lista de produtos</Link>
      </li>
      <li>
        <Link to="/contact">Contatos</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
