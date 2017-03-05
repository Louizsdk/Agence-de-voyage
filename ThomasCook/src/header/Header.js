import React, { Component } from 'react';

import './Header.css';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';


class Header extends Component {
  render() {
    return (

        <ul className="main-nav group">
          <li className="sejour"><a href="#">séjour</a>

            <ul className="hyper-nav group">
              <li>
                <h3 className="title">nos idées séjours</h3>
                <ul>
                  <li><a href="#">Offres à petits prix</a></li>
                  <li><a href="#">Vacances en solo</a></li>
                  <li><a href="#">Vacances en amoureux</a></li>
                  <li><a href="#">Vacances en famille</a></li>
                  <li><a href="#">Vacances de rêve</a></li>
                  <li><a href="#">Vacance au soleil</a></li>
                  <li><a href="#">Partez deux semaines</a></li>
                </ul>
              </li>

              <li>
                <h3>nos top 10 destinations</h3>
                <ul>
                  <li><a href="#">Espagne</a></li>
                  <li><a href="#">Grèce</a></li>
                  <li><a href="#">Baléares</a></li>
                  <li><a href="#">Italie</a></li>
                  <li><a href="#">Portugal</a></li>
                  <li><a href="#">Canaries</a></li>
                  <li><a href="#">Thaïlande</a></li>
                  <li><a href="#">Maurice</a></li>
                  <li><a href="#">Cuba</a></li>
                  <li><a href="#">Maldives</a></li>
                </ul>
              </li>

              <li className="selection">
                <h3>Notre sélection</h3>
                <ul>
                  <li><a href="#"><img src={img1} alt="" /></a></li>
                  <li><a href="#"><img src={img2} alt="" /></a></li>
                  <li><a href="#"><img src={img3} alt="" /></a></li>
                  <li><a href="#"><img src={img4} alt="" /></a></li>
                </ul>
              </li>
            </ul>

          </li>

          <li><a href="#">clubs</a></li>
          <li><a href="#">ski</a></li>
          <li><a href="#">hôtel</a></li>
          <li><a href="#">vols</a></li>
          <li><a href="#">week-ends</a></li>
          <li><a href="#">circuits</a></li>
          <li><a href="#">croisière</a></li>
          <li><a href="#">locations</a></li>
          <li><a href="#">sur-mesure</a></li>
          <li><a href="#">dernière minute</a></li>
          <li><a href="#">inspirations</a></li>

        </ul>



    );
  }
}

export default Header;
