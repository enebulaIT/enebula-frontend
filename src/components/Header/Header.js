import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.png';
import { Link, NavLink } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom'


const Header = (props) => {

	const [megaMenuVisible, setMegaMenuVisibility] = useState(false); 
	const [screenscrolled, setScreenScrolled] = useState(false);
	let location = useLocation();

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
        <header className={`header js-header-scroll ${screenscrolled || megaMenuVisible ? 'header__sticky' : ''} ${location.pathname !== '/' ? 'header__inner' : ''}`}>
		    <nav className={`core-nav ${megaMenuVisible ? 'open' : ''}`}>
		        <div className="nav-container">
		            <div className="nav-header right">
		                <Link to="/" className="brand">
		                    <img src = {process.env.PUBLIC_URL + '/logo.png'} className="logo" alt="Smooth" />
		                </Link>
		                <button 
		                	className={`toggle-bar core-nav-toggle	`}
		                	onClick = {() => {props.setSideMenuVisibility(!props.sideMenuVisibility)}}>
		                    <span className="fa fa-bars"></span>
		                </button>
		            </div> 
		            <div className="wrap-core-nav-list right"> 
		                <div className="header__mobile js-header-menu">
		                    <Link to="/" className="header__mobile-brand">Menu</Link>
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
		                    		<a href="#">Services</a>
		                        <div className="megamenu-content megamenu-product">
		                            <div className="container">
		                                <div className="row">
		                                    <div className="col-lg-4 col-megamenu">
		                                        <div className="megamenu__widget">
		                                            <h6 className="megamenu__widget-title">Products</h6>
		                                            <div className="megamenu__widget-group">
		                                                <a href="https://themeforest.net/item/bacotna-creative-agency-and-corporate-template/20789432" className="megamenu__widget-group-link">
		                                                    Bacotna
		                                                    <span>Creative Agency and Corporate Template</span>
		                                                </a>
		                                            </div>
		                                            <div className="megamenu__widget-group">
		                                                <a href="https://themeforest.net/item/anakual-multipurpose-and-responsive-corporate-template/19504220" className="megamenu__widget-group-link">
		                                                    Anakual
		                                                    <span>Multipurpose and responsive corporate</span>
		                                                </a>
		                                            </div>
		                                            <div className="megamenu__widget-group">
		                                                <a href="https://themeforest.net/item/creativica-multiple-creative-html5-template/19061883" className="megamenu__widget-group-link">
		                                                    Creativica
		                                                    <span>Multiple Creative HTML5 Template</span>
		                                                </a>
		                                            </div>
		                                            <div className="megamenu__widget-group">
		                                                <a href="https://themeforest.net/item/inspired-multipurpose-corporate-and-creative-template/18412306" className="megamenu__widget-group-link">
		                                                    Inspired
		                                                    <span>Multipurpose corporate and creative template</span>
		                                                </a>
		                                            </div>
		                                        </div>
		                                    </div>
		                                    <div className="col-lg-8 col-megamenu">
		                                        <div className="megamenu__widget">
		                                            <h6 className="megamenu__widget-title">Corporate site</h6>
		                                            <div className="row">
		                                                <div className="col-lg-6">
		                                                    <div className="megamenu__widget-group">
		                                                        <a href="about-us.html" className="megamenu__widget-group-link">
		                                                            About us
		                                                            <span>Premium Landing page and HTML template</span>
		                                                        </a>
		                                                    </div>
		                                                </div>
		                                                <div className="col-lg-6">
		                                                    <div className="megamenu__widget-group">
		                                                        <a href="gallery.html" className="megamenu__widget-group-link">
		                                                            Gallery
		                                                            <span>Photo, image and assets</span>
		                                                        </a>
		                                                    </div>
		                                                </div>
		                                                <div className="col-lg-6">
		                                                    <div className="megamenu__widget-group">
		                                                        <a href="services.html" className="megamenu__widget-group-link">
		                                                            Our services
		                                                            <span>Dicit decore numquam ei vel eos ex feugait albucius</span>
		                                                        </a>
		                                                    </div>
		                                                </div>
		                                                <div className="col-lg-6">
		                                                    <div className="megamenu__widget-group">
		                                                        <a href="faq.html" className="megamenu__widget-group-link">
		                                                            F.A.Q
		                                                            <span>Eu pertinax referrentur definitiones ius</span>
		                                                        </a>
		                                                    </div>
		                                                </div>
		                                                <div className="col-lg-6">
		                                                    <div className="megamenu__widget-group">
		                                                        <a href="team.html" className="megamenu__widget-group-link">
		                                                            Our team
		                                                            <span>Meet our professional teams</span>
		                                                        </a>
		                                                    </div>
		                                                </div>
		                                                <div className="col-lg-6">
		                                                    <div className="megamenu__widget-group">
		                                                        <a href="career.html" className="megamenu__widget-group-link">
		                                                            Career
		                                                            <span>Join with our team</span>
		                                                        </a>
		                                                    </div>
		                                                </div>
		                                                <div className="col-lg-6">
		                                                    <div className="megamenu__widget-group">
		                                                        <a href="blog-left-sidebar.html" className="megamenu__widget-group-link">
		                                                            Blog
		                                                            <span>News, article, and events</span>
		                                                        </a>
		                                                    </div>
		                                                </div>
		                                                <div className="col-lg-6">
		                                                    <div className="megamenu__widget-group">
		                                                        <a href="testimoni.html" className="megamenu__widget-group-link">
		                                                            Testimoni
		                                                            <span>The client is talking about us</span>
		                                                        </a>
		                                                    </div>
		                                                </div>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </li>
		                    <li><NavLink to="/how-we-work">How We Work</NavLink></li>
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
