import React from 'react';

import Logo from '../../components/logo-responsivo/index';

import Menu from "../../components/Menu/contatos";

import Rodape from '../../components/Rodape';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import "./styles.css"

library.add(fas);

function Contact() {
  return (
    <div id="pagecontato">
      <nav>
        <div>
          <Menu />
        </div>
      </nav>
      <div className="logo-responsiva-cont">
        <Logo />
      </div>
      
      <main id="maincontato">
      

        <article>


          <div className="cardcontato">

            <h1>Contatos</h1>
            <ul>
              <li>
                <a href="mailto:mapscovid19@gmail.com?" target="blank"><FontAwesomeIcon className="fass" icon="envelope" /> Email: mapscovid19@gmail.com</a>
              </li>
              <li>
                <a href="https://www.instagram.com/jheycf/" target="blank"><FontAwesomeIcon className="fass" icon="camera-retro" /> Instagran: @jheycf</a>
              </li>
              <li>
                <a href="http://www.facebook.com/112855440470064/" target="blank"><FontAwesomeIcon className="fass" icon="comments" /> Facebook: facebook.com/equipeJheyCF</a>
              </li>
            </ul>

          </div>



        </article>
        
        
      </main>
      <div>
          <Rodape />
        </div>

    </div>

  );
}

export default Contact;
