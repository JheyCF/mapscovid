import React from "react";

import "./styles.css";

function LogoResponsivo (){
    return (
        <div id="logo-responsivo">

            <img src={require('./logo.png')} />
            
            <div id="libra-responsivo">
                <a href="https://www.vlibras.gov.br/" target="blank">
                <img src= {require('../Menu/libras.png')} /> </a>
                <a href="https://www.vlibras.gov.br/" target="blank"> Vlibra </a>
            </div>
        </div>
    );
}
export default LogoResponsivo; 