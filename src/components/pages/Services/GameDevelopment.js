import React, { useEffect } from 'react'; 
import heroImage from '../../../images/serviceBanners/game.png';
import { Link } from 'react-router-dom';

const GameDevelopment = () => { 
	
	useEffect(() => {
		function fetchData () {
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
									<h2 className="section__heading">Game Solutions & Services</h2>
									<blockquote>A well-designed game is a guided missile to the motivational heart of the human psyche.</blockquote>
									<i>- Kevin Werbach</i> 
								</div>
							</div>
							<div className="col-lg-6">
								<div className="hero__standout--content">
								<p>Playing game teaches u more principle then they are wrong it's somewhere true because I also have played for 4–5 years . But i kept on enjoying it. I never thought how the game works what are the requirements to built a game all I know the story ,. The player moves. And the only thing how to complete that mission</p>

<p>There are lot of things when you design it (modelling, mapping, sound editing, 2D graphics edition and creation, conceptual drawing, sound editing, story telling and creation, animation of 3D characters, prop design, resources optimization tasks,). When running my first car in Unity I know I have to counter many thing like physics (. Gravity, rigid body, rotation,torque , centrepetal force ) maths ( coordinates for camera ). And I think without them how can you.</p>

<p>Game development is not all about programming . See the player controls in IGI 1, is havinf similar code as IGI 2 but the graphics optimisation , mapping , dynamic camera , make game more realistic. And today game development is working on more realistic game..</p>
									<Link to="/contact" className="btn btn-primary btn-rounded btn-stroke">Contact Us</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="section__heading section__heading-center">We Expertise In</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-game1 column-icon"></span>
								<h4>Unity 2D/2.5D/3D</h4> 
								<p>Cross-platform game engine developed by Unity Technologies</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-game2 column-icon"></span>
								<h4>AR</h4>
								<p>
									Interactive experience of a real-world environment
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-game3 column-icon"></span>
								<h4>Single/Multiplayer</h4> 
								<p>The hottest of em all.</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-game4 column-icon"></span>
								<h4>Online</h4> 
								<p>Coz. Why not.😜</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="section__column section__column-left">
								<span className="icon icon-game5 column-icon"></span>
								<h4>Gamification</h4>
								<p>
									Application of game-design elements and game principles in non-game contexts.
								</p>
							</div>
						</div>  
					</div> 
				</div>
			</section>  
		</div>
	);
} 

export default GameDevelopment;