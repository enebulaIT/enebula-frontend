import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { HashRouter, Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import HowItWorks from './components/pages/HowItWorks';
import WebDevelopment from './components/pages/Services/WebDevelopment';
import MobileDevelopment from './components/pages/Services/MobileDevelopment';
import GameDevelopment from './components/pages/Services/GameDevelopment';
import Designing from './components/pages/Services/Designing';
import SecurityAudit from './components/pages/Services/SecurityAudit';
import DegitalMarketing from './components/pages/Services/DegitalMarketing';
import BlockchainAudits from './components/pages/Services/BlockchainAudits';
import './css/style.css';
import history from './customHistory';

const App = () => {
  const [sideMenuVisibility, setSideMenuVisibility] = useState(false);

  return (
    <HashRouter basename="/" history={history}>
      {/* <Router > */}
      <div
        className={`core-content core-responsive-slide ${
          sideMenuVisibility ? 'open' : ''
        }`}
      >
        <Header
          sideMenuVisibility={sideMenuVisibility}
          setSideMenuVisibility={setSideMenuVisibility}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/how-we-work" exact component={HowItWorks} />
          <Route
            path="/services/web-development"
            exact
            component={WebDevelopment}
          />
          <Route
            path="/services/mobile-development"
            exact
            component={MobileDevelopment}
          />
          <Route
            path="/services/game-development"
            exact
            component={GameDevelopment}
          />
          <Route path="/services/designing" exact component={Designing} />
          <Route
            path="/services/security-audit"
            exact
            component={SecurityAudit}
          />
          <Route
            path="/services/digital-marketing"
            exact
            component={DegitalMarketing}
          />
          <Route
            path="/services/blockchain-audits"
            exact
            component={BlockchainAudits}
          />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
