import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="stars">
        <a href="https://www.google.fr/maps/place/Julie+Pires/@48.3669425,1.8363224,8z/data=!4m11!1m2!2m1!1sjulie+pires!3m7!1s0x47ef43b8d135ece3:0xeb198b5257a65bdf!8m2!3d48.3669425!4d2.9569279!9m1!1b1!15sCgtqdWxpZSBwaXJlc5IBCW9zdGVvcGF0aA">
          <i class="fa-solid fa-star"></i>
          Avis GoogleMaps
        </a>
      </div>
      <div className="adress">
          <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
        <p>
          30 Rte du Petit Fossard, <br /> 77130 Varennes-sur-Seine
        </p>
      </div>
      <div className="doctolib">
        <a href="https://www.doctolib.fr/osteopathe/varennes-sur-seine/julie-pires-de-almeida">
          <i class="fa-solid fa-briefcase-medical"></i> Doctolib
        </a>
      </div>
    </div>
  );
};

export default Footer;
