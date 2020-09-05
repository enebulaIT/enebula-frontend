import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import heroImage from '../../../images/serviceBanners/web.png';

const WebDevelopment = () => { 

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
									<h2 className="section__heading">Web Development</h2>
									<blockquote>Websites promote you 24/7: No employee will do that.</blockquote> 
									<i>― Paul Cookson</i>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="hero__standout--content">
									<p>Web development is the most essential if not one of the most essential branding tool for your company. Websites are the basic requirement today if you own a business weather it be a service based business or a product based business. </p>
									<p>
										Owning a website provides you with the users attention from the world to your business niche. Once you got the attention you need you can easily convert the users viewing your websites to a pottential customer.
									</p>
									<p>
										Having a website means customers are always able to find you – anytime, anywhere. Even outside of business hours, your website continues to find and secure new customers. It offers the user convenience as they can access the information they need in the comfort of their own home, with no added pressure to buy. Plus, as most companies nowadays have their own website, there’s every chance you could be losing customers to your competitors by staying offline
									</p>
									<p>
										Wait no more, get in touch with use and get your business to the new heights.
									</p>
									
									<Link to="/contact" className="btn btn-primary btn-rounded btn-stroke">Contact Us</Link>
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
								<span className="icon icon-device column-icon"></span>
								<h4>Frontend Development</h4>
								<p>
									Building atrractive and eye-candy websites using modern tools.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-gift column-icon"></span>
								<h4>Backend Development</h4>
								<p>
									Buidling optimised and performance focused backend services that integrates well with any frontend technology in the market.	
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-paper-plane column-icon"></span>
								<h4>Full-stack Web app development</h4>
								<p>
									End-to-end web based applications.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-chart column-icon"></span>
								<h4>SEO</h4>
								<p>
									Search engine optimization for emproving your page rank.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-cogs column-icon"></span>
								<h4>Static Site Development</h4>
								<p>
									Informative websites development. For small and new businesses.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-hard-disk column-icon"></span>
								<h4>E-commerce store development</h4>
								<p>
									Go online to sell your products!
								</p>
							</div>
						</div>
					</div> 
				</div>
			</section> 
		</div>
	);
} 

export default WebDevelopment;