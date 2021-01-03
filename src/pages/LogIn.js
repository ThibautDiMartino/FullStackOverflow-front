import React, { useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';

function LogIn() {
  const { t } = useTranslation();
  const [error, setError] = useState('');
  const [reqError, setReqError] = useState('');

  async function sendData() {
    const FD = new FormData();
    const XHR = new XMLHttpRequest();
    const object = {};
    let json = {};
    const password = document.getElementById('password');
    const email = document.getElementById('email');

    FD.append('email', email.value);
    FD.append('password', password.value);
    XHR.addEventListener('load', (event) => {
      if (event.target.responseText === '[]') {
        setError('active');
      } else {
        window.location.href = 'https://fullstackoverflow-back.herokuapp.com/dashboard';
      }
      return event;
    });
    XHR.addEventListener('error', () => {
      setReqError('active');
    });
    XHR.open('POST', 'https://fullstackoverflow-back.herokuapp.com/signin/login', true);
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
          {t('connectAccount')}
        </p>
        <form onSubmit={submit} id="form">
          <div className={`error ${error}`}>{t('userFailed')}</div>
          <div className={`error ${reqError}`}>{t('requestError')}</div>
          <div className="connectionWrapper">
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="password" name="password" id="password" placeholder="Password" />
          </div>
          <button
            type="submit"
            value="send"
            id="submit"
          >
            {t('connect')}
          </button>
        </form>
      </div>
      <div id="do-acc">
        {t('account')}
        <Link to="/signup">
          {t('create')}
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default LogIn;
