import React from 'react';
import { Container } from 'react-bootstrap';
import './Login.css';
import GoogleButton from 'react-google-button';

const Login = () => {
    return (
        <Container className="my-5">
            <div className="login-form-container">
                <div className="page-title text-center">
                    Login
                </div>
                <p>Login using social network</p>
                <GoogleButton className="mx-auto mb-4" />
                <p>Or insert your account information : </p>
                form

            </div>
        </Container>
    );
};
