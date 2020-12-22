import React from 'react';
import './index.css';

function SignUp() {
  return (
    <div className="SignUp">
      <body className="App-form">

        <h1> Create an account</h1>
        <form action="/singnup" method="post">
          <div className="SignUp">
            <label htmlFor="SignUp">
              Email :
              <input type="text" name="name" />
            </label>

          </div>
          <div className="SignUp">
            <label htmlFor="SignUp">
              Password :
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label htmlFor="SignUp">
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

export default SignUp;
