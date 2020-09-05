import React, {useEffect, useState} from 'react'; 
import Slider from "react-slick";
import ourClients from '../../../ourClientsData';

const OurClients = () => { 
	
	let clientList;
	if(ourClients.length) {
		clientList = ourClients.map((item, index) => ( 
			<div class="item client" key = {index}>
			    <a href="javascript:void(0)">
			        <img src={item.featured_image} class="client_logo" alt={item.post_name} />  
			        <img src={item.featured_image_reg} class="client_logo-hover" alt={item.post_name} />  
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
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
			  breakpoint: 768,
			  settings: { 
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 480,
			  settings: { 
				slidesToShow: 2
			  }
			}
		  ]
	}

	return(
		<Slider {...settings}> 
			{clientList}
		</Slider>
	);
}

export default OurClients;