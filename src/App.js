import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import { Banner } from './Body'
const App = () => {
  return (
    <div className="App">
      <Header />
      <body>
        <Banner imgUrl={'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'} />
      </body>
      <Footer />
    </div>
  );
}

export default App;
