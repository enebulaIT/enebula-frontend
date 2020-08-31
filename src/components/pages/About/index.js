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
									<h2 className="section__heading">Hello Buddy..!<br /> Welcome to Smooth </h2>
									<div className="headline">We are build awesome marketing template</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="hero__standout--content">
									<p>Suas essent qualisque mel ad, cum ei cibo volutpat explicari. Ut reque veniam option ius, at sed dicat munere audire. Ne duo meliore definiebas, eam id ridens prompta. Ea ius integre impedit adversarium, ex nostrum forensibus vis, an vel numquam inermis omnesque. Vidit mentitum sed ad. Natum ipsum commune in has, nibh euismod no sed, ne sint consul nullam eum.</p>
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
								<span className="icon icon-device column-icon"></span>
								<h4>Web development</h4>
								<p>
									Unum liber commune in mel, ut pri tritani propriae menandri. Cum et magna porro intellegat.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-gift column-icon"></span>
								<h4>Branding</h4>
								<p>
									Unum liber commune in mel, ut pri tritani propriae menandri. Cum et magna porro intellegat.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-paper-plane column-icon"></span>
								<h4>Email Campaign</h4>
								<p>
									Unum liber commune in mel, ut pri tritani propriae menandri. Cum et magna porro intellegat.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-chart column-icon"></span>
								<h4>SEO</h4>
								<p>
									Unum liber commune in mel, ut pri tritani propriae menandri. Cum et magna porro intellegat.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-cogs column-icon"></span>
								<h4>Software engineering</h4>
								<p>
									Unum liber commune in mel, ut pri tritani propriae menandri. Cum et magna porro intellegat.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-hard-disk column-icon"></span>
								<h4>Web server</h4>
								<p>
									Unum liber commune in mel, ut pri tritani propriae menandri. Cum et magna porro intellegat.
								</p>
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