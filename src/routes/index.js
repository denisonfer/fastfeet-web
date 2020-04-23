import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Dashboard from '../pages/Dashboard';
import Destinatarios from '../pages/Dashboard/Destinatarios';
import Entregadores from '../pages/Dashboard/Entregadores';
import Problemas from '../pages/Dashboard/Problemas';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/cadastro" component={Cadastro} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/destinatarios" component={Destinatarios} isPrivate />
      <Route path="/entregadores" component={Entregadores} isPrivate />
      <Route path="/problemas" component={Problemas} isPrivate />
    </Switch>
  );
}
