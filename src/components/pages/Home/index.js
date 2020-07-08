import React, { useEffect, useState } from 'react';
import contentApi from '../../../api/content';
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
			<main dangerouslySetInnerHTML = { {__html: pageContent} } />
	);
}

export default Home;