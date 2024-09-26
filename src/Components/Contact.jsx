import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: '',  
    email: '',
    subject: '',
    inquiry_type: '',  
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_z2ym1um', 
      'template_zxkvtnb', 
      formData,
      'DqDJ-VijVLN4WeSKq' 
    )
    .then((result) => {
      alert('Message Sent, I\'ll get back to you shortly!', result.text);
    }, (error) => {
      alert('An error occurred, Please try again', error.text);
    });
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="contactus-container container mt-5">
          <div className="row">
            {/* Form Section */}
            <div className="contactus-form col-md-6 p">
              <h1 className="contactus-heading">How can I help you?</h1>
              <p className="contactus-subheading">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy voluptua.</p>
              
              <form className="contactus-form-container" onSubmit={sendEmail}>
                <div className="row">
                  {/* First Name and Email */}
                  <div className="col-md-6 contactus-form-group mb-3">
                    <label htmlFor="first_name" className="contactus-label form-label">First Name*</label> {/* Changed to first_name */}
                    <input
                      type="text"
                      className="contactus-input form-control"
                      id="first_name"
                      placeholder="Enter your first name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 contactus-form-group mb-3">
                    <label htmlFor="email" className="contactus-label form-label">Email*</label>
                    <input
                      type="email"
                      className="contactus-input form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  {/* Subject and Inquiry Type */}
                  <div className="col-md-6 contactus-form-group mb-3">
                    <label htmlFor="subject" className="contactus-label form-label">Subject*</label>
                    <input
                      type="text"
                      className="contactus-input form-control"
                      id="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 contactus-form-group mb-3">
                    <label htmlFor="inquiry_type" className="contactus-label form-label">Inquiry Type*</label> {/* Changed to inquiry_type */}
                    <select
                      className="contactus-select form-select contactus-input"
                      id="inquiry_type"
                      value={formData.inquiry_type}
                      onChange={handleChange}
                      required
                    >
                      <option value="General">General</option>
                      <option value="Support">Support</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                {/* Message Box */}
                <div className="contactus-form-group mb-3">
                  <label htmlFor="message" className="contactus-label form-label">Your Message*</label>
                  <textarea
                    className="contactus-textarea form-control contactus-input-textarea"
                    id="message"
                    rows="4"
                    placeholder="Write your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contactus-submit-btn btn btn-dark">Submit</button>
              </form>
            </div>

            {/* Image Section */}
            <div className="contactus-image-container col-md-6 d-flex justify-content-center align-items-center">
              <img src="https://healthfirst.qodeinteractive.com/wp-content/uploads/2021/03/contact-img.jpg" alt="Contact Us" className="contactus-image img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
