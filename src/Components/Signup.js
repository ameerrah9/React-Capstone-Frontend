import { Form, Button, FormGroup } from 'react-bootstrap'
import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"
import {
  Grid,
  Container,
  Input,
  InputLabel,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Button,
  FormControl
} from '@material-ui/core';

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
<<<<<<< HEAD
    <>
      <br></br>
      <form inline onSubmit={ handleSubmit}>
          <div>
          <TextField
            className="white"
            variant="filled"
=======
      <Form inline onSubmit={ handleSubmit}>
        <Form.Group>
          <Form.Control 
>>>>>>> parent of e0354c9... adding style to components
            type="text" 
            value={ signupFormData.firstname}
            name="firstname"
            placeholder="firstname"
            onChange={ handleInputChange} />
<<<<<<< HEAD
            </div>
            <br></br>

          <div>
          <TextField
            className="white"
            variant="filled" 
=======
  </Form.Group>
            <Form.Group>
          <Form.Control  
>>>>>>> parent of e0354c9... adding style to components
            type="text" 
            value={ signupFormData.lastname}
            name="lastname"
            placeholder="lastname"
<<<<<<< HEAD
            onChange={ handleInputChange} /></div>
        <br></br>

          <div>
          <TextField
            className="white"
            variant="filled" 
=======
            onChange={ handleInputChange} />
    </Form.Group>

              <Form.Group>
          <Form.Control  
>>>>>>> parent of e0354c9... adding style to components
            type="text" 
            value={ signupFormData.location}
            name="location"
            placeholder="location"
<<<<<<< HEAD
            onChange={ handleInputChange} /></div>
        <br></br>

            <div>
            <TextField
              className="white"
              variant="filled" 
=======
            onChange={ handleInputChange} />
    </Form.Group>

    <Form.Group controlId="formBasicUsername">
            <Form.Control  
>>>>>>> parent of e0354c9... adding style to components
              type="text" 
              value={ signupFormData.username}
              name="username"
              placeholder="username"
<<<<<<< HEAD
              onChange={ handleInputChange} /></div>
        <br></br>

            <div>
            <TextField
              className="white"
              variant="filled" 
=======
              onChange={ handleInputChange} />
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
            <Form.Control  
>>>>>>> parent of e0354c9... adding style to components
              type="text" 
              value={ signupFormData.email}
              name="email"
              placeholder="email"
<<<<<<< HEAD
              onChange={ handleInputChange} /></div>
        <br></br>

            <div></div>
            <TextField
              className="white"
              variant="filled" 
=======
              onChange={ handleInputChange} />
    </Form.Group>

              <Form.Group>
            <Form.Control  
>>>>>>> parent of e0354c9... adding style to components
              type="text" 
              value={ signupFormData.img_src}
              name="img_src"
              placeholder="profile photo"
              onChange={ handleInputChange} />
    </Form.Group>

<<<<<<< HEAD
          <div></div>
          <TextField
            className="white"
            variant="filled" 
=======
    <Form.Group controlId="formBasicPassword">
          <Form.Control  
>>>>>>> parent of e0354c9... adding style to components
            type="password" 
            value={ signupFormData.password}
            name="password"
            placeholder="password"
            onChange={ handleInputChange } />
  </Form.Group>

          <Button variant="primary" value="Signup" type="submit">Signup</Button>
      </Form>
  );
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)
