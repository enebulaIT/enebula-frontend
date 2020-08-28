import React, { useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import heroImage from '../../../images/serviceBanners/app.png';

const MobileDevelopment = () => { 

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
								<div className="hero__standout--headline">
									<h2 className="section__heading">Mobile Development</h2>
									<div className="headline">One liner on mobile development</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="hero__standout--content">
									<p>Some content on mobile dev</p>
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
								<h4>Android App Development</h4>
								<p>
									One liner
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-gift column-icon"></span>
								<h4>IOS App Development</h4>
								<p>
									One liner
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-paper-plane column-icon"></span>
								<h4>Hybrid App Development</h4>
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

export default MobileDevelopment;