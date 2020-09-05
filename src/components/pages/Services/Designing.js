import React, { useEffect } from 'react'; 
import heroImage from '../../../images/serviceBanners/design.png';
import { Link } from 'react-router-dom';
import { Tabs , Paper, Tab } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';


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
								<div className="hero__standout--headline">
									<h2 className="section__heading">Designing</h2>
									<div className="headline">One liner on designing</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="hero__standout--content">
									<p>Some content on designing</p>
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
								<span className="icon icon-device column-icon"></span>
								<h4>UI/UX</h4>
								<p>
									One liner
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-gift column-icon"></span>
								<h4>Motion Graphics</h4>
								<p>
									One liner
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-paper-plane column-icon"></span>
								<h4>Branding</h4>
								<p>
									One liner
								</p>
							</div>
						</div>
					</div> 
				</div>
			</section> 


			<section className = "section">
				<div className = "container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="section__heading section__heading-center">Portfolio</h2>
						</div>
					</div>

					<Paper >
						<Tabs
							// value={value}
							// onChange={handleChange}
							indicatorColor="primary"
							textColor="primary"
							centered
						>
							<Tab label="Item One" />
							<Tab label="Item Two" />
							<Tab label="Item Three" />
						</Tabs>
					</Paper>

					<TabPanel index={0}>
					Item One
					</TabPanel>
					<TabPanel index={1}>
					Item Two
					</TabPanel>
					<TabPanel index={2}>
					Item Three
					</TabPanel>
				</div>
			</section>
		</div>
	);
} 

export default Designing;