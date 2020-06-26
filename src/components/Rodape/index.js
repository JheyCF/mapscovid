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
                <p>Todos os direitos reservados a equipe JheyCF</p>
                <Link to="/contact" className="rcont"> Contate-nos </Link>  
           </div>
           <div id="rodape2">
                <p>mapscovid-nab3x70u1.vercel.app</p>
                <p><FontAwesomeIcon  icon="copyright" />2020Mapscovid-19</p>
           </div>
        </div>
    );
}
export default Rodape; 