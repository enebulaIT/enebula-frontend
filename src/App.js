import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import HowItWorks from './components/pages/HowItWorks';
import Services from './components/pages/Services';
import './css/style.css'


const App = () => {

	const [sideMenuVisibility, setSideMenuVisibility] = useState(false);

	return(
		<BrowserRouter>
			<div className = {`core-content core-responsive-slide ${sideMenuVisibility ? 'open' : ''}`}>
				<Header
					sideMenuVisibility = {sideMenuVisibility} 
					setSideMenuVisibility = {setSideMenuVisibility}/> 
					<Switch>
						<Route path = "/" exact component = {Home}/>
						<Route path = "/about" exact component = {About}/>
						<Route path = "/blog" exact component = {Blog}/>
						<Route path = "/contact" exact component = {Contact}/>
						<Route path = "/how-we-works" exact component = {HowItWorks}/>
						<Route path = "/services" exact component = {Services}/>
					</Switch> 
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;