import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';

function NotFound() {
  return (
    <div className="App 404">
      <Header />
      <div className="nf-wrapper">
        <div className="nf-inner">
          <h1>404</h1>
          <span>This page is either not available or doesn&apos;t exist</span>
          <Link to="/">
            <input type="button" value="Go to home page" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
