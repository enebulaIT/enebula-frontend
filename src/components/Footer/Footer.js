import React from 'react'; 

const Footer = ({ className }) => {
    return (
        <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="footer__widget">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} className="footer__widget-logo" alt="Smooth" /> 
                </div>
            </div>
            <div className="col-6 col-lg-3 col-sm-3">
                <div className="footer__widget">
                    <h4 className="footer__widget-title">Product</h4>
                    <ul className="footer__widget-linklist">
                        <li><a href="#">Landing page</a></li>
                        <li><a href="#">Email marketing</a></li>
                        <li><a href="#">HTML template</a></li>
                        <li><a href="#">Angular builder</a></li>
                        <li><a href="#">Worpress theme</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-6 col-lg-3 col-sm-3">
                <div className="footer__widget">
                    <h4 className="footer__widget-title">Company</h4>
                    <ul className="footer__widget-linklist">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-6 col-lg-3 col-sm-3">
                <div className="footer__widget">
                    <h4 className="footer__widget-title">Resources</h4>
                    <ul className="footer__widget-linklist">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">F.A.Q</a></li>
                        <li><a href="#">Testimoni</a></li>
                        <li><a href="#">Site map</a></li>
                    </ul>
                </div>
            </div> 
        </div>
        <div className="row">
            <div className="col">
                <div className="footer__subfooter">
                    <div className="row">
                        <div className="col-md-6">
                            <p>© <a href="/">eNebula</a> | 2020. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6 text-right">
                            <ul className="footer__subfooter-liststyle">
                                <li><a href="#">Terms Of Service</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    );
};

export default Footer;
