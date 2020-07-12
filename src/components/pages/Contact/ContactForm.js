import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const formValidationSchema = () => {
	return Yup.object({
		name: Yup.string().required("Name is required."),
		email: Yup.string().email("Invalid email address").required("Email is required.")
	});
}



const ContactForm = props => {
	let formMessage;
  	if (props.submissionStatus === true) {
	    formMessage = (
	      <div className="alert alert-success" role="alert">
	        Hang on we will get in touch with you very soon!
	      </div>
	    );
  	} else if (props.submissionStatus === false) {
	    formMessage = (
	      <div className="alert alert-danger" role="alert">
	        Something went wrong while processing your request. Plesae try again.
	      </div>
	    );
  	}

	const performSubmission = (values, resetForm) => {
		document.querySelector('form button').classList.add('has-loader');
		props.sendMail(values);
		resetForm();
	}

	return(
		<Formik
			onSubmit = {(values, {resetForm}) => performSubmission(values, resetForm)}
			validationSchema = {formValidationSchema()}
			initialValues = {{name: "", email: "", subject: "", comment: ""}}>
		{
			({handleSubmit, getFieldProps, values, errors, touched}) => (
				<form className = "row" onSubmit = {handleSubmit}>
					<div className="col-md-6 form-group">
                     	<label htmlFor="name">Name</label>
                     	<input
                     		name="name" 
                     		type="text"
                     		className={`form-control ${touched.name && errors.name ? 'invalid' : ''}`}
                     		placeholder="Enter your full name" 
                     		{...getFieldProps('name')}/>
                     	{
                     		touched.name && errors.name ? <span className="field-error">{errors.name}</span> : ''
                     	}
                  	</div>
                  	<div className="col-md-6 form-group">
                     	<label htmlFor="emal">Email address</label>
                     	<input 
                     		name="email"
                     		type="text" 
                     		className={`form-control ${touched.email && errors.email ? 'invalid' : ''}`} 
                     		aria-describedby="emal" 
                     		placeholder="Enter your email address" 
                     		{...getFieldProps('email')}/>
                     	{
                     		touched.email && errors.email ? <span className="field-error">{errors.email}</span> : ''
                     	}
                  	</div>
                  	<div className="col-md-12 form-group">
		                <label for="subject">Subject</label>
	                    <input
	                    	name="subject" 
	                    	type="text" 
	                    	className={`form-control`} 
	                    	aria-describedby="subject"
	                    	placeholder="Subject" 
	                    	{...getFieldProps('subject')}/>
	                </div>
	                <div className="col-md-12 form-group">
	                    <label for="comment">Comment</label>
	                    <textarea
	                    	name="comment" 
	                    	className={`form-control`}
	                    	aria-describedby="comment"
	                    	placeholder = "Enter your comment" 
	                    	rows="8" 
	                    	{...getFieldProps('comment')}/>
	                </div>
	                { formMessage }
	                <div className="col-md-12 form-action">
                     	<button type="submit" className="btn btn-primary btn-rounded">Send a message</button>
                  	</div>
				</form>
			)
		}
		</Formik>
	);
}

export default ContactForm;