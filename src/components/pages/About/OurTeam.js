import React, {useEffect, useState} from 'react'; 
import ourTeam from '../../../ourTeamData';

const OurTeam = () => { 
	let teamList;
	if(ourTeam.length) {
		teamList = ourTeam.map((item, index) => { 
			return (
				<li className="item" key = {index}>
			       	<div className="team__card mb-0">
						<div className = "card-wrapper">
							<div className="team__thumbnail">
								<img src={item.featured_image} className="img-fluid" alt={item.post_title} />
							</div>
							<div className="team__content">
								<div className="team__content--heading">
									<h4 className="team__name">{item.post_title}</h4>
									<span className="team__position">{item.designation}</span>
								</div>
								<ul className="team__network">
									{
										item.facebook_link ? <li><a href={item.facebook_link} className="team__network--link"><i className="fa fa-facebook"></i></a></li> : ''
									}

									{
										item.twitter_link ? <li><a href={item.twitter_link} className="team__network--link"><i className="fa fa-twitter"></i></a></li>: ""
									}

									{
										item.linkedin_link ? 	<li><a href={item.linkedin_link} className="team__network--link"><i className="fa fa-linkedin"></i></a></li> : ""
									}
								</ul>
							</div>
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