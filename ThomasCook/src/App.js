import React, { Component } from 'react';
import Footer from './footer/Footer.js';
import Zoom from './Zoom/Zoom.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Zoom />
      <Footer />
      </div>
    );
  }
}

export default App;
