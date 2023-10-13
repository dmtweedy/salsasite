import React, { useState } from 'react';
import Navigation from './Navigation';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <header className="header">
      <Navbar bg="green" expand="lg" expanded={expanded}>
        <Navbar.Brand href="/">Damon Tweedy</Navbar.Brand>
        <Navbar.Toggle
          style={{ backgroundColor: 'green' }}
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navigation onItemClick={handleNavItemClick} />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;