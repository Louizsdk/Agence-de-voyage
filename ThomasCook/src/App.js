import React, { Component } from 'react';
import './App.css';
import Zoom from './Zoom/Zoom.js';
import Concepts from './Concepts/Concepts.js'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Zoom/>
          <Concepts/>
      </div>
    );
  }
}

export default App;
