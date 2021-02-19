import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import heroImage from '../../../images/serviceBanners/dm.png'; 

const DegitalMarketing = () => { 

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
									<blockquote>Content is fire; social media is gasoline.</blockquote> 
									<i>― Jay Baer</i>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="hero__standout--content">
									<p>Thinking about which marketing plan would work excellent for your business/brand? Well, have you considered that the use of content to build your brand is just as important as promoting your brand using digital marketing strategies? After all, <em>“Content is the reason search began in the first place.”</em> ~ Lee Odden.</p>
									<p>
                                    Still, you are confused about the real difference between Content Marketing & Digital Marketing? Don’t let it bother you anymore because at eNebula we’re coming with an excellent solution for your Marketing Problems. Of course, eNebula is advancing you with the conventional Digital Marketing strategies like SEO, SEM, SMM (Social Media Marketing), Email marketing & Inbound marketing along with PPC (Pay per Click) but this Queen of Marketing comes with Plus One ;-) the King of Marketing – Content, we know your thoughts have been already running through the Content Marketing’s various junctions from Blogs, Videos, Case studies, UGC, eBooks, guides, Whitepapers, Checklists, to Webinars, Online Courses, Social media posts and so far much more. And Yes, we get it all covered within Content Marketing. After all, “Content Marketing is all the Marketing that’s Left.” (~ Seth Godin), and if we say one step ahead of that “Digital Marketing is all Marketing that could help to do it (Content) Right.” 😉
									</p>
									
									<Link to="/contact" className="btn btn-primary btn-rounded btn-stroke">Contact Us</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
} 

export default DegitalMarketing;