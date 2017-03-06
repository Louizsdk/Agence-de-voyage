import React, { Component } from 'react';

////////// COMPONENTS
import Form from './form/Form.js';
import Concepts from './Concepts/Concepts.js'
import Zoom from './Zoom/Zoom.js';
import Footer from './footer/Footer.js';



////////// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Zoom/>
        <Concepts />
        <Footer />
      </div>
    );
  }
}

export default App;
