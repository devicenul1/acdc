import { Component } from 'react';
import logo from './logo.svg';
import classes from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={ classes.App } >
        <header className={ classes.header } >
          <img src={logo} className={ classes.logo } alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
