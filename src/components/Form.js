import React from "react";
import emailjs from "emailjs-com";
import Doctolib from "../assets/doctolib.png";

const Form = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bxxtksn",
        "template_wbn6wgc",
        e.target,
        "Ne7PybCs4Qo0YJdVl"
      )
      .then((res) => {
        console.log(res);
      }).catch((err) => console.log(err))
  }

  return (
    <>
      <h1 className="title_contact">
        Contactez moi ou prenez un rendez-vous sur Doctolib
      </h1>
      <div className="Parent_Form">
        <div className="div1_Form">
          <form action="send" onSubmit={sendEmail}>
            <label htmlFor="text">Nom et Prénom</label>
            <input id="input" type="text" name="name" />

            <label htmlFor="email">Email</label>
            <input id="input" type="email" name="user_email" />

            <label htmlFor="number">Téléphone</label>
            <input id="input" type="number" name="user_telephone" />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>

            <input type="submit" value="Envoyer" id="btn" />
          </form>
        </div>
        <div className="div2_Form">
          <a href="https://www.doctolib.fr/osteopathe/varennes-sur-seine/julie-pires-de-almeida">
            <img className="DoctolibPicture" src={Doctolib} alt="" />
          </a>
          <div className="infosDoctolib">
            <h1 className="subject">Horaires et contact</h1>
            <h2>Ouverture du cabinet</h2>
            <p>
              9h00 - 13h00 <br /> 14h00 - 20h00
            </p>

            <h2>Numéro de téléphone</h2>
            <p>06 73 82 32 63</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
