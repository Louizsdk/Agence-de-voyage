import React, { Component } from 'react';
import './Zoom.css';
import Slider from './Zoomslider';

class Zoom extends Component {
  render() {
    return (
      <div className="Zoom">
         <div className="Zoom-first-title">
             <span>ZOOM SUR</span>
         </div>

         <div className="ZoomContainer">
           <a href >
             <div className="ZoomCarousel" id="slider">
                 <div className="Z-FirstImage" >
                     <div className="Z-first-description">
                       <p className="Z-title">La Thomas Cook week !</p>
                       <p>Profitez de réductions exceptionnelles sur votre séjour, du 24 février au 5 mars 2017.</p>
                     </div>
                     <button type="button" className="Z-button">DÉCOUVRIR</button>
                 </div>
                 <div className="Z-SecondImage">
                   <div className="Z-first-description">
                     <p className="Z-title">Notre Collection Voyages Été 2017 !</p>
                     <p>Thomas Cook vous dévoile sa collection voyages été 2017, agrémentée d'avantages exclusifs !</p>
                   </div>
                    <button type="button" className="Z-button">DÉCOUVRIR</button>
                 </div>
                 <div className="Z-ThirdImage">
                   <div className="Z-first-description">
                     <p className="Z-title">Vacances été 2017</p>
                     <p>Profitez de nos séjours à prix réduits pour vous évader cet été en Espagne, Italie, Grèce...</p>
                   </div>
                    <button type="button" className="Z-button">DÉCOUVRIR</button>
                 </div>
                 <div className="Z-ThirdImage">
                   <div className="Z-first-description">
                     <p className="Z-title">Vacances été 2017</p>
                     <p>Profitez de nos séjours à prix réduits pour vous évader cet été en Espagne, Italie, Grèce...</p>
                   </div>
                    <button type="button" className="Z-button">DÉCOUVRIR</button>
                 </div>

             </div>
             </a>
             <div id="prev">&#8810;</div>
             <div id="next">&#8811;</div>
         </div>
        <script src={Slider}></script>
      </div>
    );
  }
}

export default Zoom;

// <div style="width: 100%; height: 20px; border-bottom: 1px solid black; text-align: center">
//       <span style="font-size: 40px; background-color: #F3F5F6; padding: 0 10px;">
//         Section Title <!--Padding is optional-->
//       </span>
//     </div>
