import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';
import netflix from './images/netflix-logo.png';
import avatar from './images/avatar.png';

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);

    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push('/')}
          className="nav__logo"
          src={netflix}
          alt="netflix-logo"
        />
        <img
          onClick={() => history.push('profile')}
          className="nav__avatar"
          src={avatar}
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
