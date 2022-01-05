import React, {useState} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import {useLocation, useHistory} from 'react-router-dom';
import './Login.css';
import GoogleButton from 'react-google-button';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn, emailSignIn, setError } = useAuth();
    const [loginDetails, setLoginDetails] = useState({email: '', password : ''});
    const location = useLocation();
    const history = useHistory();
    const destination = location?.state?.from || '/';
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginDetails = {...loginDetails};
        newLoginDetails[field] = value;
        setLoginDetails(newLoginDetails);
    };

    const handleLoginSubmit = e =>{
        e.preventDefault();
        emailSignIn()
        .then(user => {
            history.push(destination);
        })
        .catch(error => {
            setError(error.message);
        })
    };
    const handleGoogleSignIn = () =>{
        googleSignIn(location, history);
    };

    return (
        <Container className="my-5">
            <div className="login-form-container border border-1">
                <div className="page-title text-center">
                    Login page
                </div>
                <p>Login using social network</p>
                <GoogleButton onClick={handleGoogleSignIn} className="mx-auto mb-4" />
                <p>Or insert your account information : </p>
                <form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control 
                    className="green-form-email green-form-control" 
                    name="email"
                    type="email" 
                    onBlur={handleOnBlur}
                    placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control 
                    className="green-form-password green-form-control" 
                    name="password"
                    type="password" 
                    onBlur={handleOnBlur}
                    placeholder="Password" />
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