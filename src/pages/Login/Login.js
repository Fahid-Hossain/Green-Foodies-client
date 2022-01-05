import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Login.css';
import GoogleButton from 'react-google-button';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();
    return (
        <Container className="my-5">
            <div className="login-form-container border border-1">
                <div className="page-title text-center">
                    Login page
                </div>
                <p>Login using social network</p>
                <GoogleButton onClick={googleSignIn} className="mx-auto mb-4" />
                <p>Or insert your account information : </p>
                <form action="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className="green-form-email green-form-control" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className="green-form-password green-form-control" type="password" placeholder="Password" />
                </Form.Group>
                {/* <p><img src={message} alt="" />Forgot your <span style={{color : "#084c33"}}>Password ?</span></p> */}
                <Button className="login-register-btn" variant="primary" type="submit">
                    Login
                </Button>
                </form>
            </div>
        </Container>
    );
};

export default Login;