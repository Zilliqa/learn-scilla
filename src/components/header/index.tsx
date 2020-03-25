import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../routes';

const useClickOutside = (ref, callback) => {
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target) && callback) {
      callback();
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

const Header = (props) => {
  const [isTogglerOpen, setIsTogglerOpen] = useState(false);

  const togglerRef = useRef(null);

  useClickOutside(togglerRef, () => setIsTogglerOpen(false));

  const { location } = props;

  const { pathname } = location;
  const toggle = () => {
    setIsTogglerOpen(!isTogglerOpen);
  };

  return (
    <nav
      className={`navbar navbar-expand-md navbar-dark ${
        pathname === paths.home ? 'fixed-top' : ''
      }`}
      style={{ backgroundColor: '#162255' }}
      ref={togglerRef}
    >
      <Link className="navbar-brand" to={paths.home} aria-label={'brand'}>
        {'LearnScilla'}
      </Link>

      <button className="navbar-toggler" onClick={toggle} aria-label={'menu'}>
        <span className="navbar-toggler-icon" />
      </button>

      <div
        data-testid={`collapse-${isTogglerOpen ? 'opened' : 'closed'}`}
        className={`collapse ${isTogglerOpen ? 'show' : ''} navbar-collapse`}
      >
        <ul className="ml-auto navbar-nav">
          <li className="nav-item" style={{ marginLeft: '1rem' }}>
            <Link
              className={`nav-link ${pathname === paths.home ? 'active' : ''}`}
              to={paths.home}
              aria-label={'home'}
            >
              {'Home'}
            </Link>
          </li>

          <li className="nav-item" style={{ marginLeft: '1rem' }}>
            <a
              className={`nav-link ${pathname === paths.chapterList ? 'active' : ''}`}
              href={"http://learnblockchain.org/"}
              aria-label={'tutorial'}
            >
              {'Tutorial'}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
