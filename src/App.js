import React from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Counter from './components/counter/Counter';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
