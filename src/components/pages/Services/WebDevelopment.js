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
			<section class="section pt-40 pb-0">
				<div class="container">
					<div class="hero__standout">
						<img src={heroImage} class="img-fluid" alt="Image article" />
						<div class="row">
							<div class="col-lg-6">
								<div class="hero__standout--headline">
									<h2 class="section__heading">Web Development</h2>
									<div class="headline">One liner on web development</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="hero__standout--content">
									<p>Some content on web dev</p>
									<Link to="/contact" className="btn btn-primary btn-rounded btn-stroke">Contact Us</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="section">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<h2 class="section__heading section__heading-center">We Expertise In</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-4">
							<div class="section__column section__column-left">
								<span class="icon icon-device column-icon"></span>
								<h4>Frontend Development</h4>
								<p>
									One liner
								</p>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="section__column section__column-left">
								<span class="icon icon-gift column-icon"></span>
								<h4>Backend Development</h4>
								<p>
									One liner
								</p>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="section__column section__column-left">
								<span class="icon icon-paper-plane column-icon"></span>
								<h4>Full-stack Web app development</h4>
								<p>
									One liner
								</p>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="section__column section__column-left">
								<span class="icon icon-chart column-icon"></span>
								<h4>SEO</h4>
								<p>
									One liner
								</p>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="section__column section__column-left">
								<span class="icon icon-cogs column-icon"></span>
								<h4>Static Site Development</h4>
								<p>
									One liner
								</p>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="section__column section__column-left">
								<span class="icon icon-hard-disk column-icon"></span>
								<h4>E-commerce store development</h4>
								<p>
									One liner
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