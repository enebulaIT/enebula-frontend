import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../../images/serviceBanners/security.png';

const SecurityAudit = () => { 

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
									<h2 className="section__heading">Security & Audit</h2>
									<blockquote>Cybercrime is the greatest threat to every company in the world.</blockquote>
									<i>― Ginni Rommety</i>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="hero__standout--content">
								<p>Cybersecurity is important because it encompasses everything that pertains to protecting our sensitive data, personally identifiable information (PII), protected health information (PHI), personal information, intellectual property, data, and governmental and industry information systems from theft and damage attempted by criminals and adversaries.</p>

<p>Cybersecurity risk is increasing, driven by global connectivity and usage of cloud services, like Amazon Web Services, to store sensitive data and personal information. Widespread poor configuration of cloud services paired with increasingly sophisticated cyber criminals means the risk that your organization suffers from a successful cyber attack or data breach is on the rise.</p>

<p>Gone are the days of simple firewalls and antivirus software being your sole security measures. Business leaders can no longer leave information security to cybersecurity professionals. </p>
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
								<span className="icon icon-cs1 column-icon"></span>
								<h4>VAPT</h4>
								<p>
									Security testing that is designed to identify and help address cyber security vulnerabilities.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-cs2 column-icon"></span>
								<h4>Cyber Forensics</h4>
								<p>
									Preserve evidence from a particular computing device in a way that is suitable for presentation in a court of law.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-cs3 column-icon"></span>
								<h4>Server Management</h4>
								<p>
									Monitoring of the server and apps running on the server.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-cs4 column-icon"></span>
								<h4>Testing</h4>
								<p>
									Checking whether the actual software product matches expected requirements and to ensure that software product is Defect free.
								</p>
							</div>
						</div> 
					</div> 
				</div>
			</section>
		</div>
	);
} 

export default SecurityAudit;