import React from 'react';
import {HashRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
