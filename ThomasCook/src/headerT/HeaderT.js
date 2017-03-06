import React, {Component} from 'react';
import logo from './logo.png';
import './HeaderT.css';

class HeaderT extends Component {
    render() {
        return (
            <div className="Headercontainer">
                <div className="Headerfirst">
              <div className="Header">
                    {/*début du header haut  */}

                    <nav className="Headerlogo">
                        <a href="#">

                            <img src={logo} alt="logo"/>
                        </a>
                    </nav>
                    <nav className="HeaderNav">

                        <a href="#">
                            Newsletter
                        </a>

                        <div className="Agence">

                            <a href="https://agence.thomascook.fr">

                                Trouver une agence

                            </a>

                        </div>

                    </nav>
                    <div className="HeaderHoraires">
                        Lun - Ven 9h-22h
                        <br></br>
                        Sam & Dim 10h-18h
                        <br></br>
                        <span>
                            (Service 0,60€/ min + prix appel)</span>
                    </div>
                    <div className="HeaderContact">
                        <p>
                            CONTACTER UN CONSEILLER AU
                        </p>

                        <h4>0 892 701 088*</h4>
                    </div>

                    <div id="HeaderSocial">
                        <li>
                            <a href="#"><img src="http://www.thomascook.fr/fileadmin/template/css/images_new/picto_facebook.png" alt=""/></a>

                        </li>
                        <li>
                            <a href="#">
                                <img src="http://www.thomascook.fr/fileadmin/template/css/images_new/picto_twitter.png" alt=""/>
                            </a>

                        </li>

                    </div>

                    </div>
                    {/* fin du header */}
                    <nav id="Navheader">

                        <div className="Navmain">

                            <ul>
                                <li className="dropdown">
                                    <a href="#" class="dropbtn">SEJOURS</a>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#news">CLUBS</a>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </li>

                                <li className="dropdown">
                                    <a href="#" className="dropbtn">HOTELS</a>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropbtn">VOLS</a>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropbtn">WEEKS-END</a>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropbtn">CIRCUITS</a>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropbtn">CROISIERES</a>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropbtn">LOCATIONS</a>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropbtn">SUR-MESURE</a>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropbtn">DERNIERES</a>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropbtn">INSPIRATIONS</a>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        );

    }

}

export default HeaderT;
