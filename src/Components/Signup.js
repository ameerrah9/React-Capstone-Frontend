import { Form, Button, FormGroup } from 'react-bootstrap'
import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"

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
      <Form inline onSubmit={ handleSubmit}>
        <Form.Group>
          <Form.Control 
            type="text" 
            value={ signupFormData.firstname}
            name="firstname"
            placeholder="firstname"
            onChange={ handleInputChange} />
  </Form.Group>
            <Form.Group>
          <Form.Control  
            type="text" 
            value={ signupFormData.lastname}
            name="lastname"
            placeholder="lastname"
            onChange={ handleInputChange} />
    </Form.Group>

              <Form.Group>
          <Form.Control  
            type="text" 
            value={ signupFormData.location}
            name="location"
            placeholder="location"
            onChange={ handleInputChange} />
    </Form.Group>

    <Form.Group controlId="formBasicUsername">
            <Form.Control  
              type="text" 
              value={ signupFormData.username}
              name="username"
              placeholder="username"
              onChange={ handleInputChange} />
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
            <Form.Control  
              type="text" 
              value={ signupFormData.email}
              name="email"
              placeholder="email"
              onChange={ handleInputChange} />
    </Form.Group>

              <Form.Group>
            <Form.Control  
              type="text" 
              value={ signupFormData.img_src}
              name="img_src"
              placeholder="profile photo"
              onChange={ handleInputChange} />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
          <Form.Control  
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
