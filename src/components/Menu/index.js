import React from 'react';
import { Link } from 'react-router-dom'

import Logo from '../logo-menu/index';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import "./styles.css"

library.add(fas);

function Menu() {
    return (
        <div>
        <div id="menu">
            <div id="libra">
                <a href="https://www.vlibras.gov.br/" target="blank">
                <img src= {require('./libras.png')} /> </a>
                <a href="https://www.vlibras.gov.br/" target="blank"> Vlibra</a>
            </div>
            <div id="">
                <Logo />
            </div>
            
            <nav>
                <ul>
                    <li  id="back-menu">
                       <Link to="/">  <FontAwesomeIcon className="fas" icon="home" />
                        <p>Home </p></Link>
                       
                    </li>
                    <li> 
                       <Link to="/data">  <FontAwesomeIcon className="fas" icon="chart-bar" />
                        Dados </Link>
                    </li>
                    <li>
                       <Link to="/contact"> <FontAwesomeIcon className="fas" icon="comment" />
                         Contato </Link>   
                    </li>
                    <li> 
                       <Link to="/sobre"> <FontAwesomeIcon className="fas" icon="info-circle" />
                         Sobre</Link>
                    </li>
                </ul>
            </nav>
        </div>  

        <div id="responsivo">  
            {/* Menu responsivo*/}
            <nav>
                <ul>
                    <li>
                        <Link to="/"> 
                            <FontAwesomeIcon className="fas" icon="home" />
                        </Link>
                       
                    </li>
                    <li> 
                    <Link to="/data"> <FontAwesomeIcon className="fas" icon="chart-bar" />
                         </Link>
                    </li>
                    <li>
                    <Link to="/contact"> <FontAwesomeIcon className="fas" icon="comment" />
                        </Link>   
                    </li>
                    <li> 
                    <Link to="/sobre"> <FontAwesomeIcon className="fas" icon="info-circle" />
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
        </div>
    )
};

export default Menu;
