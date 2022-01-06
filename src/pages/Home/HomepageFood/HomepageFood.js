import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const HomepageFood = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch("https://fast-caverns-43856.herokuapp.com/foods")
            .then(res => res.json())
            .then(data => {
                setFoods(data);
            })
    }, [])

    return (
        <div>
            <h2 className="text-success my-4 text-uppercase">Some of our Stock</h2><hr />
            {
                foods.length === 0 && <Spinner animation="border" variant="success" />
            }
            {
                foods.length !== 0 && <Row xs={1} md={3} className="g-0">
                    {foods.slice(0,6).map((food, idx) => (
                        <Col>
                            <Card>
                                <Card.Img className="food-img" variant="top" src={food.image} />
                                <Card.Body>
                                    <Card.Title>{food.title}</Card.Title>
                                    <h3>${food.price}</h3>
                                    <h6>{food.category}</h6>
                                    <Card.Text>
                                        {food.description}
                                    </Card.Text>
                                    <Rating className="rating"
                                        initialRating={food.rating.rate}
                                        readonly
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                    />
                                </Card.Body>
                                    <Link to="/"><Button className="food-order-btn" variant="success" size="lg">Order-now</Button>{' '}</Link>
                            </Card>
                            
                        </Col>
                    ))}
                </Row>
            }
            <Link to="/foods"><Button className="food-order-btn my-5 px-5" variant="secondary" size="lg">See more..</Button>{' '}</Link> 
        </div>
    );
};

export default HomepageFood;