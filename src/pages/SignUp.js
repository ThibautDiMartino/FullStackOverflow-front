import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SignUp() {
  return (
    <div className="App">
      <Header />
      <div id="connection-form">
        <p>Create your account:</p>
        <form>
          <input type="text" name="pseudo" id="pseudo" placeholder="Nickname" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="password" name="password" id="password" placeholder="Password" />
          <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm password" />
        </form>
        <input type="button" value="Create" />
      </div>
      <div id="do-acc">
        Already have an account?
        <Link to="/login"> Connect</Link>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
