import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

function LogIn() {
  const { t } = useTranslation();
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
      alert(event.target.responseText);
      if (event.target.responseText === '[]') {
        alert(t('userFailed'));
      } else {
        window.location.href = 'http://localhost:3001/dashboard';
      }
      return event;
    });
    XHR.addEventListener('error', () => {
      alert(t('requestError'));
    });
    XHR.open('POST', 'http://localhost:3000/signin/login', true);
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
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="password" name="password" id="password" placeholder="Password" />
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

// LogIn.propTypes = {
//   history: PropTypes.isRequired,

// };

export default LogIn;
