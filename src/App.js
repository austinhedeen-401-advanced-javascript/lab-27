import React from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Counter from './components/counter/Counter';

import './app.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Counter />
        <Footer />
      </>
    );
  }
}

export default App;
