import React from 'react';
class DishItem extends React.Component {
    //create constructor
    constructor(props)
    {
        super(props);
        //create property variables
        this.weight  = props.weight;
        this.price = props.price;
        this.photo = props.photo;
        this.description = props.description;
        this.name = props.name;
    }
    render() {
        return (<div className="col-xl-3 col-lg-4 col-md-6">
            <div className="dish-card">
                <div className="dish-img-wrapper">
                    <span className="dish-weight">{this.weight}</span>
                    <img src={this.photo} alt="Garlic Bread Combo" onerror="this.src='https://shrijisgardenrestaurant.com/wp-content/uploads/2021/12/1.jpg';" />
                </div>
                <div className="dish-body">
                    <h4 className="dish-title">{this.name}</h4>
                    <p className="dish-description">{this.description}</p>
                    <div className="dish-footer">
                        <span className="dish-price">{this.price}</span>
                        <a href="#contact" className="btn-order-dish"><i className="fa-solid fa-arrow-right" /></a>
                    </div>
                </div>
            </div>
        </div>)
    }
}
class Dishes extends React.Component {
    render() {
        return (
            <section id="dishes" className="section-padding">
                <div className="container">
                    <div className="section-title-wrapper">
                        <span className="section-subtitle">Chef's Recommendations</span>
                        <h2 className="section-main-title">Popular Dishes <i className="fa-solid fa-utensils" /></h2>
                    </div>
                    <div className="row g-4">
                        <DishItem weight='311g' photo='images/1.jpg' name='Pavbhaji' price='150' description='Potato Tomato Onion Garlic Bread butter etc' />

                        <DishItem weight="350g" photo="images/2.jpg" name="Manchurian Combo" price="175" description="Savory vegetable Manchurian balls tossed in sweet &amp; sour spicy garlic sauce, served alongside vegetable fried rice." />

                        <DishItem weight="400g" photo="images/3.jpg" name="Stuffed Paratha Combo" price="175" description="Flaky tandoori flatbread stuffed with spiced potato mash, served with rich cream curd, local pickle and melting butter." />

                        <DishItem weight="380g" photo="images/4.jpg" name="Dal Jira Rice Combo" price="175" description="Comforting yellow lentil soup tempered with garlic and cumin, served with long grain cumin-flavored basmati rice." />

                        <DishItem weight="450g" photo="images/1.jpg" name="Veg Handi" price="259" description="A colorful array of seasonal garden vegetables slow cooked in a traditional handi vessel with authentic rich tomato gravy." />

                        <DishItem weight="450g" photo="images/2.jpg" name="Veg Toofani" price="259" description="A fiery and flavor-packed mixed vegetable recipe cooked in thick, dark-spiced onion-tomato gravy for spice lovers." />

                        <DishItem weight="500g" photo="images/3.jpg" name="Shriji Special" price="289" description="Our signature chef special dish containing fresh paneer cubes and garden vegetables prepared in rich cream-cashew gravy." />

                        <DishItem weight="150g" photo="images/4.jpg" name="Cheese Garlic Naan" price="130" description="Classic leavened flatbread topped with chopped garlic and coriander, stuffed with dynamic cheese and baked in clay tandoor." />
                    </div>
                </div>
            </section>
        );
    }
}

export default Dishes;
