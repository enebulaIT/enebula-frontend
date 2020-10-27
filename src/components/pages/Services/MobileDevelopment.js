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
								<div className="hero__standout--headline testimoni">
									<h2 className="section__heading">Mobile Development</h2>
									<blockquote>Mobile is the digital gateway for the real world to join in this global metamorphosis of human behavior.</blockquote> 
									<i>― Tomi Ahonen</i>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="hero__standout--content">
									<p>There had been a significant rise in the “Post-PC” products over the last decade. In fact, a survey tells that more than 68% population of the United States owns a smartphone.</p>

									<p>We call our mobile devices smart for one primary reason: the host of applications they offer. You might have heard a phrase There’s an application for that! and that’s because these apps serve nearly every business purpose now.</p>

									<p >81% of the mobile device users generally search for the product or a service online and 26% of them search for the apps related to that specific product. If your business has an online presence(website) and even an app, then it will definitely leave a great first impression!</p>

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
								<span className="icon icon-mi1 column-icon"></span>
								<h4>Android App Development</h4> 
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-mi2 column-icon"></span>
								<h4>IOS App Development</h4> 
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-mi3 column-icon"></span>
								<h4>Hybrid App Development</h4>
								<p>
									Develop applications for Android, iOS, Web and UWP at once.
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