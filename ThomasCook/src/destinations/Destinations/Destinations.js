import React, {Component} from 'react';
import './Destinations.css';
import DestiRight from './Desti-Right.js';

class Destinations extends Component {
    render() {
        return (
            <div className="mainDesti">
                <div className="Destinations">
                    <div className="Destino-Left">

                        <div className="hr2">
                            <span className="hr_span">
                                NOS BONS PLANS VOL
                            </span>
                        </div>

                        <div className="Left">

                            <div className="Back-White">

                                <ul>
                                    <li>
                                        <a href="">
                                            <div className="line-vol">
                                                <p className="destin">
                                                    <span className="arrivals">Rome</span>
                                                    <span className="departures">De Paris</span>
                                                </p>
                                                <p className="dates">
                                                    <span className="date">Aller :
                                                        <strong>21 Avril</strong>
                                                    </span>
                                                    <span className="date">Retour :
                                                        <strong>28 Avril</strong>
                                                    </span>
                                                </p>
                                                <p className="logo">
                                                    <img
                                                        className="imgs"
                                                        src="http://www.thomascook.fr/fileadmin/image/logo-compagnies/vols/logo_vy.png"
                                                        alt=""/>
                                                </p>
                                                <p className="pricing">
                                                    <span className="apartirde">Des</span>
                                                    <span>120€</span>
                                                    <span className="asterisque">*</span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <div className="line-vol">
                                                <p className="destin">
                                                    <span className="arrivals">Rome</span>
                                                    <span className="departures">De Paris</span>
                                                </p>
                                                <p className="dates">
                                                    <span className="date">Aller :
                                                        <strong>21 Avril</strong>
                                                    </span>
                                                    <span className="date">Retour :
                                                        <strong>28 Avril</strong>
                                                    </span>
                                                </p>
                                                <p className="logo">
                                                    <img
                                                        className="imgs"
                                                        src="http://www.thomascook.fr/fileadmin/image/logo-compagnies/vols/logo_vy.png"
                                                        alt=""/>
                                                </p>
                                                <p className="pricing">
                                                    <span className="apartirde">Des</span>
                                                    <span>120€</span>
                                                    <span className="asterisque">*</span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <div className="line-vol">
                                                <p className="destin">
                                                    <span className="arrivals">Rome</span>
                                                    <span className="departures">De Paris</span>
                                                </p>
                                                <p className="dates">
                                                    <span className="date">Aller :
                                                        <strong>21 Avril</strong>
                                                    </span>
                                                    <span className="date">Retour :
                                                        <strong>28 Avril</strong>
                                                    </span>
                                                </p>
                                                <p className="logo">
                                                    <img
                                                        className="imgs"
                                                        src="http://www.thomascook.fr/fileadmin/image/logo-compagnies/vols/logo_vy.png"
                                                        alt=""/>
                                                </p>
                                                <p className="pricing">
                                                    <span className="apartirde">Des</span>
                                                    <span>120€</span>
                                                    <span className="asterisque">*</span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <div className="line-vol">
                                                <p className="destin">
                                                    <span className="arrivals">Rome</span>
                                                    <span className="departures">De Paris</span>
                                                </p>
                                                <p className="dates">
                                                    <span className="date">Aller :
                                                        <strong>21 Avril</strong>
                                                    </span>
                                                    <span className="date">Retour :
                                                        <strong>28 Avril</strong>
                                                    </span>
                                                </p>
                                                <p className="logo">
                                                    <img
                                                        className="imgs"
                                                        src="http://www.thomascook.fr/fileadmin/image/logo-compagnies/vols/logo_vy.png"
                                                        alt=""/>
                                                </p>
                                                <p className="pricing">
                                                    <span className="apartirde">Des</span>
                                                    <span>120€</span>
                                                    <span className="asterisque">*</span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <p className="see-More">
                                <a href="" className="btn_More">Voir tous nos bons plans</a>
                            </p>

                        </div>

                    </div>

<DestiRight/>

                </div>
            </div>
        );
    }

}

export default Destinations;