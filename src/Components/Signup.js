import React from 'react';
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm"
import { signup } from '../actions/currentUser.js'
import { Form, Button, InputGroup } from 'react-bootstrap'

const Signup = ({ signupFormData, updateSignupForm, signup }) => {

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
    signup(signupFormData)
  }
    return (
      <Form inline onSubmit={handleSubmit}>
      <div>
          <input 
            type="text" 
            value={signupFormData.firstname}
            name="firstname"
            placeholder="firstname"
            onChange={handleInputChange} />
        </div>
        <div>
          <input 
            type="text" 
            value={signupFormData.lastname}
            name="lastname"
            placeholder="lastname"
            onChange={handleInputChange} />
        </div>
        <div>
          <input 
            type="text" 
            value={signupFormData.location}
            name="location"
            placeholder="location"
            onChange={handleInputChange} />
        </div>
        <div>
          <input 
            type="text" 
            value={signupFormData.username}
            name="username"
            placeholder="username"
            onChange={handleInputChange} />
        </div>
        <div>
          <input 
            type="text" 
            value={signupFormData.email}
            name="email"
            placeholder="email"
            onChange={handleInputChange} />
        </div>
        <div>
          <input 
            type="text" 
            value={signupFormData.img_src}
            name="img_src"
            placeholder="profile photo"
            onChange={handleInputChange} />
        </div>
        <div>
        <input 
            type="password" 
            value={signupFormData.password}
            name="password"
            placeholder="password"
            onChange={handleInputChange } />
        </div>
        <input type="submit" value="Signup" />
      </Form>
  );
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  };
};

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)