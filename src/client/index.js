// Client side index
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Routes from './Routes';

ReactDom.hydrate(
  <BrowserRouter>
    <div>{ renderRoutes(Routes) }</div>
  </BrowserRouter>
  , document.getElementById('app'));
