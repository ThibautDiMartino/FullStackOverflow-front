import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <body className="App-form">

        <h1> Create an account</h1>
        <form>
          <div className="App">
            <label htmlFor="App">
              Email :
              <input type="text" name="name" />
            </label>

          </div>
          <div className="App">
            <label htmlFor="App">
              Password :
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label htmlFor="App">
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

export default App;
