// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Navigation({ onItemClick }) {
  const handleItemClick = () => {
    // Call the parent component's function to close the navigation menu
    onItemClick();
  };

  return (
    <Nav>
      <Nav.Item>
        <Link to="/about" className="nav-link" onClick={handleItemClick}>
          About Me
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/portfolio" className="nav-link" onClick={handleItemClick}>
          My Projects
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contact" className="nav-link" onClick={handleItemClick}>
          Contact
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;