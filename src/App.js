import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav.tsx';
import HomePage from './components/HomePage.js';
import ResultsPage from './components/ResultsPage.tsx';

const App = () => {
  return (
    <Router> 
      <Nav />
      
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/results">
          <ResultsPage />
        </Route>
      </Switch>

    </Router> 
  );
}

export default App;
