import React from 'react';

class Testimonials extends React.Component {
    render() {
        return (
            <section id="testimonials" className="section-padding">
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
            </section>
        );
    }
}

export default Testimonials;
