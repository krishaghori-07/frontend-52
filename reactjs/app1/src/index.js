// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
import './site.css';
import Dishes from './Dishes';
import Testimonials from './Testimonials';
import Contact from './Contact';
function Menu() {
    return (<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNavbar">
        <div className="container">
            <a className="navbar-brand" href="#home">
                {/* Fallsback to text logo if logo.png is not downloaded yet */}
                <img src="images/logo.png" alt="Shreeji Restaurant" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
                <span className="text-white fw-bold fs-4" style={{ "display": "none", "font-family": "var(--font-heading)", "border-left": "3px solid var(--color-accent)", "padding-left": "10px" }}>SHREEJI</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto align-items-lg-center">
                    <li className="nav-item">
                        <a className="nav-link active" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#dishes">Dishes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#testimonials">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item ms-lg-3">
                        <a className="btn-nav-phone" href="tel:09825369963">
                            <i className="fa-solid fa-phone" /> 098253 69963
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
}
class SiteHeader extends React.Component {
    render() {
        return (<header id="home" className="hero-slider">
            <div id="heroCarousel" className="carousel slide carousel-fade h-100" data-bs-ride="carousel" data-bs-interval={6000}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    {/* Slide 1 */}
                    <div className="carousel-item active">
                        {/* Fallback image is used inline in style */}
                        <div className="slider-bg" style={{ "background-image": "url('images/slider1.png'), url('https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/Shrijis-`Website`.png')" }}>
                            <div className="carousel-caption">
                                <h2 className="slider-title">
                                    <span>Welcome To</span>
                                    Shreeji Restaurant
                                </h2>
                                <p className="slider-text">A complete family garden restaurant in Bhavnagar since 2003.</p>
                                <div className="slider-btn-group">
                                    <a href="#dishes" className="btn btn-custom-primary">View Menu</a>
                                    <a href="#contact" className="btn btn-custom-outline">Find Table</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="carousel-item">
                        <div className="slider-bg" style={{ "background-image": "url('images/slider2.png'), url('https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/Shrijis-Website-2-1.png')" }}>
                            <div className="carousel-caption">
                                <h2 className="slider-title">
                                    <span>Made With Love</span>
                                    Delight In Every Bite
                                </h2>
                                <p className="slider-text">A perfect place to bond over delicious dishes and serene green vibes.</p>
                                <div className="slider-btn-group">
                                    <a href="#dishes" className="btn btn-custom-primary">Explore Food</a>
                                    <a href="#about" className="btn btn-custom-outline">Our Story</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Slide 3 */}
                    <div className="carousel-item">
                        <div className="slider-bg" style={{ "background-image": "url('images/slider3.png'), url('https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/about-us.png')" }}>
                            <div className="carousel-caption">
                                <h2 className="slider-title">
                                    <span>Outdoor Ambiance</span>
                                    Celebrate Special Moments
                                </h2>
                                <p className="slider-text">Spacious outdoor eating experience with sparkling lights and great hospitality.</p>
                                <div className="slider-btn-group">
                                    <a href="#contact" className="btn btn-custom-primary">Book Event</a>
                                    <a href="#testimonials" className="btn btn-custom-outline">Reviews</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Carousel Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </header>);
    }
}
class AboutUs extends React.Component {
    render() {
        return (<section id="about" className="section-padding">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="section-subtitle">Discover</span>
                    <h2 className="section-main-title">About Us <i className="fa-solid fa-leaf" /></h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-wrapper">
                            <img src="images/about.png" alt="Shreeji Restaurant Garden" onerror="this.src='https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/about-us.png';" />
                            <div className="about-experience-badge">
                                <span className="years">23+</span>
                                <span className="text">Years of<br />Excellence</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-text-content">
                            <p className="about-para">
                                Founded with a passion for authentic culinary experiences, Shreeji Restaurant has been a cherished cornerstone of Bhavnagar’s dining scene for over 23 years. Established as a premier family garden restaurant, we have spent more than two decades perfecting our recipes and refining our hospitality to offer an unmatched experience for our guests. Our journey began with a simple vision: to create a welcoming sanctuary where families could gather, celebrate, and bond over exceptional food. Today, that vision is realized in our beautifully landscaped outdoor garden space, where warm ambient lighting, vibrant natural greenery, and a serene atmosphere come together to create a magical dining environment. We take immense pride in being a place where multiple generations of families have celebrated their milestones, from birthdays to anniversaries. Over the years, Shreeji has become synonymous with trust, quality, and hospitality in Bhavnagar, and we continue to strive for culinary excellence every single day. Our team works tirelessly to preserve the legacy that has made us a beloved household name, ensuring that every guest who walks through our doors feels like a part of our extended family, sharing in the joy of good food and beautiful memories under the open sky.
                            </p>
                            <p className="about-para">
                                At Shreeji Restaurant, we believe that great food starts with absolute integrity in the kitchen. Every single dish on our menu is prepared with the utmost care, using only the freshest, handpicked ingredients sourced from local farms. We maintain a strict focus on hygiene and cleanliness, conducting regular sanitation audits and ensuring that our kitchen adheres to the highest safety standards. Our extensive menu is a celebration of diverse flavors, ranging from traditional North Indian main courses and authentic South Indian delicacies to sizzling Chinese starters and delicious family combos. Our chefs combine time-honored cooking techniques with modern culinary innovations to craft dishes that are both comforting and exciting. Whether you are indulging in our signature Veg Handi, sharing a cheese garlic naan with friends, or enjoying one of our curated value combos, you can taste the dedication and love in every bite. We are committed to providing healthy, happy, and wholesome meals that nourish both the body and the soul. Our goal is to consistently deliver an exceptional dining experience that combines mouth-watering flavors, prompt service, and a hygienic environment, making Shreeji the ultimate destination for food lovers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
    }
}
//create class components 
class Website extends React.Component {
    render() {
        return (<div>
            {/* Navigation Bar */}
            <Menu />
            {/* Slider (3 Slides) */}
            <SiteHeader />
            {/* About Us Section (2 paragraphs, approx 200 words each) */}
            <AboutUs />
            {/* Dish Section (8 Items) */}
            <Dishes />
            {/* Customer Testimonials Section (4 items) */}
            <Testimonials />
            {/* Contact Us Section */}
            <Contact />
            {/* Footer (3 Columns) */}
            <footer className="footer">
                <div className="container">
                    <div className="row g-4">
                        {/* Column 1: Restaurant Name, Address, Contact No */}
                        <div className="col-lg-5 col-md-6">
                            <h4 className="footer-restaurant-name">Shreeji Restaurant</h4>
                            <p className="footer-about-text">
                                A cherished garden dining oasis in Bhavnagar, serving quality multi-cuisine delicacies and hosting memorable celebrations for families for over 23 years.
                            </p>
                            <ul className="footer-contact-details">
                                <li>
                                    <i className="fa-solid fa-location-dot" />
                                    <span>1504/A, Rupani Rd, Ghogha Circle, Bhavnagar, Gujarat 364002</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-phone" />
                                    <span>098253 69963 / 094290 05004 / 8401530101</span>
                                </li>
                            </ul>
                        </div>
                        {/* Column 2: Navigation Links */}
                        <div className="col-lg-3 col-md-6">
                            <h5 className="footer-title">Quick Links</h5>
                            <ul className="footer-links">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#dishes">Popular Dishes</a></li>
                                <li><a href="#testimonials">Reviews</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                            </ul>
                        </div>
                        {/* Column 3: Social Media Icons */}
                        <div className="col-lg-4 col-md-12">
                            <h5 className="footer-title">Connect With Us</h5>
                            <p className="footer-about-text">Follow our social channels to get the latest updates on menu upgrades, events, and special festival offers.</p>
                            <div className="footer-social-icons">
                                <a href="https://www.facebook.com/shrijisbvn/?rf=326819564461617" target="_blank" className="social-icon-btn" aria-label="Facebook">
                                    <i className="fa-brands fa-facebook-f" />
                                </a>
                                <a href="https://www.instagram.com/shrijis.sgr/" target="_blank" className="social-icon-btn" aria-label="Instagram">
                                    <i className="fa-brands fa-instagram" />
                                </a>
                                <a href="https://g.page/shriji-s?share" target="_blank" className="social-icon-btn" aria-label="Google Maps">
                                    <i className="fa-solid fa-map-location-dot" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Copyright Divider */}
                    <div className="footer-divider" />
                    <div className="footer-copyright">
                        <p className="mb-0">© <span id="currentYear" /> Shreeji Restaurant. All rights reserved. Curated from <a href="https://shrijisgardenrestaurant.com/" target="_blank">Shriji's Garden Restaurant</a>.</p>
                    </div>
                </div>
            </footer>
            {/* Back to Top Button */}
            <button className="btn-back-to-top" id="backToTopBtn" aria-label="Back to top">
                <i className="fa-solid fa-arrow-up" />
            </button>
        </div>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// this will actually run Website function
root.render(<Website />)