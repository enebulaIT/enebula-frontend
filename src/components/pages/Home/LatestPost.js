import React, {useState, useEffect} from 'react';
import api from '../../../api/customRestRoutes'; 
import Slider from "react-slick";

const LatestPost = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchData () {
			const response = await api.get('/recent-post-api');
			console.log(response.data);
			setPosts(response.data);
		}
		fetchData();		
	}, [])

	let postList;
	if(posts.length) {
		postList = posts.map((item, index) => ( 
			<div class="item">
			    <div class="article__card">
			        <div class="article__card-heading"> 
			            <h4 class="article__card-title"><a>{item.post_title}</a></h4>
			        </div>
			        <div class="article__card-image">
			            <img src={item.featured_image} class="img-fluid" alt="Image article" />
			        </div>
			        <div class="article__card-footer">
			            <div class="article__card-author">
			                
			                <a>{item.post_date}</a>
			            </div>
			            <a href="#" class="article__card-action btn-link">Read more</a>
			        </div>
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
		slidesToShow: 2,
		slidesToScroll: 1
	}

	return(
		<Slider {...settings}> 
			{postList}
		</Slider>
	);
}

export default LatestPost;