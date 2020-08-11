import React, {useEffect, useState} from 'react';
import api from '../../../api/customRestRoutes'; 
import Slider from "react-slick";

const OurTeam = () => {
	const [ourTeam, setOurTeam] = useState([]);
	
	useEffect(() => {
		async function fetchData() {
			const response = await api.get('/our-team-api'); 
			setOurTeam(response.data);
		}
		fetchData();
	}, []);	

	let teamList;
	if(ourTeam.length) {
		teamList = ourTeam.map((item, index) => {
			const memberData = JSON.parse(item.post_content);
			return (
				<li className="item" key = {index}>
			       	<div className="team__card mb-0">
				        <div className="team__thumbnail">
				            <img src={item.featured_image} className="img-fluid" alt={item.post_title} />
				        </div>
				        <div className="team__content">
				            <div className="team__content--heading">
				                <h4 className="team__name">{item.post_title}</h4>
				                <span className="team__position">{memberData.designation}</span>
				            </div>
				            <ul className="team__network">
				            	{
				            		memberData.facebook_link ? <li><a href={memberData.facebook_link} className="team__network--link"><i className="fa fa-facebook"></i></a></li> : ''
				            	}

				            	{
				            		memberData.twitter_link ? <li><a href={memberData.twitter_link} className="team__network--link"><i className="fa fa-twitter"></i></a></li>: ""
				            	}

				            	{
				            		memberData.linkedin_link ? 	<li><a href={memberData.linkedin_link} className="team__network--link"><i className="fa fa-linkedin"></i></a></li> : ""
				            	}
				            </ul>
				        </div>
				    </div>
			    </li>   
			);
		});
	} else {
		return <p>Loading...</p>;
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false
	}

	return(  
		<ul className = "member-list">
			{teamList}
		</ul>
	);
}

export default OurTeam;