import React, { Component } from 'react';
import './App.css';
import Offre from './Offre/Offre.js';
import Destinations from './Destinations/Destinations.js';

class App extends Component {
  render() {
    return (
      <div className="App">
<div className="">
<div className="">
<div className="hr">
      <span className="hr_span">
        LA SÉLECTION THOMAS COOK AU DÉPART DE
      <span className="paris_drop libelle">
      PARIS
      </span>

      </span>

  </div>
  </div>
  </div>
      <Offre/>
      <Destinations/>
      </div>
    );
  }
}

export default App;
