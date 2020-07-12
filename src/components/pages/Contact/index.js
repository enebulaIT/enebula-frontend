import React, { useEffect, useState } from 'react';
import contentApi from '../../../api/content';
import ContactForm from './ContactForm';
import {Link} from 'react-router-dom';
import mailAPi from '../../../api/anirudhaApi';

const Contact = () => {
	const [pageContent, setPageContent] = useState('');
	const [formSubmissionStatus, setFormSubmissionStatus] = useState(null);

	useEffect(() => { 
		setTimeout(() => {
			document.body.scrollTop = 0; // For Safari
				document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}, 100) 
	}, []);

	const sendMail = async values => {
		let status;
		try{
			const response = await mailAPi.post('/send_mail', values);
			if(response.data) status = true;
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
			                     <h5 className="contact__aside--widget-title"><i className="fa fa-home"></i> Office address</h5>
			                     <p>St.Kemacetan timur No.13 Block Q2 Jakarta - Indonesia</p>
			                  </div>
			                  <div className="contact__aside--widget">
			                     <h5 className="contact__aside--widget-title"><i className="fa fa-phone"></i> Phone number</h5>
			                     <p>+62 123-456-789-99</p>
			                  </div>
			                  <div className="contact__aside--widget">
			                     <h5 className="contact__aside--widget-title"><i className="fa fa-envelope"></i> Email address</h5>
			                     <p>info@yourdomain.com</p>
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