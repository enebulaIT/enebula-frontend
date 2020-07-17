import React from 'react'; 
import { NavLink } from 'react-router-dom';

const Footer = ({ className }) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer__widget">
                            <img src={process.env.PUBLIC_URL + '/logo.png'} className="footer__widget-logo" alt="Smooth" /> 
                        </div>
                         <div className="col-md-6">
                            <p>© <a href="/">eNebula</a> | 2020. All Rights Reserved.</p>
                        </div> 
                    </div>
                    <div className="col-lg-4">
                        <div className="footer__widget">
                            <h4 className="footer__widget-title">Quick Links</h4>
                            <ul className="footer__widget-linklist">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About Us</NavLink></li>
                                <li><NavLink to="/how-we-work">How We Work</NavLink></li>
                                <li><NavLink to="/contact">Contact Us</NavLink></li> 
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer__widget">
                            <h4 className="footer__widget-title">Services</h4>
                            <ul className="footer__widget-linklist">
                                <li><NavLink to="/services/web-development">Web Development</NavLink></li>
                                <li><NavLink to="/services/mobile-development">Mobile app development</NavLink></li>
                                <li><NavLink to="/services/game-development">Game Solutions & Services</NavLink></li>
                                <li><NavLink to="/services/designing">Security & Audit</NavLink></li>
                                <li><NavLink to="/services/security-audit">Designing</NavLink></li>
                            </ul>
                        </div>
                    </div> 
                </div> 
            </div>
        </footer>
    );
};

export default Footer;
