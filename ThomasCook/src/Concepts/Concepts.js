import React, { Component } from 'react';
import './Concepts.css';

class Concepts extends Component {
  render() {
    return (
      <div className="Zoom">
         <div className="Zoom-first-title">
             <span>NOS CONCEPTS EXCLUSIFS : À CHACUN SON HÔTEL</span>
         </div>

         <div className="ZoomContainer">
           <a href >
             <div className="ZoomCarousel" id="slider">
                 <div className="C-FirstImage" >
                     <div className="C-first-description">
                       <p className="C-title">CONFORT ET DESIGN MODERNE À PETIT PRIX</p>
                     </div>
                     <button type="button" className="C-button">DÉCOUVRIR</button>
                 </div>
                 <div className="C-SecondImage">
                   <div className="C-first-description">
                     <p className="C-title">SOYEZ CONNECTÉ AVEC VOS PROCHES</p>
                  </div>
                    <button type="button" className="C-button">DÉCOUVRIR</button>
                 </div>
                 <div className="C-ThirdImage">
                   <div className="C-first-description">
                     <p className="C-title">LE BIEN-ÊTRE ET LA DÉTENTE AVANT TOUT</p>
                   </div>
                    <button type="button" className="C-button">DÉCOUVRIR</button>
                 </div>
                 <div className="C-ForthImage">
                   <div className="C-first-description">
                     <p className="C-title">VIVEZ DES EXPÉRIENCES AUTHENTIQUES</p>
                   </div>
                    <button type="button" className="C-button">DÉCOUVRIR</button>
                 </div>
             </div>
             </a>
         </div>
         <div className="C-container-text">
           <p className="C-text">Le site de voyage Thomas Cook accompagne ses clients dès leur rêve d’évasion et jusqu’à leur retour de voyage. Véritable spécialiste, notre agence de voyage en ligne offre à ses clients le choix de voyager  dans de nombreuses destinations  au travers de ses différentes offres de qualité : clubs, séjours, circuits & découverte, croisières, locations, escapades week-ends, voyages sur-mesure et  vols. Notre agence de voyage en ligne propose également des offres de dernière minute et des bons plans promo sur toutes les destinations telles que la Grèce, la Turquie, les Canaries, les Baléares, la Sardaigne, les Maldives, la République Dominicaine, le Mexique ou encore l'île Maurice. Retrouvez tous nos voyages ici et vivez une expérience unique de voyage.
           </p>
         </div>
         <div className="C-mentions">
           <p className="C-text-mentions">
                *Prix à partir de, taxes comprises, par personne, base chambre double. <a href>Voir le détail</a>
           </p>
         </div>
      </div>
    );
  }
}

export default Concepts;
