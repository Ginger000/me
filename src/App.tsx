import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import { routes } from './router/config';
import Router from './router/Router';

function App() {
  return (
    <div>
      <Router routes={routes} />
    </div>
  );
}

export default hot(module)(App);
