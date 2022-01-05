import React, {useState} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import {useLocation, useHistory} from 'react-router-dom';
import GoogleButton from 'react-google-button';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const {googleSignIn, registerUser}=useAuth();
    const [registerDetails, setRegisterDetails] = useState({
      name : "",
      email: "",
      password : "",
      password2 : ""
    });
    const history = useHistory();
    const location = useLocation();

    const handleGoogleSignIn = () => {
      googleSignIn(location, history);
    };
    const handleOnBlur = (e) =>{
      const field = e.target.name;
      const value = e.target.value;
      const newState = {...registerDetails};
      newState[field] = value;
      setRegisterDetails(newState);
    };
    const handleRegisterSubmit = (e) =>{
      e.preventDefault();
      console.log(registerDetails);
      if(registerDetails.password === registerDetails.password2){
          registerUser(registerUser.email, registerUser.password, registerUser.name, history);
      }
    }

    return (
        <Container className="my-5">
                <div className="login-form-container border border-1">
                <div className="page-title text-center">
                    Create an account
                </div>
                <p>Give the information's</p>
                <form onSubmit={handleRegisterSubmit}>
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
             <GoogleButton onClick={handleGoogleSignIn} className="mx-auto mb-4" />
            </div>
        </Container>
    );
};

export default Register;