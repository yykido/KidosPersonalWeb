import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-content">
        <div className="logo">STEFANO YE</div>
        <nav>
          <Link to="/">STORY</Link>
          <Link to="/workflow">WORKFLOW</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/experience">EXPERIENCE</Link>
          <Link to="/skills">SKILLS</Link>
          <Link to="/contact">CONTACTS</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;