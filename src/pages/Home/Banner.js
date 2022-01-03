import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"

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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <div className="carousel-btn">
                        <button className="btn btn-primary">Our Foods</button>
                        <button className="btn btn-success mx-2">Get Order</button>
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
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <div className="carousel-btn">
                        <button className="btn btn-primary">Our Foods</button>
                        <button className="btn btn-success mx-2">Get Order</button>
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
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        
                        <div className="carousel-btn">
                        <button className="btn btn-primary">Our Foods</button>
                        <button className="btn btn-success mx-2">Get Order</button>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;