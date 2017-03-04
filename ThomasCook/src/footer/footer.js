import React, { Component } from 'react';
import {FooterJS} from './Footer.css';


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerTop">
          <ul className="reseauxSociaux">
            <li className="iconeYoutube"></li>
          </ul>
          <div className="excluMail">
            <p>Profitez de nos bons plans en exclusivité</p>
            <input id='email' type="text" value="Votre addresse email"></input>
            <input id="btnEmail" type="button" value="OK"></input>
          </div>
        </div>
        <div className="footerMid">
          <div className="besoinAide">
            <h4>BESOIN D AIDE?</h4>
            <button className="btnfooterMid" type="button" value="Consulter notre FAQ">Consulter notre FAQ</button>
            <button className="btnfooterMid" type="button" value="Envoyez-nous un message">Envoyez-nous un message</button>
            <button className="btnfooterMid" type="button">Retrouvez une agence</button>
          </div>
          <div className="catalogues">
            <h4>NOS CATALOGUES</h4>
            <img className="imgCatalogue" src="http://belresources.interactiv-doc.fr//catalogues/thomas-cook-voyages-ete_pdf_440/pages/page1_low.png" alt=""/>
            <a href="">Toutes nos brochures</a>
          </div>
          <div className="aPropos">
            <h4>A PROPOS DE THOMAS HOOK</h4>
            <a href="">Qui sommes-nous ?</a>
            <a href="">Presse</a>
            <a href="">Recrutement</a>
            <a href="">Notre programme d'affiliation</a>
            <a href="">Compagnies aeriennes</a>
            <a href="">Voyager en groupe</a>
            <a href="">Chèques cadeaux</a>
            <a href="">Chèques vacances ANCV</a>
            <a href="">Conseils aux voyageurs</a>
          </div>
          <div className="autreSites">
            <h4>NOS AUTRES SITES</h4>
            <ul>
              <li><a href="">Jet tours</a></li>
              <li><a href="">Voyages directs</a></li>
              <li><a href="">Espace Pro Jet Tours</a></li>
              <li><a href="">Thomas Cook Marathons</a></li>
              <li><a href="">Thomas Cook Group</a></li>
              <li><a href="">Thomas Cook Belgique</a></li>
              <li><a href="">Thomas Cook Allemagne</a></li>
              <li><a href="">Thomas Cook Nederland</a></li>
              <li><a href="">Thomas Cook Pologne</a></li>
              <li><a href="">Thomas Cook Angleterre</a></li>
            </ul>
          </div>
        </div>
        <div className="footerNav">
          <h4>IDÉES VOYAGES</h4>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
          <h4>OFFRES SPÉCIALES</h4>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
          <h4>TOP DESTINATIONS</h4>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
          <h4>OÙ ET QUAND PARTIR</h4>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        {/* Créer des liste pour chaque h4 dans une div display none et animationJS quand bouton est cliqué */}
        </div>
        <div id="menuDeroulant">
          <div className="menuIdeesVoyages">
            <a href="">Collection été Thomas Cook</a>
            <a href="">Voyagez avec Jet tours</a>
            <a href="">Les clubs Jet tour</a>
            <a href="">Vacances au Maroc</a>
            <a href="">La Costa Barcelona</a>
            <a href="">Voyagez en Grèce</a>
            <a href="">Nos séjours Thalasso</a>
            <a href="">Nos séjours Golf</a>
            <a href="">Nos séjours Plongée</a>
            <a href="">Certificats d'excellence</a>
            <a href="">Tripadvisor</a>
            <a href="">Club Jet tours Cruise</a>
          </div>
          <div className="menuOffresSpeciales">
            <a href="">Tout à -50%</a>
            <a href="">Séjours en promo</a>
            <a href="">Circuits en promo</a>
            <a href="">Déstockage vols</a>
            <a href="">Bons plans du moment</a>
            <a href="">Spécial USA</a>
            <a href="">Livres photos de vacances</a>
          </div>
          <div className="menuTopDestinations">
            <a href="">Séjour Maroc</a>
            <a href="">Séjour Corse</a>
            <a href="">Séjour Cuba</a>
            <a href="">Weekend Amsterdam</a>
            <a href="">Weekend Barcelone</a>
            <a href="">Circuit Thailande</a>
            <a href="">Circuit Vietnam</a>
            <a href="">Tous nos voyages</a>
          </div>
          <div className="menuOuPartir">
            <a href="">Vacances d'hiver</a>
            <a href="">Vacances de Noël</a>
            <a href="">Vacances du Nouvel An</a>
            <a href="">Vacances de Février</a>
            <a href="">Week-end Saint-Valentin</a>
            <a href="">Vacances de Pâques 2016</a>
            <a href="">Ponts de mai 2016</a>
            <a href="">Vacances d'été 2016</a>
            <a href="">Vacances de Toussaint</a>
            <a href="">Weekend-end du 11 novembre</a>
            <a href="">Partir au ski</a>
            <a href="">Partez de chez vous</a>
          </div>
        </div>
        <div className="footerPaiement">
          <div className="footerPaiementLeft">
            <p>Paiement 100% sécurisés</p>
            <img src="http://www.thomascook.fr/fileadmin/image/ogone.png" alt=""/>
          </div>
          <div className="footerPaiementRight">
            <p>Moyens de paiement acceptés</p>
            <img src="http://www.thomascook.fr/fileadmin/image/paiements.png" alt=""/>
          </div>
        </div>
        <script type="text/javascript" src={FooterJS}></script>
      </div>
    );
  }
}

export default Footer;
