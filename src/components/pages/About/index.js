import React, { useEffect, useState } from 'react';
import contentApi from '../../../api/content';
import OurTeam from './OurTeam';

const About = () => {
	const [pageContent, setPageContent] = useState('');

	useEffect(() => {
		async function fetchData () {
			const response = await contentApi.get('/pages?slug=about');
			setPageContent(response.data[0].content.rendered)

			setTimeout(() => {
				document.body.scrollTop = 0; // For Safari
  				document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
			}, 100)
		}

		fetchData();
	});

	return (
		<div>
			<div dangerouslySetInnerHTML = { {__html: pageContent} } /> 

			<section class="section section__gray">
			    <div class="container">
			        <div class="row">
			            <div class="col-lg-6 offset-lg-3">
			                <h2 class="section__heading section__heading-center">Meet our team</h2>
			            </div>
			        </div>
			        <div class="owl-active-nav">
			            <div class="owl-carousel js-owl-team owl-loaded owl-drag">  
			                <OurTeam />
			            </div>
			        </div>
			    </div>
			</section>
		</div>
	);
} 

export default About;