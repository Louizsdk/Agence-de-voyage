import React, { Component } from 'react';
import Footer from './footer/Footer.js';
import Zoom from './Zoom/Zoom.js';
import './App.css';
import Concepts from './Concepts/Concepts.js'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Zoom/>
          <Concepts/>
          <Footer />

      </div>
    );
  }
}

export default App;
