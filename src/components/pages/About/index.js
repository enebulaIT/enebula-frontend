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
									<blockquote>An extension to your team..</blockquote>
									<i>- eNebula</i>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="hero__standout--content"> 
									<h2>Values</h2>
									<ul className = "enebula-content">
										<li><b>E</b>ngage them with the mystery of sheerness.</li>
										<li><b>N</b>urture your kindness to convey the happiness & persuade the Passion</li>
										<li><b>E</b>ducation! Let’s add the sprinkle of Innovation & Creativity into it.</li>
										<li><b>B</b>eing Frank is firm enough to be Bold.</li>
										<li><b>U</b> rather Carve the curve than continue in corner.</li>
										<li><b>L</b>et us introduce the Professionals without suits.</li>
										<li><b>A</b>dopt the excellence in the blood.</li>
									</ul>
								</div> 
							</div>
							<div>
								<h2>Principles</h2>
								<ul>
									<li>One for all, All for one (Community Builder)</li>
									<li>Because, without your sense for caring, there can be no sense of community. -Anthony J. D’Angelo. (Community Driven)</li>
									<li>If we had asked people what they wanted for their brand, they would have said visiting card. (Future Proof Development</li>
									<li>We’ll be there for you(We sow the seeds, secure your dream and steal the deal all at once)</li>
									<li>Even the simple(clean) sky is high, as sober water is deep. (Simple Sober)</li>
									<li>There is an ocean to dive, don’t just stuck with single(data).  (Data Informed)</li>
									<li>Have an AI (Artificial Intelligence) instead HI (Human Intelligence). (Plan less, Do More, produce a Plan to Learn).</li>
								</ul>  
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
					{/* <div className="row">
						<div className="col-md-12 text-center"><a href="#" className="btn btn-primary btn-rounded btn-stroke">View our portfolio </a></div>
					</div>    */}
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