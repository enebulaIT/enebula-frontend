import React, { useEffect, useState } from 'react';
import contentApi from '../../../api/content';
import LatestPost from './LatestPost';
import UserTestimoni from './UserTestimoni';
import OurClients from './OurClients';

const Home = () => {
	const [pageContent, setPageContent] = useState('');

	useEffect(() => {
		async function fetchData () {
			const response = await contentApi.get('/pages?slug=home');
			setPageContent(response.data[0].content.rendered)
		}

		fetchData();
	}, []); 

	return ( 
			<div>
				<div dangerouslySetInnerHTML = { {__html: pageContent} } />

				<section class="section section__gray-watter--bottom">
				    <div class="container">
				        <div class="row mt-100">
				            <div class="col-lg-6 offset-lg-3">
				                <h2 class="section__heading section__heading-center">User testimoni</h2>
				            </div>
				        </div>
				        <div class="row">
				            <div class="col-lg-6 offset-lg-3 text-center mb-20">
				            	<UserTestimoni />
				            </div>
				        </div>
				        <div class="row">
				            <div class="col">
				                <div class="divider"></div>
				                <OurClients />
				            </div>
				        </div>
				    </div>
				</section>

				<section class="section">
				    <div class="container">
				        <div class="row">
				            <div class="col-lg-6 offset-lg-3">
				                <h2 class="section__heading section__heading-center">Recommended reading</h2>
				            </div>
				        </div>
				        <div class="row">
				            <div class="col-lg-10 offset-lg-1"> 
				            	<LatestPost />
				            </div>
				        </div>
				    </div>
				</section>


			</div>
	);
}

export default Home;