import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <section id="contact" className="section-padding">
                <div className="container">
                    <div className="section-title-wrapper">
                        <span className="section-subtitle">Find Us &amp; Inquire</span>
                        <h2 className="section-main-title">Contact Us <i className="fa-solid fa-envelope-open-text" /></h2>
                    </div>
                    <div className="row g-5">
                        {/* Contact Info Column */}
                        <div className="col-lg-5">
                            <div className="contact-info-card">
                                <h4 className="contact-info-title">Shreeji Restaurant</h4>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa-solid fa-location-dot" />
                                    </div>
                                    <div className="contact-info-text">
                                        <h5>Address</h5>
                                        <p>1504/A, Rupani Rd, Ghogha Circle,<br />Bhavnagar, Gujarat 364002</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa-solid fa-phone" />
                                    </div>
                                    <div className="contact-info-text">
                                        <h5>Phone Numbers</h5>
                                        <p>
                                            <a href="tel:09825369963">098253 69963</a><br />
                                            <a href="tel:09429005004">094290 05004</a><br />
                                            <a href="tel:8401530101">8401530101</a> <small>(Customer Care)</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa-solid fa-envelope" />
                                    </div>
                                    <div className="contact-info-text">
                                        <h5>Email Address</h5>
                                        <p><a href="mailto:Shrijissgr@gmail.com">Shrijissgr@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa-solid fa-clock" />
                                    </div>
                                    <div className="contact-info-text">
                                        <h5>Opening Hours</h5>
                                        <p>Monday - Sunday<br />11:00 AM - 02:00 PM<br />06:00 PM - 11:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Contact Form Column */}
                        <div className="col-lg-7">
                            <div className="contact-form-wrapper">
                                <h4 className="mb-4 fw-bold" style={{ "font-family": "var(--font-heading)", "color": "var(--color-dark)" }}>Send Us a Message</h4>
                                <form id="contactForm" onsubmit="alert('Thank you for contacting us! We will get back to you shortly.'); this.reset(); return false;">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="tel" className="form-control" id="mobile" placeholder="Mobile Number" pattern="[0-9]{10}" title="Ten digit mobile number" required />
                                                <label htmlFor="mobile">Mobile Number</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" id="detail" placeholder="Message Details" required defaultValue={""} />
                                                <label htmlFor="detail">Message Details</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-submit">Submit Message <i className="fa-regular fa-paper-plane ms-2" /></button>
                                        </div>
                                    </div>
                                </form>
                                {/* Map Embed for premium visual aesthetics */}
                                <div className="mt-4 rounded-3 overflow-hidden shadow-sm" style={{ "height": "250px", "border": "1px solid #e0e0e0" }}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.9754160494473!2d72.13324687588049!3d21.74254776288825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5a65df19a4ad%3A0xe543c7bca74e64f8!2sShriji's%20Garden%20Restaurant!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ "border": "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
