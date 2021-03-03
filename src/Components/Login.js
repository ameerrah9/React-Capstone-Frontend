import { Form, Button, InputGroup } from 'react-bootstrap'
import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"

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
          <input 
            type="text" 
            value={loginFormData.username}
            placeholder="username"
            name="username"
            onChange={handleInputChange} />
        </div>
        <div>
        <input 
            type="password" 
            value={loginFormData.password} 
            placeholder="password"
            name="password"
            onChange={handleInputChange} />
        </div>
        <input type="submit" value="Login" />
      </Form>
  );
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)