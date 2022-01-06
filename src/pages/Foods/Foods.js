import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';

const Foods = () => {
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
            <h2>Our Stock Now {foods.length}</h2>
            {
                foods.length ===0 && <Spinner animation="border" variant="success" />
            }
            {
                foods.length !==0 && <Row xs={1} md={3} className="g-4">
                {foods.map((food, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={food.image} />
                            <Card.Body>
                                <Card.Title>{food.title}</Card.Title>
                                <Card.Text>
                                    {food.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            }
        </div>
    );
};

export default Foods;