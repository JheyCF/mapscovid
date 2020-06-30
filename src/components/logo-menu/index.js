import React from "react";
import { Link } from 'react-router-dom'

import "./styles.css";

function Logo (){
    return (
        <div id="logo-menu">
           <Link to="/"> <img src={require('./logo.png')} /> </Link>
        </div>
    );
}
export default Logo; 