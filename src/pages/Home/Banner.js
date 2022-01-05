import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className="carousel-item" interval={1000}>
                    <img
                        className="carousel-img"
                        src="https://i.ibb.co/P4cFzns/Organiko-Go-Daddy-Store-Image.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h3>We Make Healthy</h3>
                        <p>Homemade natural and fresh healthy food we provide which is certified by World Health Organizations.</p>
                        <div className="carousel-btn">
                            <Link to="/foods"><button className="btn btn-primary">Our Foods</button></Link>
                            <Link to="/"><button className="btn btn-success mx-2">Get Order</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item" interval={500}>
                    <img
                        className="carousel-img"
                        src="https://i.ibb.co/168WCwY/Organic-Collage-Food-Facebook-Cover.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h3>Yummy &</h3>
                        <p>Our natural delicious foods gives you a variety of Yummy taste.</p>

                        <div className="carousel-btn">
                            <Link to="/foods"><button className="btn btn-primary">Our Foods</button></Link>
                            <Link to="/"><button className="btn btn-success mx-2">Get Order</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="carousel-img"
                        src="https://i.ibb.co/mJcDSF6/Rare-Exotic-Fruits-Blog-Banner.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h3>Testy Foods</h3>
                        <p>Praesent cursus magna, vel scelerisque is testy all over the green Foods.</p>

                        <div className="carousel-btn">
                            <Link to="/foods"><button className="btn btn-primary">Our Foods</button></Link>
                            <Link to="/"><button className="btn btn-success mx-2">Get Order</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;