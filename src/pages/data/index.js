import React, { Component } from 'react';

import Logo from '../../components/logo-responsivo/index';

import Menu from "../../components/Menu"

import Rodape from '../../components/Rodape';

import BairrosConfirm from '../../server/bairrosConfirmados';
import "./styles.css"

import DataAtual from '../../server/geral/dataAtual'
import GeralSuspeitos from '../../server/geral/geralSuspeitos';
import GeralConfirmados from '../../server/geral/geralConfirmados';
import GeralRecuperados from '../../server/geral/geralRecuperados';
import GeralObitos from '../../server/geral/geralObitos';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fas);


class Data extends Component {
    render() {
        return (
            <div id="page-data">
                <nav>
                    <div>
                        <Menu />

                    </div>
                </nav>

                <main id="main-cards">
                    <h1>BOLETIM EPIDEMIOLÓGICO</h1>
                    <article>

                        <div id="cities">
                            <h2>Cidade:</h2>
                            <p><a href="https://www.google.com/maps/place/Sousa+-+PB/@-6.7524445,-38.372371,11z/data=!3m1!4b1!4m5!3m4!1s0x7a4595b2cfc0e75:0xbc77f410fe1dd9f1!8m2!3d-6.7625254!4d-38.224935" target="blank">
                                JheyCFlândia <FontAwesomeIcon className="icon" icon="map-marker-alt" />
                            </a></p>
                            <div>
                                <p>Lorem ipsum dolor sente-se no meio, consectetur elip
                                    adipiscing. Mecenas cuidado é um desenvolvedor
                                    de elementos de proteína.
                            </p>
                            </div>
                            <Logo />

                        </div>

                        <div id="dataAtual">
                            <h2> Ultima Atualização</h2>
                            <h3><DataAtual /></h3>
                        </div>
                        <div id="card-gerais">
                            <div id="title-data" className="card-filhos">
                                <h3> Suspeito</h3>
                                <div id="card-suspeitos" className="paragrafo-data">
                                 <GeralSuspeitos /> 
                                </div>
                            </div>
                            <div id="title-data" className="card-filhos">
                                <h3> Confirmados</h3>
                                <div id="card-confirmados" className="paragrafo-data">
                                 <GeralConfirmados /> 
                                </div>
                            </div>
                            <div id="title-data" className="card-filhos">
                                <h3> Recuperados</h3>
                                <div id="card-recuperados" className="paragrafo-data">
                                 <GeralRecuperados /> 
                                </div>
                            </div>
                            <div id="title-data" className="card-filhos">
                                <h3> Óbitos</h3>
                                <div id="card-obitos" className="paragrafo-data">
                                    <GeralObitos />
                                </div>
                            </div>
                        </div>
                        <div id="card-confirmado">
                            <h2>Bairros Confirmados</h2>
                           <BairrosConfirm /> 
                        </div>


                    </article>
                </main>
                <div>
                    <Rodape />
                </div>

            </div >


        );
    }
};

export default Data;