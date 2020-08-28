import React, { useEffect } from 'react'; 
import heroImage from '../../../images/serviceBanners/game.png';
import { Link } from 'react-router-dom';

const GameDevelopment = () => { 
	
	useEffect(() => {
		function fetchData () {
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
									<h2 className="section__heading">Game Solutions & Services</h2>
									<div className="headline">One liner on game development</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="hero__standout--content">
									<p>Some content on game dev</p>
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
								<h4>Unity 2D/2.5D/3D</h4>
								<p>
									One liner
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-gift column-icon"></span>
								<h4>AR</h4>
								<p>
									One liner
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-paper-plane column-icon"></span>
								<h4>Single/Multiplayer</h4>
								<p>
									One liner
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-paper-plane column-icon"></span>
								<h4>Online</h4>
								<p>
									One liner
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-paper-plane column-icon"></span>
								<h4>Gamification</h4>
								<p>
									One liner
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-paper-plane column-icon"></span>
								<h4>Platform specific</h4>
								<p>
									Android, iOS, Windows, Mac, Facebook and WebBrowser(WebGL) games
								</p>
							</div>
						</div> 
					</div> 
				</div>
			</section>  
		</div>
	);
} 

export default GameDevelopment;