import React from 'react'; 
import { NavLink } from 'react-router-dom';

const Footer = ({ className }) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer__widget">
                            <img src={process.env.PUBLIC_URL + '/logonew-font.svg'} className="footer__widget-logo" alt="Smooth" /> 
                        </div> 
                    </div>
                    <div className="col-lg-3">
                        <div className="footer__widget">
                            <h4 className="footer__widget-title">Quick Links</h4>
                            <ul className="footer__widget-linklist">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About Us</NavLink></li>
                                {/* <li><NavLink to="/how-we-work">How We Work</NavLink></li> */}
                                <li><NavLink to="/contact">Contact Us</NavLink></li> 
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer__widget">
                            <h4 className="footer__widget-title">Services</h4>
                            <ul className="footer__widget-linklist">
                                <li><NavLink to="/services/web-development">Web Development</NavLink></li>
                                <li><NavLink to="/services/mobile-development">Mobile app development</NavLink></li>
                                <li><NavLink to="/services/game-development">Game Solutions & Services</NavLink></li>
                                <li><NavLink to="/services/designing">Designing</NavLink></li>
                                <li><NavLink to="/services/security-audit">Security & Audit</NavLink></li>
                            </ul>
                        </div>
                    </div> 

                    <div class="col-lg-3">
                        <div class="footer__widget">
                            <h4 class="footer__widget-title">Follow us</h4>
                            <ul class="footer__widget-network">
                                <li><a href="https://www.facebook.com/ENebula-108501717723475" target = "_blank" class="footer__widget-network-link"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/enebula_" target = "_blank" class="footer__widget-network-link"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/enebula-%E2%A0%80%E2%A0%80%E2%A0%80-%E2%A0%80-49530b1ba/" target = "_blank" class="footer__widget-network-link"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCYVTSNmqprMaK9_sxUzIiGA" target = "_blank" class="footer__widget-network-link"><i class="fa fa-youtube-play"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div> 

                <div class="row">
                    <div class="col">
                        <div class="footer__subfooter">
                            <div class="row">
                                <div className="col-md-6">
                                    <p>© <a href="/">eNebula</a> | 2020. All Rights Reserved.</p>
                                </div> 
                                {/* <div class="col-md-6 text-right">
                                    <ul class="footer__subfooter-liststyle">
                                        <li><a href="#">Terms Of Service</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Help</a></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
