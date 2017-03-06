import React, { Component } from 'react';
import Image from './offre1.jpg';
import './Offre.css';
import Stars from './stars.png';

class Offre extends Component {
  render() {
    return (
      <div className="Return">
<div className="offres">
<div className="offre 1st">
<img src="http://fr.images.traveltainment.eu/images/content/booking_thumbs_gr/305000/THB_999_H308502.jpg" alt="" width="100%" height="156px"/>

<div className="Disposition">

<div className="description">
<span className="title">Maroc – Marrakech</span>
<p className="sub">Club Jet tours Kenzi Agda...</p>
<ul className="precisions">
<li>
<span>Départ le 04/03/2017</span>
</li>
<li class="Strong">
<span>7 nuits, tout compris</span>
</li>
</ul>
<img src={Stars} alt="" className="stars"/>
<span className="stars"></span>
</div>



<div className="pricing">

<div className="prix">
<p><span className="apartirde">Des</span> 859€<span className="asterisque">*</span></p>
<a href="" className="button">VOIR L'Offre</a>
</div>
</div>


</div>

</div>


<div className="offre 2nd">
<img src="http://fr.images.traveltainment.eu/images/content/booking_thumbs_gr/300000/THB_999_H301565.jpg" alt="" width="100%" height="156px"/>

<div className="Disposition">

<div className="description">
<span className="title">Maroc – Marrakech</span>
<p className="sub">Club Jet tours Kenzi Agda...</p>
<ul className="precisions">
<li>
<span>Départ le 04/03/2017</span>
</li>
<li class="Strong">
<span>7 nuits, tout compris</span>
</li>
</ul>
<img src={Stars} alt="" className="stars"/>
<span className=""></span>
</div>



<div className="pricing">

<div className="prix">
<p><span className="apartirde">Des</span> 859€<span className="asterisque">*</span></p>
<a href="" className="button">VOIR L'Offre</a>
</div>
</div>


</div>

</div>


<div className="offre 3rd">
<img src="http://fr.images.traveltainment.eu/images/content/booking_thumbs_gr/300000/THB_999_H302443.jpg" alt="" width="100%" height="156px"/>

<div className="Disposition">

<div className="description">
<span className="title">Maroc – Marrakech</span>
<p className="sub">Club Jet tours Kenzi Agda...</p>
<ul className="precisions">
<li>
<span>Départ le 04/03/2017</span>
</li>
<li class="Strong">
<span>7 nuits, tout compris</span>
</li>
</ul>
<img src={Stars} alt="" className="stars"/>
<span className="stars"></span>
</div>



<div className="pricing">

<div className="prix">
<p><span className="apartirde">Des</span> 859€<span className="asterisque">*</span></p>
<a href="" className="button">VOIR L'Offre</a>
</div>
</div>


</div>

</div>


</div>
      </div>
    );
  }
}

export default Offre;
