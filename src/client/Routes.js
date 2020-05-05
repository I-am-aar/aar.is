import React from 'react';

import App from './App';
import HomePage from './pages/HomePage';
import SubPage from './pages/SubPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...SubPage,
        path: '/subpage'
      }
    ]
  }
]
