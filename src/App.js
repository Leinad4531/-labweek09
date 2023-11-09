import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Student from './Student';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       </header>
        <Fragment>
          <h1>Welcome to Fullstack Development -1</h1>
          <h2>React JS Programming Week09 Lab exercise</h2>
          <Student></Student>
        </Fragment>
    </div>
  );
}

export default App;
