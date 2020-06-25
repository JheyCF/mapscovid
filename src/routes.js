import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Data from './pages/data';
import Contact from './pages/contato';
import Sobre from './pages/sobre';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/data" component={Data} />
        <Route path="/contact" component={Contact} />
        <Route path="/sobre" component={Sobre} />
      </Switch>
    </BrowserRouter>
  );
}