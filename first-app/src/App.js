import React from 'react';
// import Buttons from './components/buttons';
// import Board from './components/Board';

import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer';


class App extends React.Component {

  render() {
    return(

      <div>
        <Header />
        <Main />
        <Footer />

      </div>




      // <div>
      // <h1>Hello</h1>
      // <p>hello to the website</p>
      // <Buttons />
      // <Buttons />
      // <Buttons />
      // <Board />
      
      // </div>
    )
  }
}

export default App;
