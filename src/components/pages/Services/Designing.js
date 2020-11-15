import React, { useEffect, useState } from 'react'; 
import heroImage from '../../../images/serviceBanners/design.png';
import { Link } from 'react-router-dom';     
import Portfolio from '../../common/Portfolio';

const Designing = () => {  

	useEffect(() => {
		async function fetchData () {
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}

		fetchData();
	}, []);  

	return (
		<div>
			<section className="section pt-40 pb-0">
				<div className="container">
					<div className="hero__standout">
						<img src={heroImage} className="img-fluid" alt="Image article" />
						<div className="row">
							<div className="col-lg-6">
								<div className="hero__standout--headline testimoni">
									<h2 className="section__heading">Designing</h2>
									<blockquote>Design is intelligence made visible.</blockquote>
									<i>- Alina Wheeler</i>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="hero__standout--content">
								<p>Until recently, many businesses and corporations have invested a great amount of money into their research and development departments. While this has offered quite a bit of success, today many are discovering that an investment made in technology or science alone will not provide the returns that were once seen. Instead, companies are using design as a way to differentiate itself from the competitors.</p>

<p>They are finding that design is what is bringing customers and business together. And it’s not just about the name and the logo that you choose, but rather an entire image or a feeling that a customer gets when dealing with the company.</p>

<p>When you are able to create the same feeling in more than one person about your business, then you have a brand that truly represents you and what you have to offer. With a smart design, you will create a feeling, a true excitement surrounding your business or brand. What this means is that a superior design is essential and truly vital when it comes to your business success.</p>
									<Link 
										to="/contact" 
										className="btn btn-primary btn-rounded btn-stroke">Contact Us
									</Link>
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
							<h2 className="section__heading section__heading-center">We Expertise In</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-des1 column-icon"></span>
								<h4>UI/UX</h4>
								<p>
									Crucial to a product and work closely together.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-des2 column-icon"></span>
								<h4>Motion Graphics</h4>
								<p>
									Motion graphics are pieces of animation or digital footage which create the illusion of motion or rotation, and are usually combined with audio for use in multimedia projects.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-des3 column-icon"></span>
								<h4>Branding</h4>
								<p>
									No explanation needed for this one. 👑
								</p>
							</div>
						</div>
					</div> 
				</div>
			</section> 

			<Portfolio 
				componentFor = "designing"
				fetchDataFor = {['explainerVideos', 'logos', 'promotionalVideos', '_3dNvfx']}
			/>

			
		</div>
	);
} 

export default Designing;