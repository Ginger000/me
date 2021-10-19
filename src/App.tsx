import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import { Route } from 'react-router-dom';
import Home from './pages/Home/index';
import TimeTrackDashboard from './pages/Projects/FMSolution/TimeTrackDashboard/index';

function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/time-tracking-dashboard" component={TimeTrackDashboard} />
    </div>
  );
}

export default hot(module)(App);
