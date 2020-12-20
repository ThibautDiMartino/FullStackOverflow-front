import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../index.css';

function stick() {
  return (
    <div className="App">
      <body>
        <Header info="index" gender="female" />
        <div className="page-wrapper">
          <div className="page-inner">
            lol
          </div>
        </div>
        <Footer />
      </body>
    </div>
  );
}

export default stick;
