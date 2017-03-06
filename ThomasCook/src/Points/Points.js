import React, {Component} from 'react';
import './Points.css';
import item1 from './Images/item1.png';
import item2 from './Images/item2.png';
import item3 from './Images/item3.png';
import item4 from './Images/item4.png';
import item5 from './Images/item5.png';

var MediaQuery = require('react-responsive');
var Points = React.createClass({

    render(){
    return(
        <div>

          <div className="five_point">
                  <h1 className="TH_five_point">L'AGENCE DE VOYAGE EN LIGNE THOMAS COOK EN 5 POINTS ESSENTIELS</h1>
                  <ul className="five_item">
                    <MediaQuery query='(min-device-width: 1224px)'>
                    <MediaQuery query='(orientation: portrait)'>
                      <li>
                        <img src={item1}/>
                          <p className="item_01">ZÉRO FRAIS DE DOSSIER</p>
                          <p className="b_item_01">EN LIGNE</p>
                      </li>
                    </MediaQuery>
                      <li>
                          <img src={item2}/>
                          <p className="item_02">À VOTRE ÉCOUTE</p>
                          <p className="b_item_02">7j/7</p>
                      </li>
                      <li>
                          <img src={item3}/>
                          <p className="item_03">RÉSEAU D'AGENCE</p>
                          <p className="b_item_03">À VOS CÔTÉS</p>
                      </li>
                      <li>
                          <img src={item4}/>
                          <p className="item_04">EXPERTISE et DIVERSITÉ</p>
                          <p className="b_item_04">DE L'OFFRE</p>
                      </li>
                      <li>
                          <img src={item5}/>
                          <p className="item_05">PIONNIER</p>
                          <p className="b_item_05">DU VOYAGE ORGANISÉ</p>
                      </li>
                    </MediaQuery>
                  </ul>
                  <div className="contact">
                      <p className="we_contact">NOUVEAU : contacter un conseiller</p>
                  </div>
                  <div className="five_point_text">
                      <p>Du Lundi au Vendredi de 9h à 22h</p>
                      <p>Et du Samedi au Dimanche de 10h à 18h</p>
                  </div>
        </div>
      </div>
    );
}
    });

export default Points;
