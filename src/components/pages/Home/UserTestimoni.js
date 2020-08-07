import React, {useEffect, useState} from 'react';
import api from '../../../api/customRestRoutes'; 
import Slider from "react-slick";

const UserTestimoni = () => {
	const [userTestimoni, setUserTestimoni] = useState([]);
	
	useEffect(() => {
		async function fetchData() {
			const response = await api.get('/testimoni-api');
			setUserTestimoni(response.data);
		}
		fetchData();
	}, []);	

	let testimonialList;
	if(userTestimoni.length) {
		testimonialList = userTestimoni.map((item, index) => (
			<div className="item" key = {index}>
		        <div className="testimoni">
		            <blockquote>{item.post_content}</blockquote>
		            <p className="testimoni__author"><a>{item.post_title}</a></p>
		            <a className="testimoni__avatar">
		            	<img 
		            		src={ item.featured_image } 
		            		className="testimoni__avatar-image" 
		            		alt = { item.post_title }/>
	            	</a>
		        </div>
		    </div> 
		));
	} else {
		return <p>Loading...</p>;
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	}

	return(
		<Slider {...settings}> 
			{testimonialList}
		</Slider>
	);
}

export default UserTestimoni;