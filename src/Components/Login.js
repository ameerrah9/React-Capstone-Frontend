import { Form, Button, FormGroup } from 'react-bootstrap'
import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"
import {
  Grid,
  Container,
  Input,
  InputLabel,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Card,
  TextField,
  CardContent,
  FormControl
} from '@material-ui/core';

const Login = ({ loginFormData, updateLoginForm, login, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData, history)
  }
  
    return (
      <Form inline onSubmit={handleSubmit}>
        <div>
            <TextField
              variant="filled"
              type="text" 
              value={loginFormData.username}
              placeholder="username"
              name="username"
              onChange={handleInputChange} />
        </div>
        <br></br>
        <div>
            <TextField
              variant="filled"
              type="password" 
              value={loginFormData.password} 
              placeholder="password"
              name="password"
              onChange={handleInputChange} />
        </div>
        <br></br>

          <Button variant="primary" value="Login" type="submit">Login</Button>
      </Form>
  );
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)