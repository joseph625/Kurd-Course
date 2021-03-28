import React from 'react';
import './App.css';
import {HashRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";

import Main from './components/Main.jsx'
import Website from './components/website/Website.jsx'
import Design from './components/design/Design.jsx'
import Application from './components/application/Application.jsx'
import Program from './components/programming/Program.jsx'
import Network from './components/network/Network.jsx'
import Database from './components/database/Database.jsx';
import Microsoft from './components/microsoft/Microsoft.jsx';
import About from './About.jsx'


function App() {
  return (
    <>

    <Router>
      <Route path="/" exact component={Main} />

      <Switch>
        <Route path="/programming" component={Program} />
        <Route path="/website" component={Website} />
        <Route path="/design" component={Design} />
        <Route path="/application" component={Application} />
        <Route path="/networking" component={Network} />
        <Route path="/msoffice" component={Microsoft} />
        <Route path="/database" component={Database} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
    

    </>
  );
}

export default App;
