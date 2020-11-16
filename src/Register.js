import React from 'react';
import './App.css';

function Register() {
  return (
    <div className="Register">
      <body className="App-form">

        <h1> Create an account</h1>
        <form>
          <div className="Register">
            <label htmlFor="Register">
              Email :
              <input type="text" name="name" />
            </label>

          </div>
          <div className="Register">
            <label htmlFor="Register">
              Password :
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label htmlFor="Register">
              Confirm Password :
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <input type="submit" value="Create" />
          </div>
        </form>
      </body>

    </div>
  );
}

export default Register;
