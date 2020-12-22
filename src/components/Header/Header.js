import React, { useState, useEffect } from 'react'; 
import { Link, NavLink } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';
import history from '../../customHistory';


const Header = (props) => {

	const [megaMenuVisible, setMegaMenuVisibility] = useState(false); 
	const [screenscrolled, setScreenScrolled] = useState(false);
	let location = useLocation();

	history.listen((location, action) => { 
		console.log('test');
		setMegaMenuVisibility(false);
		props.setSideMenuVisibility(false);
	});

	useEffect(() => {  
		window.addEventListener('scroll', () => { 
			if(window.scrollY === 0) {
				setScreenScrolled(false);
			} else {
				setScreenScrolled(true);
			}
		});  
	}, []);  
 
    return (
        <header className={`header js-header-scroll ${screenscrolled || megaMenuVisible ? 'header__sticky' : 'header__sticky'} ${location.pathname !== '/' ? 'header__inner header__sticky' : ''}`}>
		    <nav className={`core-nav ${megaMenuVisible ? 'open' : ''}`}>
		        <div className="nav-container">
		            <div className="nav-header right">
		                <Link to="/" className="brand">
		                    <img src = {process.env.PUBLIC_URL + '/logonew-font.svg'} className="logo" alt="Smooth" />
		                </Link>
		                <button 
		                	className={`toggle-bar core-nav-toggle	`}
		                	onClick = {() => {props.setSideMenuVisibility(!props.sideMenuVisibility)}}>
		                    <span className="fa fa-bars"></span>
		                </button>
		            </div> 
		            <div className="wrap-core-nav-list right"> 
		                <div className="header__mobile js-header-menu">
							<Link to="/" className="brand">
								<img src = {process.env.PUBLIC_URL + '/logonew-font.svg'} className="logo" alt="Smooth" />
							</Link>
		                    <button
		                    	onClick = {() => {props.setSideMenuVisibility(!props.sideMenuVisibility)}} 
		                    	className="toggle-bar header__mobile-toggle core-nav-toggle">
		                        <span className="fa fa-remove"></span>
		                    </button>
		                </div>
		                <ul className="menu core-nav-list">
		                    <li className="active"><NavLink to="/">Home</NavLink></li>
		                    <li><NavLink to="/about">About Us</NavLink></li>  
		                    <li 
		                    	className={`megamenu ${megaMenuVisible ? 'open' : ''}`} 
		                    	onClick = { () => {setMegaMenuVisibility(!megaMenuVisible)} }>
		                    		<button className = 'mega-menu'>Services</button>
		                        <div className="megamenu-content megamenu-product">
		                            <div className="container">
		                                <div className="row">
		                                    <div className="col-lg-4 col-megamenu">
		                                        <div className="megamenu__widget"> 
		                                            <div className="megamenu__widget-group">
		                                                <Link to="/services/web-development" className="megamenu__widget-group-link">
		                                                    Web Development
		                                                    <span>Frontend, Backend, Full-stack, Static, Ecommerce</span> 
		                                                </Link>
		                                            </div>  
												</div> 
		                                    </div>
		                                    <div className="col-lg-4 col-megamenu">
		                                        <div className="megamenu__widget"> 
	                                             	<div className="megamenu__widget-group">
		                                                <Link to="/services/mobile-development" className="megamenu__widget-group-link">
		                                                    Mobile app development
		                                                    <span>Android, IOS, Hybrid</span> 
		                                                </Link>
		                                            </div> 
		                                        </div>
		                                    </div>
		                                    <div className="col-lg-4 col-megamenu">
		                                        <div className="megamenu__widget">
		                                            <div className="megamenu__widget-group">
		                                                <Link to="/services/game-development" className="megamenu__widget-group-link">
		                                                    Game Solutions & Services
		                                                    <span>Unity 2D/2.5D/3D Games, AR, Single/Multiplayer Games, Online, Gamification</span> 
		                                                </Link> 
		                                            </div>     
		                                        </div>
		                                    </div>
		                                    <div className="col-lg-4 col-megamenu">
		                                        <div className="megamenu__widget">
	                                             	<div className="megamenu__widget-group">
		                                                <Link to="/services/security-audit" className="megamenu__widget-group-link">
		                                                   Security & Audit
		                                                   <span>VAPT, Cyber Forensics, Server Management, Testing</span>
		                                                </Link> 
		                                            </div>    
		                                        </div>
		                                    </div>
		                                    <div className="col-lg-4 col-megamenu">
		                                        <div className="megamenu__widget"> 
	                                             	<div className="megamenu__widget-group">
		                                                <Link to="/services/designing" className="megamenu__widget-group-link">
		                                                   Designing
		                                                   <span>UI/UX, Motion Graphics, Branding</span>
		                                                </Link>
		                                            </div>  
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </li>
		                    {/* <li><NavLink to="/how-we-work">How We Work</NavLink></li> */}
		                    {/*<li><NavLink to="/blog">Blog</NavLink></li>*/}
		                    <li><NavLink to="/contact">Contact</NavLink></li>
		                </ul>
		            </div>
		        </div>
		    </nav>
		    <div className="dropdown-overlay"></div>
		</header>
    );
};

export default Header;
