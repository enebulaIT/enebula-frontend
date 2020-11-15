import React, { useEffect, useState } from 'react';
import contentApi from '../../../api/content'; 
import UserTestimoni from './UserTestimoni';
import OurClients from './OurClients';
import { Link } from 'react-router-dom';
import mainImage from '../../../images/main.png';

import webImage from '../../../images/web.svg';
import appImage from '../../../images/App.svg';
import gameImage from '../../../images/GAME.svg';
import cyberImage from '../../../images/security.svg'; 
import designImage from '../../../images/dessign.svg';
import consultImage from '../../../images/consultantcy.svg';

const Home = () => {
	const [pageContent, setPageContent] = useState('');

	useEffect(() => {
		async function fetchData () {
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}

		fetchData();
	}, []); 

	return ( 
		<div>
			<section  className="masthead js-masthead-height pb-0">
				<div  className="masthead__style-overlay"></div>
				<div  className="masthead__style-watter">
					<div  className="container">
						<div  className="row">
							<div  className="col-lg-6">
								<div  className="masthead__content masthead__content-mtop">
									<h1  className="masthead__content-title">You Dream it, We Do it.</h1>
									<p  className="masthead__content-subtitle">Our team is here for you to do any digital venture you want to initiate. You just say the name, we’ll provide you all the needs you want.</p>
									{/* <div  className="masthead__content-action">
										<a  className="btn btn-primary btn-rounded btn-icon-left" href="/services">View Our Services</a> 
									</div>  */}
								</div> 
							</div> 
							<div  className="col-lg-6 text-center">
								<div  className="masthead__style-watter--image"> 
									<img  className="img-fluid" src={mainImage} alt="Hero Image" /> 
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section  className="section pb-40">
				<div  className="container">
					<div  className="row">
						<div  className="col-lg-6 offset-lg-3">
							<h2  className="section__heading section__heading-center">We build awesome digital solutions</h2>
						</div>
					</div>
					<div  className="row">
						<div  className="col-lg-8 offset-lg-2 text-center mb-40">
							<p> Since inception, eNebula is only focused to be better than what we were yesterday, and so that we’re always ready to provide comprehensive services to help enterprises do what is best in the Market. With Our holistic approach, astonishing problem solving abilities, and operational readiness. We identify and strive to satisfy the demand of our customers which makes us one of the top initiators in business.  </p>
						</div>
					</div>
					<div  className="row">
						<div  className="col-lg-4">
							<div  className="section__column section__column-left"> <span  className="icon icon-hi1 column-icon"></span>
								<h4>All in one package</h4>
								<p> Everything you need under one hood. </p>
							</div>
						</div>
						<div  className="col-lg-4">
							<div  className="section__column section__column-left"> <span  className="icon icon-hi2 column-icon"></span>
								<h4>24×7×365 Help Desk</h4>
								<p> Always there for you :) </p>
							</div>
						</div>
						<div  className="col-lg-4">
							<div  className="section__column section__column-left"> <span  className="icon icon-hi3 column-icon"></span>
								<h4>Easy & Quick</h4>
								<p> Quick solutions that suits your need. </p>
							</div>
						</div>
						<div  className="col-lg-4">
							<div  className="section__column section__column-left"> <span  className="icon icon-hi4 column-icon"></span>
								<h4>Modern Setup</h4>
								<p> Up to date. Up to mark. </p>
							</div>
						</div>
						<div  className="col-lg-4">
							<div  className="section__column section__column-left"> <span  className="icon icon-hi5 column-icon"></span>
								<h4>The most competitive pricing</h4>
								<p> Small business? No problem. </p>
							</div>
						</div>
						<div  className="col-lg-4">
							<div  className="section__column section__column-left"> <span  className="icon icon-hi6 column-icon"></span>
								<h4>Experienced team</h4>
								<p> Team of seasoned tech gurus. </p>
							</div>
						</div>
						<div  className="col-lg-4">
							<div  className="section__column section__column-left"> <span  className="icon icon-hi7 column-icon"></span>
								<h4>Secure</h4>
								<p> Ultra high secure apps following market standard norms. </p>
							</div>
						</div>
						<div  className="col-lg-4">
							<div  className="section__column section__column-left"> <span  className="icon icon-hi8 column-icon"></span>
								<h4>Creative</h4>
								<p> Unique designs and ideas that will blow your minds away. </p>
							</div>
						</div>
						<div  className="col-lg-4">
							<div  className="section__column section__column-left"> <span  className="icon icon-hi9 column-icon"></span>
								<h4>Optimistic approach</h4>
								<p> No ifs. No buts. Only result oriented work. </p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div  className="section__divider section__divider-right d-none d-lg-block"></div>
			<section  className="section pt-40 pb-0 sm-clear-pt">
				<div  className="container">
					<div  className="row">
						<div  className="col-lg-8 mb-40"> 
							<img src={webImage}  className="img-fluid" alt="Using Software" /> 
						</div>
						<div  className="col-lg-4 align-self-center mb-40">
							<h2>Web Development</h2>
							<p> Our Developers are dedicated to help you from basic informative websites to highly complex web-applications. </p> 

							<Link to = "/services/web-development/" className="btn btn-primary btn-rounded">Learn More</Link>
						</div>
					</div>
				</div>
			</section>
			<div  className="section__divider section__divider-left"></div>
			<section  className="section pt-0 pb-0">
				<div  className="container">
					<div  className="row">
						<div  className="col-lg-8 order-lg-4 mb-40 text-lg-right text-sm-center"> 
							<img src={appImage}  className="img-fluid" alt="Lady with handphone" /> 
						</div>
						<div  className="col-lg-4 align-self-center mb-40">
							<h2>Mobile Applications</h2>
							<p> For cheaper, Better And Right on Deadline Custom Built Mobile Applications ‘Schedule time to talk’. </p>
							
							<Link to="/services/mobile-development"  className="btn btn-primary btn-rounded">Learn more </Link>

						</div>
					</div>
				</div>
			</section>
			<div  className="section__divider section__divider-right"></div>
			<section  className="section pt-0 pb-60">
				<div  className="container">
					<div  className="row">
						<div  className="col-lg-8 mb-40"> 
							<img src={gameImage}  className="img-fluid" alt="Lady with handphone" /> 
						</div>
						<div  className="col-lg-4 align-self-center mb-40">
							<h2>Game Development</h2>
							<p> From 2D or 3D, AR or VR, Single or Multiplayer any sorts of game on any device we’ll always there to help you. </p>
							
							
							<Link to="/services/game-development"  className="btn btn-primary btn-rounded">Learn more </Link>
						</div>
					</div>
				</div>
			</section>
			<div  className="section__divider section__divider-left"></div>
			<section  className="section pt-0 pb-60">
				<div  className="container">
					<div  className="row">
						<div  className="col-lg-8 order-lg-4 mb-40 text-lg-right text-sm-center"> 
							<img src={cyberImage}  className="img-fluid" alt="Business Man with Laptop" /> 
						</div>
						<div  className="col-lg-4 align-self-center mb-40">
							<h2>Security & Audit</h2>
							<p> Test it, Secure it. Yes before any attackers can destroy your digital dream venture, Let Us Audit it And Make It Secure for You. </p>
							
							<Link to="/services/designing"  className="btn btn-primary btn-rounded">Learn more </Link>
						</div>
					</div>
				</div>
			</section>
			<div  className="section__divider section__divider-right"></div>
			<section  className="section pt-0 pb-60">
				<div  className="container">
					<div  className="row">
						<div  className="col-lg-8 mb-40"> 
							<img src={designImage}  className="img-fluid" alt="Lady with handphone" />  
						</div>
						<div  className="col-lg-4 align-self-center mb-40">
							<h2>Designing </h2>
							<p> ‘Design is intelligence made visible’. - Alina Wheeler. We are here to serve you the all facilitate designs you need from Branding to UI/UX and even Motion Graphics. </p>
							
							<Link to="/services/security-audit"  className="btn btn-primary btn-rounded">Learn more </Link>
						</div>
					</div>
				</div>
			</section>
			<div  className="section__divider section__divider-left"></div>
			<section  className="section pt-0 pb-60">
				<div  className="container">
					<div  className="row">
						<div  className="col-lg-8 order-lg-4 mb-40 text-lg-right text-sm-center"> 
							<img src={consultImage}  className="img-fluid" alt="Business Man with Laptop" /> 
						</div>
						<div  className="col-lg-4 align-self-center mb-40">
							<h2>Consultant Services</h2>
							<p> Consult us for any of your trouble because, ‘A consultant is someone who saves his client almost enough to pay his fee.’ – Arnold H. Glasow </p>
							
							<Link to="/"  className="btn btn-primary btn-rounded">Learn more </Link>
						</div>
					</div>
				</div>
			</section>

			<section className="section section__gray-watter--bottom">
				<div className="container">
					<div className="row mt-100">
						<div className="col-lg-6 offset-lg-3">
							<h2 className="section__heading section__heading-center">User testimoni</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 offset-lg-3 text-center mb-20">
							<UserTestimoni />
						</div>
					</div>
				</div>
				
				<div className="divider"></div>
				
				<div className="row mt-100">
					<div className="col-lg-6 offset-lg-3">
						<h2 className="section__heading section__heading-center">Our Clients</h2>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<OurClients />
					</div>
				</div> 
			</section>  
		</div>
	);
}

export default Home;