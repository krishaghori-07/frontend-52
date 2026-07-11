// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
import './site.css';
// functional component
function SiteMenu() {
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
function Slider() {
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
                    <div className="slider-bg" style={{ "background-image": "url('images/slider1.png'), url('https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/Shrijis-Website.png')" }}>
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
    </header>)
}
function Aboutus() {
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
function Dishes() {
    return (<section id="dishes" className="section-padding">
        <div className="container">
            <div className="section-title-wrapper">
                <span className="section-subtitle">Chef's Recommendations</span>
                <h2 className="section-main-title">Popular Dishes <i className="fa-solid fa-utensils" /></h2>
            </div>
            <div className="row g-4">
                {/* Dish 1 */}
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="dish-card">
                        <div className="dish-img-wrapper">
                            <span className="dish-weight">300g</span>
                            <img src="images/dish1.jpg" alt="Garlic Bread Combo" onerror="this.src='https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/1.jpg';" />
                        </div>
                        <div className="dish-body">
                            <h4 className="dish-title">Garlic Bread Combo</h4>
                            <p className="dish-description">Golden toasted bread slices topped with minced garlic and melted cheese, served with a delicious dipping sauce.</p>
                            <div className="dish-footer">
                                <span className="dish-price">₹175</span>
                                <a href="#contact" className="btn-order-dish"><i className="fa-solid fa-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Dish 2 */}
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="dish-card">
                        <div className="dish-img-wrapper">
                            <span className="dish-weight">350g</span>
                            <img src="images/dish2.jpg" alt="Manchurian Combo" onerror="this.src='https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/2.jpg';" />
                        </div>
                        <div className="dish-body">
                            <h4 className="dish-title">Manchurian Combo</h4>
                            <p className="dish-description">Savory vegetable Manchurian balls tossed in sweet &amp; sour spicy garlic sauce, served alongside vegetable fried rice.</p>
                            <div className="dish-footer">
                                <span className="dish-price">₹175</span>
                                <a href="#contact" className="btn-order-dish"><i className="fa-solid fa-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Dish 3 */}
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="dish-card">
                        <div className="dish-img-wrapper">
                            <span className="dish-weight">400g</span>
                            <img src="images/dish3.jpg" alt="Stuffed Paratha Combo" onerror="this.src='https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/3.jpg';" />
                        </div>
                        <div className="dish-body">
                            <h4 className="dish-title">Stuffed Paratha Combo</h4>
                            <p className="dish-description">Flaky tandoori flatbread stuffed with spiced potato mash, served with rich cream curd, local pickle and melting butter.</p>
                            <div className="dish-footer">
                                <span className="dish-price">₹175</span>
                                <a href="#contact" className="btn-order-dish"><i className="fa-solid fa-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Dish 4 */}
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="dish-card">
                        <div className="dish-img-wrapper">
                            <span className="dish-weight">380g</span>
                            <img src="images/dish4.jpg" alt="Dal Jira Rice Combo" onerror="this.src='https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/4.jpg';" />
                        </div>
                        <div className="dish-body">
                            <h4 className="dish-title">Dal Jira Rice Combo</h4>
                            <p className="dish-description">Comforting yellow lentil soup tempered with garlic and cumin, served with long grain cumin-flavored basmati rice.</p>
                            <div className="dish-footer">
                                <span className="dish-price">₹175</span>
                                <a href="#contact" className="btn-order-dish"><i className="fa-solid fa-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Dish 5 */}
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="dish-card">
                        <div className="dish-img-wrapper">
                            <span className="dish-weight">450g</span>
                            <img src="images/dish5.jpg" alt="Veg Handi" onerror="this.src='https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/5.jpg';" />
                        </div>
                        <div className="dish-body">
                            <h4 className="dish-title">Veg Handi</h4>
                            <p className="dish-description">A colorful array of seasonal garden vegetables slow cooked in a traditional handi vessel with authentic rich tomato gravy.</p>
                            <div className="dish-footer">
                                <span className="dish-price">₹259</span>
                                <a href="#contact" className="btn-order-dish"><i className="fa-solid fa-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Dish 6 */}
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="dish-card">
                        <div className="dish-img-wrapper">
                            <span className="dish-weight">450g</span>
                            <img src="images/dish6.jpg" alt="Veg Toofani" onerror="this.src='https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/6.jpg';" />
                        </div>
                        <div className="dish-body">
                            <h4 className="dish-title">Veg Toofani</h4>
                            <p className="dish-description">A fiery and flavor-packed mixed vegetable recipe cooked in thick, dark-spiced onion-tomato gravy for spice lovers.</p>
                            <div className="dish-footer">
                                <span className="dish-price">₹259</span>
                                <a href="#contact" className="btn-order-dish"><i className="fa-solid fa-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Dish 7 */}
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="dish-card">
                        <div className="dish-img-wrapper">
                            <span className="dish-weight">500g</span>
                            <img src="images/dish7.jpg" alt="Shriji Special" onerror="this.src='https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/7.jpg';" />
                        </div>
                        <div className="dish-body">
                            <h4 className="dish-title">Shriji Special</h4>
                            <p className="dish-description">Our signature chef special dish containing fresh paneer cubes and garden vegetables prepared in rich cream-cashew gravy.</p>
                            <div className="dish-footer">
                                <span className="dish-price">₹289</span>
                                <a href="#contact" className="btn-order-dish"><i className="fa-solid fa-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Dish 8 */}
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="dish-card">
                        <div className="dish-img-wrapper">
                            <span className="dish-weight">150g</span>
                            <img src="images/dish8.jpg" alt="Cheese Garlic Naan" onerror="this.src='https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/8.jpg';" />
                        </div>
                        <div className="dish-body">
                            <h4 className="dish-title">Cheese Garlic Naan</h4>
                            <p className="dish-description">Classic leavened flatbread topped with chopped garlic and coriander, stuffed with dynamic cheese and baked in clay tandoor.</p>
                            <div className="dish-footer">
                                <span className="dish-price">₹130</span>
                                <a href="#contact" className="btn-order-dish"><i className="fa-solid fa-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}
function Testimonials() {
    return (<section id="testimonials" className="section-padding">
        <div className="container">
            <div className="section-title-wrapper">
                <span className="section-subtitle">Guest Feedbacks</span>
                <h2 className="section-main-title">Testimonials <i className="fa-solid fa-star-half-stroke" /></h2>
            </div>
            <div className="row g-4">
                {/* Testimonial 1 */}
                <div className="col-lg-6">
                    <div className="testimonial-card">
                        <i className="fa-solid fa-quote-right testimonial-quote-icon" />
                        <div className="testimonial-rating">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                        </div>
                        <p className="testimonial-text">
                            "Tried dal fry jeera rice, it's my first time at here. Food was good, quality and quantity both are perfect. Yet other dishes are pending to try. But just on dal fry i can bet food will be good. Staff is very humble, and friendly. They had resolved my all queries and had replied very politely. Sorry snap were not taken forgot it."
                        </p>
                        <div className="testimonial-user">
                            <img src="images/testimonial1.png" alt="Oza Subir" className="testimonial-avatar" onerror="this.src='https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/testimonial1.png';" />
                            <div className="testimonial-info">
                                <h5>Oza Subir</h5>
                                <span>Reviewed on: October 14, 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial 2 */}
                <div className="col-lg-6">
                    <div className="testimonial-card">
                        <i className="fa-solid fa-quote-right testimonial-quote-icon" />
                        <div className="testimonial-rating">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                        </div>
                        <p className="testimonial-text">
                            "Shriji's has been epitome for quality food since years. Service and Hospitality being their best motto too. In the prevailing situation, Shriji's take utmost care from preparations to packaging and deliver food with all safety measures required. Whenever I think of a birthday or a house party or a garden party, it always is Shriji's. Thank-you Shriji's to make our special moments yet memorable."
                        </p>
                        <div className="testimonial-user">
                            <img src="images/testimonial3.png" alt="Ketan Makwana" className="testimonial-avatar" onerror="this.src='https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/testimonial3.png';" />
                            <div className="testimonial-info">
                                <h5>Ketan Makwana</h5>
                                <span>Reviewed on: December 9, 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial 3 */}
                <div className="col-lg-6">
                    <div className="testimonial-card">
                        <i className="fa-solid fa-quote-right testimonial-quote-icon" />
                        <div className="testimonial-rating">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                        </div>
                        <p className="testimonial-text">
                            "Simply Best In Bhavnagar. No matter whether it's a Family Get Together, Social Get Together, Birthday Party, Casual Group Gathering. It is always excellent for all. The outdoor seating with garden vibes and warm lighting makes the dining experience truly exceptional and memorable."
                        </p>
                        <div className="testimonial-user">
                            <img src="images/testimonial3.png" alt="Falgun M. Shah" className="testimonial-avatar" onerror="this.src='https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/testimonial3.png';" />
                            <div className="testimonial-info">
                                <h5>Falgun M. Shah</h5>
                                <span>Reviewed on: January 22, 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial 4 */}
                <div className="col-lg-6">
                    <div className="testimonial-card">
                        <i className="fa-solid fa-quote-right testimonial-quote-icon" />
                        <div className="testimonial-rating">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                        </div>
                        <p className="testimonial-text">
                            "Had been to Shriji’s for the 5th time and every time it's a memorable time. The food service ambience and the location is so perfect that u can't miss it. For any family such location in the heart of the city and connected is an absolute blessing. 7stars rating to the entire hospitality team!"
                        </p>
                        <div className="testimonial-user">
                            <img src="images/testimonial2.png" alt="Urvi K." className="testimonial-avatar" onerror="this.src='https://shrijisgardenrestaurant.com/wp-content/uploads/2020/12/testimonial2.png';" />
                            <div className="testimonial-info">
                                <h5>Urvi K.</h5>
                                <span>Reviewed on: March 5, 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}
function Contactus() {
    return (<section id="contact" className="section-padding">
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
    </section>)
}
function SiteFooter() {
    return (<>
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
    </>)
}
function Website() {
    return (
        <div>
            {/* call SiteMenu function */}
            <SiteMenu />
            {/* Slider (3 Slides) */}
            <Slider />
            {/* About Us Section (2 paragraphs, approx 200 words each) */}
            <Aboutus />
            {/* Dish Section (8 Items) */}
            <Dishes />
            {/* Customer Testimonials Section (4 items) */}
            <Testimonials />
            {/* Contact Us Section */}
            <Contactus />
            {/* Footer (3 Columns) */}
            <SiteFooter />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// this will actually run Website function
root.render(<Website />)