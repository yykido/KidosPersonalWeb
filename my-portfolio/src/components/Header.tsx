import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <header>
      <div className="header-content">
        <div className="logo">STEFANO YE</div>
        <nav>
          <Link to="/" className={activeLink === '/' ? 'active' : ''} onClick={() => handleClick('/')}>HOME</Link>
          <Link to="/story" className={activeLink === '/story' ? 'active' : ''} onClick={() => handleClick('/story')}>STORY</Link>
          <Link to="/workflow" className={activeLink === '/workflow' ? 'active' : ''} onClick={() => handleClick('/workflow')}>WORKFLOW</Link>
          <Link to="/projects" className={activeLink === '/projects' ? 'active' : ''} onClick={() => handleClick('/projects')}>PROJECTS</Link>
          <Link to="/experience" className={activeLink === '/experience' ? 'active' : ''} onClick={() => handleClick('/experience')}>EXPERIENCE</Link>
          <Link to="/skills" className={activeLink === '/skills' ? 'active' : ''} onClick={() => handleClick('/skills')}>SKILLS</Link>
          <Link to="/contact" className={activeLink === '/contact' ? 'active' : ''} onClick={() => handleClick('/contact')}>CONTACTS</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;