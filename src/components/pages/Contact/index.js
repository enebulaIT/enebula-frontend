import React, { useEffect, useState } from 'react'; 
import ContactForm from './ContactForm';
import {Link} from 'react-router-dom';
import mailAPi from '../../../api/anirudhaApi';

const Contact = () => { 
	const [formSubmissionStatus, setFormSubmissionStatus] = useState(null);

	useEffect(() => { 
		setTimeout(() => {
			document.body.scrollTop = 0; // For Safari
				document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Operai
		}, 100) 
	}, []);

	const sendMail = async values => {
		let status;
		try{
			const response = await mailAPi.post('/send-mail', values); 
			if(response.status === 200) status = true;
			else status = false;
		} catch(err) {
			console.log(err);
			status = false;
		}

		setFormSubmissionStatus(status);
		document.querySelector('form button').classList.remove('has-loader');


		setTimeout(() => {
			setFormSubmissionStatus(null);			
		}, 10000);
	}

	return (
		<>
			<section class="innerpage__head mb-0">
		        <div class="container">
		            <ol class="breadcrumb">
		                <li class="breadcrumb-item"><Link to="/"><i class="fa fa-home"></i> Home</Link></li> 
		                <li class="breadcrumb-item active" aria-current="page">Contact us</li>
		            </ol>
		        </div>
		    </section>
			<section className="section section__contact p-0">
			   <div className="container">
			      <div className="row">
			         <div className="col-lg-8 order-lg-4 js-match-height" style={{height: "866px"}}>
			            <div className="contact__main">
			               <h2 className="section__heading">Contact us</h2>
			               <p>Got a project for us? Wanna explore the possibilities for business expansion in this digital era? Get in touch with us today.</p>
			              	<ContactForm sendMail = {sendMail} submissionStatus = {formSubmissionStatus}/>
			            </div>
			         </div>
			         <div className="col-lg-4 js-match-height" style={{height: "866px"}}>
			            <aside className="aside__left contact__aside">
			               <div className="contact__aside--content"> 
			                  <div className="contact__aside--widget">
								<h5 className="contact__aside--widget-title">
									 <i className="fa fa-phone"></i> 
									 Phone number
								</h5>
								<a href = "tel:+918320295470"><p>+91 83202 95470</p></a>
			                  </div>
			                  <div className="contact__aside--widget">
								<h5 className="contact__aside--widget-title"><i className="fa fa-envelope"></i> Email address</h5>
								<a href = "mailto:admin@fortunachip.com"><p>admin@enebula.com</p></a>
			                  </div>

								<div class="contact__aside--widget social-icons">
									<a target = "_blank" href = "https://www.facebook.com/ENebula-108501717723475">
										<i class="fa fa-facebook-square"></i>
									</a> 
									<a href = "https://twitter.com/e_nebula" target = "_blank">
										<i class="fa fa-twitter"></i> 
									</a>
									<a href = "https://www.linkedin.com/in/enebula-%E2%A0%80%E2%A0%80%E2%A0%80-%E2%A0%80-49530b1ba/" target = "_blank">
										<i class="fa fa-linkedin"></i> 
									</a>
									<a href = "https://www.youtube.com/channel/UCYVTSNmqprMaK9_sxUzIiGA" target = "_blank">
										<i class="fa fa-youtube-play"></i> 
									</a>
								</div>
			               </div>
			            </aside>
			         </div>
			      </div>
			   </div>
			</section>
		</>
	);
}

export default Contact;