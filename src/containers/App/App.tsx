import { Component } from 'react';

import classes from './App.module.scss';
import Header from 'components/Header/Header';


import Footer from 'components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className={ classes.App } >
        <Header 
          color="blueviolet" 
          onClickHandler={ () => void undefined } />
        <Footer color="blueviolet" />
      </div>
    );
  }
}

export default App;


/* <header className={ classes.header } >

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
</header> */