import React, {useEffect, useState} from 'react';
import api from '../../../api/customRestRoutes'; 
import Slider from "react-slick";
import ourClients from '../../../ourClientsData';

const OurClients = () => { 
	
	let clientList;
	if(ourClients.length) {
		clientList = ourClients.map((item, index) => ( 
			<div class="item" key = {index}>
			    <a href="#" class="client">
			        <img src={item.featured_image} class="client_logo" alt={item.post_name} />  
			    </a>
			</div>
		));
	} else {
		return <p>Loading...</p>;
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false
	}

	return(
		<Slider {...settings}> 
			{clientList}
		</Slider>
	);
}

export default OurClients;