import React from "react";
import { Link } from 'react-router-dom'

import "./styles.css";

function Logo (){
    return (
        <div id="logo-menu">
            <img src={require('./logo.png')} />
        </div>
    );
}
export default Logo; 