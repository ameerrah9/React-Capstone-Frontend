import { Button } from 'react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../../Actions/loginForm';
import { login } from '../../Actions/currentUser';


const Login = ({ loginFormData, updateLoginForm, login, history }) => {

  const handleInputChange = (event) => {
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
      <form inline onSubmit={handleSubmit}>
        <div>
            <input
              variant='filled'
              type='text'
              value={loginFormData.username}
              placeholder='username'
              name='username'
              onChange={handleInputChange} />
        </div>
        <br></br>
        <div>
            <input
              variant='filled'
              type='password'
              value={loginFormData.password}
              placeholder='password'
              name='password'
              onChange={handleInputChange} />
        </div>
        <br></br>

          <Button variant='primary' value='Login' type='submit'>Login</Button>
      </form>
  );
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)
