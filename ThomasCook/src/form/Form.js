import React, { Component } from 'react';
import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';
import Depart from './datepicker/Date.js';
import './Form.css';


class Form extends Component {

  render() {
    return (

        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">

          <Tab eventKey={1} title="SÉJOUR">

            <form name="benguine">

              <div className="basic-fields group">

                <p className="col-voyage">
                  <input type="text" class="formDestination" name="destination" placeholder="Destination"/>
                </p>

                <p className="col-depart">
                  <select className="selectAirport" name="airport">
                    <option value="-1">Au départ de : Paris</option>
                    <option value="AJA">Ajaccio</option>
                    <option value="BSL,MLH">Bâle-Mulhouse</option>
                    <option value="BCN">Bastia</option>
                    <option value="BIA">Biarritz</option>
                    <option value="BIQ">Bilbao</option>
                    <option value="BIO">Bordeaux</option>
                    <option value="BES">Brest</option>
                  </select>
                </p>

                <p className="col-datedepart">
                  <Depart />
                </p>

                <p className="col-duree">
                  <select className="selLength" name="stayLenght" data-prefix="Durée : ">
                    <option value="-1">1 semaine</option>
                    <option value="6_7">Indifférente</option>
                    <option value="6_14">2 semaines</option>
                    <option value="17">3 à 5 jours</option>
                    <option value="1">6 à 8 jours</option>
                    <option value="2">9 à 12 jours</option>
                    <option value="15">13 à 15 jours</option>
                    <option value="12">16 à 22 jours </option>
                    <option value="13">> 22 jours </option>
                  </select>
                </p>

                <p className="col-flexibilite">
                  <select className="selectFlex" name="flexibility" data-prefix="Flexibilité : ">
                    <option value="1">+/- 0 jour</option>
                    <option value="4">+/- 1 jour</option>
                    <option value="5">+/- 2 jours</option>
                    <option value="2">+/- 3 jours</option>
                    <option value="6">+/- 4 jours</option>
                    <option value="7">+/- 5 jours</option>
                    <option value="8">+/- 6 jorus</option>
                    <option value="3">+/- 7 jours</option>
                  </select>
                </p>

                <p className="col-voyageurs">
                  <select className="voyageur-selecteur" name="voyageur-selecteur" data-prefix="2 adultes : ">
                    <option value="1">Selection voyageur</option>
                    <option value="4">Selection voyageur</option>
                    <option value="5">Selection voyageur</option>
                  </select>
                </p>

                <p class="col-submit"><button className="btn-form" type="submit">J'y vais</button></p>

              </div>
            </form>
          </Tab>

          <Tab eventKey={2} title="CIRCUIT">
            <form name="benguine">
              <div className="basic-fields group">

                <p className="col-voyage">
                  <input type="text" class="formDestination" name="destination" placeholder="Destination"/>
                </p>

                <p className="col-depart">
                  <select className="selectAirport" name="airport">
                    <option value="-1">Au départ de : Paris</option>
                    <option value="AJA">Ajaccio</option>
                    <option value="BSL,MLH">Bâle-Mulhouse</option>
                    <option value="BCN">Bastia</option>
                    <option value="BIA">Biarritz</option>
                    <option value="BIQ">Bilbao</option>
                    <option value="BIO">Bordeaux</option>
                    <option value="BES">Brest</option>
                  </select>
                </p>

                <p className="col-datedepart">
                  <Depart />
                </p>

                <p className="col-duree">
                  <select className="selLength" name="stayLenght" data-prefix="Durée : ">
                    <option value="-1">1 semaine</option>
                    <option value="6_7">Indifférente</option>
                    <option value="6_14">2 semaines</option>
                    <option value="17">3 à 5 jours</option>
                    <option value="1">6 à 8 jours</option>
                    <option value="2">9 à 12 jours</option>
                    <option value="15">13 à 15 jours</option>
                    <option value="12">16 à 22 jours </option>
                    <option value="13">> 22 jours </option>
                  </select>
                </p>

                <p className="col-flexibilite">
                  <select className="selectFlex" name="flexibility" data-prefix="Flexibilité : ">
                    <option value="1">+/- 0 jour</option>
                    <option value="4">+/- 1 jour</option>
                    <option value="5">+/- 2 jours</option>
                    <option value="2">+/- 3 jours</option>
                    <option value="6">+/- 4 jours</option>
                    <option value="7">+/- 5 jours</option>
                    <option value="8">+/- 6 jorus</option>
                    <option value="3">+/- 7 jours</option>
                  </select>
                </p>

                <p className="col-voyageurs">
                  <select className="voyageur-selecteur" name="voyageur-selecteur" data-prefix="2 adultes : ">
                    <option value="1">Selection voyageur</option>
                    <option value="4">Selection voyageur</option>
                    <option value="5">Selection voyageur</option>
                  </select>
                </p>

                <p class="col-submit"><button className="btn-form" type="submit">J'y vais</button></p>

              </div>
            </form>
          </Tab>

          <Tab eventKey={3} title="HÔTEL">
            <form name="benguine">
              <div className="basic-fields group">

                <p className="col-voyage">
                  <input type="text" class="formDestination" name="destination" placeholder="Destination"/>
                </p>

                <p className="col-depart">
                  <select className="selectAirport" name="airport">
                    <option value="-1">Au départ de : Paris</option>
                    <option value="AJA">Ajaccio</option>
                    <option value="BSL,MLH">Bâle-Mulhouse</option>
                    <option value="BCN">Bastia</option>
                    <option value="BIA">Biarritz</option>
                    <option value="BIQ">Bilbao</option>
                    <option value="BIO">Bordeaux</option>
                    <option value="BES">Brest</option>
                  </select>
                </p>

                <p className="col-datedepart">
                  <Depart />
                </p>

                <p className="col-duree">
                  <select className="selLength" name="stayLenght" data-prefix="Durée : ">
                    <option value="-1">1 semaine</option>
                    <option value="6_7">Indifférente</option>
                    <option value="6_14">2 semaines</option>
                    <option value="17">3 à 5 jours</option>
                    <option value="1">6 à 8 jours</option>
                    <option value="2">9 à 12 jours</option>
                    <option value="15">13 à 15 jours</option>
                    <option value="12">16 à 22 jours </option>
                    <option value="13">> 22 jours </option>
                  </select>
                </p>

                <p className="col-flexibilite">
                  <select className="selectFlex" name="flexibility" data-prefix="Flexibilité : ">
                    <option value="1">+/- 0 jour</option>
                    <option value="4">+/- 1 jour</option>
                    <option value="5">+/- 2 jours</option>
                    <option value="2">+/- 3 jours</option>
                    <option value="6">+/- 4 jours</option>
                    <option value="7">+/- 5 jours</option>
                    <option value="8">+/- 6 jorus</option>
                    <option value="3">+/- 7 jours</option>
                  </select>
                </p>

                <p className="col-voyageurs">
                  <select className="voyageur-selecteur" name="voyageur-selecteur" data-prefix="2 adultes : ">
                    <option value="1">Selection voyageur</option>
                    <option value="4">Selection voyageur</option>
                    <option value="5">Selection voyageur</option>
                  </select>
                </p>

                <p class="col-submit"><button className="btn-form" type="submit">J'y vais</button></p>

              </div>
            </form>
          </Tab>

          <Tab eventKey={4} title="WEEK-ENDS">
            <form name="benguine">
              <div className="basic-fields group">

                <p className="col-voyage">
                  <input type="text" class="formDestination" name="destination" placeholder="Destination"/>
                </p>

                <p className="col-depart">
                  <select className="selectAirport" name="airport">
                    <option value="-1">Au départ de : Paris</option>
                    <option value="AJA">Ajaccio</option>
                    <option value="BSL,MLH">Bâle-Mulhouse</option>
                    <option value="BCN">Bastia</option>
                    <option value="BIA">Biarritz</option>
                    <option value="BIQ">Bilbao</option>
                    <option value="BIO">Bordeaux</option>
                    <option value="BES">Brest</option>
                  </select>
                </p>

                <p className="col-datedepart">
                  <Depart />
                </p>

                <p className="col-duree">
                  <select className="selLength" name="stayLenght" data-prefix="Durée : ">
                    <option value="-1">1 semaine</option>
                    <option value="6_7">Indifférente</option>
                    <option value="6_14">2 semaines</option>
                    <option value="17">3 à 5 jours</option>
                    <option value="1">6 à 8 jours</option>
                    <option value="2">9 à 12 jours</option>
                    <option value="15">13 à 15 jours</option>
                    <option value="12">16 à 22 jours </option>
                    <option value="13">> 22 jours </option>
                  </select>
                </p>

                <p className="col-flexibilite">
                  <select className="selectFlex" name="flexibility" data-prefix="Flexibilité : ">
                    <option value="1">+/- 0 jour</option>
                    <option value="4">+/- 1 jour</option>
                    <option value="5">+/- 2 jours</option>
                    <option value="2">+/- 3 jours</option>
                    <option value="6">+/- 4 jours</option>
                    <option value="7">+/- 5 jours</option>
                    <option value="8">+/- 6 jorus</option>
                    <option value="3">+/- 7 jours</option>
                  </select>
                </p>

                <p className="col-voyageurs">
                  <select className="voyageur-selecteur" name="voyageur-selecteur" data-prefix="2 adultes : ">
                    <option value="1">Selection voyageur</option>
                    <option value="4">Selection voyageur</option>
                    <option value="5">Selection voyageur</option>
                  </select>
                </p>

                <p class="col-submit"><button className="btn-form" type="submit">J'y vais</button></p>

              </div>
            </form>
          </Tab>
        </Tabs>


    );
  }
}

export default Form;
