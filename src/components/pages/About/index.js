import React, { useEffect, useState } from 'react'; 
import OurTeam from './OurTeam';
import heroImage from '../../../images/about-us-1.png';
import { Link } from 'react-router-dom';

const About = props => {  

	useEffect(() => {
		setTimeout(() => {
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}, 100);
	}, []);

	return (
		<div>
			<section className="section pt-40 pb-0">
				<div className="container">
					<div className="hero__standout">
						<img src={heroImage} className="img-fluid" alt="Image article" />
						<div className="row">
							<div className="col-lg-6">
								<div className="hero__standout--headline">
									<h2 className="section__heading">About Us </h2>
									<blockquote>A team away from your team.</blockquote>
									<i>- eNebula</i>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="hero__standout--content">
									<p>We continuously strive to build digital solutions that would help your business thrive in this economy which is turning to a digital one at godspeed. We believe that not so far in the future digital presence will not just be an added advantage for a business but will be an added building block for any business to get started/continue to exist.</p>

									<p>You might ask. Why us? What makes us qualified to handle such an important aspect of a business? Great question! We are a team of highly seasoned and passionate individuals ready to help you build and get you going on your path of success. <b>We are an extension to your team.</b> With us you’ll be getting in touch with some world class leaders who’re offering world-class digital services to world-class people who’re building world-class solutions. Guess that’s enough world-class talk from the apprentice whose world is his class. 😉</p>

									<Link to = "/contact" className="btn btn-primary btn-rounded btn-stroke">Get in touch with us </Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> 
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="section__heading section__heading-center">Our services</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-wi5 column-icon"></span>
								<h4>Web development</h4>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-mi3 column-icon"></span>
								<h4>Mobile Applications</h4>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-game4 column-icon"></span>
								<h4>Game Development</h4>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-cs1 column-icon"></span>
								<h4>Security & Audit</h4>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-des1 column-icon"></span>
								<h4>Designing</h4>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-game3 column-icon"></span>
								<h4>Consultant Services</h4>
								<p>&nbsp;</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 text-center"><a href="#" className="btn btn-primary btn-rounded btn-stroke">View our portfolio </a></div>
					</div>
				</div>
			</section>

			<section className="section section__gray">
			    <div className="container">
			        <div className="row">
			            <div className="col-lg-6 offset-lg-3">
			                <h2 className="section__heading section__heading-center">Meet our team</h2>
			            </div>
			        </div>
					<OurTeam />
			    </div>
			</section>
		</div>
	);
} 

export default About;