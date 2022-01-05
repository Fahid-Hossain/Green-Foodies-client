import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const handleOnBlur = (e) =>{

    }
    const {googleSignIn}=useAuth();
    return (
        <Container className="my-5">
                <div className="login-form-container border border-1">
                <div className="page-title text-center">
                    Create an account
                </div>
                <p>Give the information's</p>
                <form action="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    className="border border-1 border-dark"
                    name="name"
                    onBlur={handleOnBlur}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="border border-1 border-dark"
                    name="email"
                    onBlur={handleOnBlur}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="border border-1 border-dark"
                    name="password"
                    onBlur={handleOnBlur}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Re-type Password"
                    className="border border-1 border-dark"
                    name="password2"
                    onBlur={handleOnBlur}
                  />
                </Form.Group>
                {/* <p><img src={message} alt="" />Forgot your <span style={{color : "#084c33"}}>Password ?</span></p> */}
                <Button className="login-register-btn" variant="primary" type="submit">
                    Register
                </Button>
                </form>
                <p className="mt-3"><b>Join us using social network</b></p>
             <GoogleButton onClick={googleSignIn} className="mx-auto mb-4" />
            </div>
        </Container>
    );
};

export default Register;