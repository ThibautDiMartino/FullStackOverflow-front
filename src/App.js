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
            <label className="App">
              Email :
            </label>
            <input type="text" name="name" />
          </div>
          <div className="App">
            <label className="App">
              Password :
            </label>
            <input type="text" name="name" />
          </div>
          <div>
            <label className="App">
              Confirm Password :
            </label>
            <input type="text" name="name" />
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
