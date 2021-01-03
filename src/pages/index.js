import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';
import noughtsAndCrosses from '../images/game1.png';
import './i18nextConf';

function Home() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <body className="loginbg">
        <Header info="index" gender="" />
        <h1>
          {t('welcome')}
        </h1>
        <p>
          {t('pleaseSignUp')}
        </p>
        {/* eslint-disable global-require */}
        <img src={noughtsAndCrosses} alt="morpion game" className="fit-picture" />
        <Footer />
      </body>
    </div>
  );
}

export default Home;
