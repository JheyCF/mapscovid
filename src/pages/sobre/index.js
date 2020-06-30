import React from 'react';
import { Link } from 'react-router-dom'

import Menu from "../../components/Menu/sobre"

import Rodape from '../../components/Rodape';

import "./styles.css"

function Sobre() {
  return (
    
    <div id="pagesobre">
      <nav>
        <div>
          <Menu />
        </div>
      </nav>
      <main id="mainsobre">
        <article>
          <div className="cardsobre">
            <h1>Sobre</h1>
            
            <p className="textsobre">
              O site MapsCovid-19 foi desenvolvido pela equipe JheyCF (composta por Camila Casimiro, Jennifer Silva e Fagne Farias) para uma maratona de programação do IFPB campus Soledade.
            </p>
            <p  className="textsobre">
              A plataforma MapsCovid-19 tem como missão, contribuir juntamente com a Secretaria de Saúde auxiliando a população na divulgação de informações referentes aos casos do novo coronavírus, mantendo as pessoas informadas em tempo real com dados oficiais da secretaria de saude do municipio, exibindo os dados epidemiológicos gerais além dos bairros onde possuem ocorrências de casos de Covid-19, dessa forma alertando a população de possíveis locais com foco da doença para que eles possam evitar a circulação nesses locais.

            </p>
            <p  className="textsobre">
            Como objetivo futuro pretendemos expandir nossa plataforma para que outras cidades possam se cadastrar como também pretendemos adicionar gráficos para melhorar a exibição dos dados
            </p>
            <Link to="/"> <img src={require('./logo.png')} className="logosobre" /> </Link>
          </div>
        
        </article>
      </main>

      <div id="rodape-sobre">
        <Rodape />
        </div>

    </div>
  );
}

export default Sobre;
