
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Crypto Dashboard</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/overview">Overview</Link>
        <Link to="/history">History</Link>
      </nav>
    </header>
  );
};

export default Header;
