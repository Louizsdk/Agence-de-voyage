import React, { Component } from 'react';

////////// COMPONENTS
import Form from './form/Form.js';
import Concepts from './Concepts/Concepts.js'
import Zoom from './Zoom/Zoom.js';
import Footer from './footer/Footer.js';
import HeaderT from './headerT/HeaderT.js';
import Points from './Points/Points.js';
import Depart from './destinations/Depart/Depart.js';
import Sejours from './components/Sejours.js';



////////// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderT/>
        <div className="ri">
        <Form />
      </div>
      <Points/>
      <Depart/>
        <Zoom/>
        <Sejours/>
        <Concepts />
        <Footer />
      </div>
    );
  }
}

export default App;
