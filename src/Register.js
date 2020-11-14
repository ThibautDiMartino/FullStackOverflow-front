import './App.css';

function Register() {
  return (
    <div className="App">
      <header>
      </header>
      <body className="App-form">

      <h1> Create an account</h1>
      <form>
        <div className="App">
          <label className="App">
            Email : 
            <input type="text" name="name" />
          </label>
        </div>
        <div className="App">
          <label className="App">
            Password : 
            <input type="text" name="name" />
          </label>
        </div>
        <label className="App">
          Confirm Password : 
          <input type="text" name="name" />
        </label>
      <div>
        <input type="submit" value="Create" />
      </div>
      </form>
      </body>

    </div>
  );
}

export default Register;
