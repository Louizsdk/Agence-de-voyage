import React, { Component } from 'react';
import './footer.css';

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
            <a href="" className="linkFooter">Toutes nos brochures</a>
          </div>
          <div className="aPropos">
            <h4>A PROPOS DE THOMAS HOOK</h4>
            <a href="" className="linkFooter">Qui sommes-nous ?</a>
            <a href="" className="linkFooter">Presse</a>
            <a href="" className="linkFooter">Recrutement</a>
            <a href="" className="linkFooter">Notre programme d'affiliation</a>
            <a href="" className="linkFooter">Compagnies aeriennes</a>
            <a href="" className="linkFooter">Voyager en groupe</a>
            <a href="" className="linkFooter">Chèques cadeaux</a>
            <a href="" className="linkFooter">Chèques vacances ANCV</a>
            <a href="" className="linkFooter">Conseils aux voyageurs</a>
          </div>
          <div className="autreSites">
            <h4>NOS AUTRES SITES</h4>
            <ul>
              <li><a href="" className="linkFooter">Jet tours</a></li>
              <li><a href="" className="linkFooter">Voyages directs</a></li>
              <li><a href="" className="linkFooter">Espace Pro Jet Tours</a></li>
              <li><a href="" className="linkFooter">Thomas Cook Marathons</a></li>
              <li><a href="" className="linkFooter">Thomas Cook Group</a></li>
              <li><a href="" className="linkFooter">Thomas Cook Belgique</a></li>
              <li><a href="" className="linkFooter">Thomas Cook Allemagne</a></li>
              <li><a href="" className="linkFooter">Thomas Cook Nederland</a></li>
              <li><a href="" className="linkFooter">Thomas Cook Pologne</a></li>
              <li><a href="" className="linkFooter">Thomas Cook Angleterre</a></li>
            </ul>
          </div>
        </div>
        <div className="footerNav">
          <h4>IDÉES VOYAGES</h4>
          <i className="fa fa-angle-down btnMenu" id="btnMenuDeroulant" aria-hidden="true"></i>
          <h4>OFFRES SPÉCIALES</h4>
          <i className="fa fa-angle-down btnMenu" aria-hidden="true"></i>
          <h4>TOP DESTINATIONS</h4>
          <i className="fa fa-angle-down btnMenu" aria-hidden="true"></i>
          <h4>OÙ ET QUAND PARTIR</h4>
          <i className="fa fa-angle-down btnMenu" aria-hidden="true"></i>
        {/* Créer des liste pour chaque h4 dans une div display none et animationJS quand bouton est cliqué */}
        <div id="menuDeroulant">
          <div className="menuIdeesVoyages">
            <a href="" className="linkFooter">Collection été Thomas Cook</a>
            <a href="" className="linkFooter">Voyagez avec Jet tours</a>
            <a href="" className="linkFooter">Les clubs Jet tour</a>
            <a href="" className="linkFooter">Vacances au Maroc</a>
            <a href="" className="linkFooter">La Costa Barcelona</a>
            <a href="" className="linkFooter">Voyagez en Grèce</a>
            <a href="" className="linkFooter">Nos séjours Thalasso</a>
            <a href="" className="linkFooter">Nos séjours Golf</a>
            <a href="" className="linkFooter">Nos séjours Plongée</a>
            <a href="" className="linkFooter">Certificats d'excellence</a>
            <a href="" className="linkFooter">Tripadvisor</a>
            <a href="" className="linkFooter">Club Jet tours Cruise</a>
          </div>
          <div className="menuOffresSpeciales">
            <a href="" className="linkFooter">Tout à -50%</a>
            <a href="" className="linkFooter">Séjours en promo</a>
            <a href="" className="linkFooter">Circuits en promo</a>
            <a href="" className="linkFooter">Déstockage vols</a>
            <a href="" className="linkFooter">Bons plans du moment</a>
            <a href="" className="linkFooter">Spécial USA</a>
            <a href="" className="linkFooter">Livres photos de vacances</a>
          </div>
          <div className="menuTopDestinations">
            <a href="" className="linkFooter">Séjour Maroc</a>
            <a href="" className="linkFooter">Séjour Corse</a>
            <a href="" className="linkFooter">Séjour Cuba</a>
            <a href="" className="linkFooter">Weekend Amsterdam</a>
            <a href="" className="linkFooter">Weekend Barcelone</a>
            <a href="" className="linkFooter">Circuit Thailande</a>
            <a href="" className="linkFooter">Circuit Vietnam</a>
            <a href="" className="linkFooter">Tous nos voyages</a>
          </div>
          <div className="menuOuPartir">
            <a href="" className="linkFooter">Vacances d'hiver</a>
            <a href="" className="linkFooter">Vacances de Noël</a>
            <a href="" className="linkFooter">Vacances du Nouvel An</a>
            <a href="" className="linkFooter">Vacances de Février</a>
            <a href="" className="linkFooter">Week-end Saint-Valentin</a>
            <a href="" className="linkFooter">Vacances de Pâques 2016</a>
            <a href="" className="linkFooter">Ponts de mai 2016</a>
            <a href="" className="linkFooter">Vacances d'été 2016</a>
            <a href="" className="linkFooter">Vacances de Toussaint</a>
            <a href="" className="linkFooter">Weekend-end du 11 novembre</a>
            <a href="" className="linkFooter">Partir au ski</a>
            <a href="" className="linkFooter">Partez de chez vous</a>
          </div>
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
      </div>
    );
  }
}

export default Footer;
