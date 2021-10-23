import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from './pages/Home/index';
import TimeTrackDashboard from './pages/Projects/FMSolution/TimeTrackDashboard/index';

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/time-tracking-dashboard">TimeTracking</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/time-tracking-dashboard" component={TimeTrackDashboard} />
      </div>
    </HashRouter>
  );
}

export default hot(module)(App);
