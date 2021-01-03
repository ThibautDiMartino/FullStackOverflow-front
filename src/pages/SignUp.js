import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SignUp() {
  const { t } = useTranslation();
  const [error, setError] = useState('');
  const [reqError, setReqError] = useState('');

  async function sendData() {
    const FD = new FormData();
    const XHR = new XMLHttpRequest();
    const object = {};
    let json = {};
    const firstname = document.getElementById('firstName');
    const lastname = document.getElementById('lastName');
    const password = document.getElementById('password');
    const gender = document.getElementById('gender');
    const email = document.getElementById('email');

    FD.append('firstName', firstname.value);
    FD.append('lastName', lastname.value);
    FD.append('gender', gender.value);
    FD.append('email', email.value);
    FD.append('password', password.value);
    XHR.addEventListener('load', (event) => {
      if (event.target.responseText === '409: Already exists') {
        setError('active');
      } else {
        window.location.href = 'https://fullstackoverflow-back.herokuapp.com/dashboard';
      }
    });
    XHR.addEventListener('error', () => {
      setReqError('active');
    });
    XHR.open('POST', 'https://fullstackoverflow-back.herokuapp.com/signup', true);
    XHR.setRequestHeader('Content-Type', 'application/json');
    FD.forEach((value, key) => {
      object[key] = value;
    });
    json = JSON.stringify(object);
    XHR.send(json);
  }

  function submit(event) {
    event.preventDefault();
    sendData();
  }

  return (
    <div className="App">
      <Header info="index" gender="" />
      <div id="connection-form">
        <p>
          {t('createAccount')}
        </p>
        <form onSubmit={submit} id="form" name="form">
          <div className={`error ${error}`}>{t('userExists')}</div>
          <div className={`error ${reqError}`}>{t('requestError')}</div>
          <input type="text" name="firstName" id="firstName" placeholder={t('firstname')} />
          <input type="text" name="lastName" id="lastName" placeholder={t('lastname')} />
          <input type="email" name="email" id="email" placeholder={t('email')} />
          <select className="gender" name="gender" id="gender">
            <option selected>{t('gender')}</option>
            <option>{t('male')}</option>
            <option>{t('female')}</option>
          </select>
          <input type="password" name="password" id="password" placeholder={t('password')} />
          <input type="password" name="confirm-password" id="confirm-password" placeholder={t('confirmPassword')} />
          <button type="submit" value="send" id="submit">
            {t('createButton')}
          </button>
        </form>
      </div>
      <div id="do-acc">
        {t('alreadyHaveAccount')}
        <Link to="/login">
          {t('connect')}
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
