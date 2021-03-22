import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"
import {
  Grid,
  Container,
  Input,
  TextField,
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
    <>
      <br></br>
      <form inline onSubmit={ handleSubmit}>
          <div>
          <TextField
            className="white"
            variant="filled"
            type="text" 
            value={ signupFormData.firstname}
            name="firstname"
            placeholder="firstname"
            onChange={ handleInputChange} />
            </div>
            <br></br>

          <div>
          <TextField
            className="white"
            variant="filled" 
            type="text" 
            value={ signupFormData.lastname}
            name="lastname"
            placeholder="lastname"
            onChange={ handleInputChange} /></div>
        <br></br>

          <div>
          <TextField
            className="white"
            variant="filled" 
            type="text" 
            value={ signupFormData.location}
            name="location"
            placeholder="location"
            onChange={ handleInputChange} /></div>
        <br></br>

            <div>
            <TextField
              className="white"
              variant="filled" 
              type="text" 
              value={ signupFormData.username}
              name="username"
              placeholder="username"
              onChange={ handleInputChange} /></div>
        <br></br>

            <div>
            <TextField
              className="white"
              variant="filled" 
              type="text" 
              value={ signupFormData.email}
              name="email"
              placeholder="email"
              onChange={ handleInputChange} /></div>
        <br></br>

            <div></div>
            <TextField
              className="white"
              variant="filled" 
              type="text" 
              value={ signupFormData.img_src}
              name="img_src"
              placeholder="profile photo"
              onChange={ handleInputChange} />
        <br></br>

          <div></div>
          <TextField
            className="white"
            variant="filled" 
            type="password" 
            value={ signupFormData.password}
            name="password"
            placeholder="password"
            onChange={ handleInputChange } />
        <br></br>

          <Button variant="primary" value="Signup" type="submit">Signup</Button>
      </form>
      </>
  );
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)
