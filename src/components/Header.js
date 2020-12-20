import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
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
  const [cancel, setCancel] = useState('deactivate');
  const [edit, setEdit] = useState('');
  const [fieldUpdate, setFieldUpdate] = useState('disabled');
  const [save, setSave] = useState('deactivate');

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

  function saveProfile() {
    return 0;
  }

  function onEdit() {
    if (cancel === 'deactivate' && edit === '') {
      setFieldUpdate('');
      setSave('');
      setCancel('');
      setEdit('deactivate');
    } else {
      setSave('deactivate');
      setCancel('deactivate');
      setEdit('');
      setFieldUpdate('disabled');
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
                <label htmlFor="upload-pic">
                  <FontAwesomeIcon className="cam-icon" icon={faCamera} />
                  <div className="upload-pic-overlay">Change profile pic</div>
                  <div
                    className="profile-pic-wrapper"
                    style={{ backgroundImage: `url(${po === '' ? pp : po})` }}
                  />
                  <input type="file" id="upload-pic" multiple accept=".jpg, .png, jpeg" />
                </label>
              </div>
              <div className="profile-infos">
                <input type="email" placeholder="Email" value="thibaut.dimartino@epitech.eu" disabled={fieldUpdate} />
                <input type="password" placeholder="Password" value="********" disabled={fieldUpdate} />
                <input type="text" placeholder="Nickname" value="Snass" disabled={fieldUpdate} />
                <div className="profile-update">
                  <input type="button" value="Save" className={`save ${save}`} onClick={saveProfile} />
                  <input type="button" value="Edit" className={`edit ${edit}`} onClick={onEdit} />
                  <input type="button" value="Cancel" className={`cancel ${cancel}`} onClick={onEdit} />
                </div>
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
            <label className="switch" htmlFor="dark">
              <input type="checkbox" id="dark" />
              <span className="slider round"> </span>
            </label>
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
                <FontAwesomeIcon className="icon-drop" icon={faUser} />
                <span>Profile</span>
              </button>
            </li>
            <li>
              <Link className="link-drop" to="/dashboard">
                <button type="button">
                  <FontAwesomeIcon className="icon-drop" icon={faTable} />
                  <span>Dashboard</span>
                </button>
              </Link>
            </li>
            <li>
              <button type="button" className="drop-link" onClick={showsettings}>
                <FontAwesomeIcon className="icon-drop" icon={faCog} />
                <span>Settings</span>
              </button>
            </li>
            <li>
              <Link className="link-drop" to="/">
                <button type="button">
                  <FontAwesomeIcon className="icon-drop" icon={faSignOutAlt} />
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
