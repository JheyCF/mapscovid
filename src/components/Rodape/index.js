import React from "react";
import { Link } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import "./styles.css"

library.add(fas);

function Rodape (){
    return (
        <div id="rodape">
           <div id="rodape1">

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe2aj1PYksC1_0_G4RRk_ii6Pe-EuIQQEmZFxiWweH6tR4HYw/viewform?usp=pp_url" className="forms"><p> Gostou!? Solicite o cadastro de sua cidade. </p> </a> 
                <Link to="/contact" className="rcont"> Contate-nos </Link>  
                </div>
           <div id="rodape2">
                <p>mapscovid.vercel.app</p>
                <p><FontAwesomeIcon  icon="copyright" />Todos os direitos reservados. 2020 | Desenvolvido por JheyCF</p>
           </div>
        </div>
    );
}
export default Rodape; 