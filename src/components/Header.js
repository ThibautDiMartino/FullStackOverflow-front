import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog,
  faSignOutAlt,
  faTable,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import female from '../images/m1.jpg';
import male from '../images/m2.jpg';
import pp from '../images/m7.jpg';
import po from '../images/po.jpg';

// eslint-disable-next-line
function Header({info, gender}) {

  const [drop, setDrop] = useState('');
  const [profile, setProfile] = useState('');
  const [settings, setSettings] = useState('');

  function NotLoggedHeader() {
    return (
      <ul className="topnav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="right">
          <Link to="/signup">Sign Up</Link>
        </li>
        <li className="right">
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    );
  }

  // function handleKeyDown(event) {
  //   if (event) {
  //     return 0;
  //   }
  //   return 0;
  // }

  function showDrop() {
    if (drop === '') {
      setDrop('active');
    } else {
      setDrop('');
    }
  }

  function showProfile() {
    if (profile === '') {
      setProfile('active');
    } else {
      setProfile('');
    }
  }

  function showsettings() {
    if (settings === '') {
      setSettings('active');
    } else {
      setSettings('');
    }
  }

  function Profile() {
    return (
      <div id="profile" className={profile}>
        <button type="button" className="exit-modal" onClick={showProfile}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="page-wrapper">
          <div className="page-inner">
            <div className="profile-wrapper">
              <div className="profile-pic">
                <img src={po === '' ? pp : po} alt="Profile pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Settings() {
    return (
      <div id="settings" className={settings}>
        <button type="button" className="exit-modal" onClick={showsettings}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="page-wrapper">
          <div className="page-inner">
            <span>lol</span>
          </div>
        </div>
      </div>
    );
  }

  // eslint-disable-next-line
  function LoggedHeader({gender}) {
    return (
      <ul className="topnav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="right">
          <button type="button" onClick={showDrop}>
            <img src={gender === 'female' ? female : male} alt="morpion game" className="user-icon" />
          </button>
          <ul className={`dropdown ${drop}`}>
            <li>
              <button className="drop-link" type="button" onClick={showProfile}>
                <FontAwesomeIcon icon={faUser} style={{ color: 'white', marginRight: 10, fontSize: 30 }} />
                <span>Profile</span>
              </button>
            </li>
            <li>
              <Link to="/dashboard">
                <button type="button">
                  <FontAwesomeIcon icon={faTable} style={{ color: 'white', marginRight: 10, fontSize: 30 }} />
                  <span>Dashboard</span>
                </button>
              </Link>
            </li>
            <li>
              <button type="button" className="drop-link" onClick={showsettings}>
                <FontAwesomeIcon icon={faCog} style={{ color: 'white', marginRight: 10, fontSize: 30 }} />
                <span>Settings</span>
              </button>
            </li>
            <li>
              <Link to="/">
                <button type="button">
                  <FontAwesomeIcon icon={faSignOutAlt} style={{ color: 'white', marginRight: 10, fontSize: 30 }} />
                  <span>Log out</span>
                </button>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
  if (info === 'dash') {
    return (
      <div>
        <Settings />
        <Profile />
        <LoggedHeader gender={gender} />
      </div>
    );
  }
  return (
    <div>
      <NotLoggedHeader />
    </div>
  );
}

export default Header;
