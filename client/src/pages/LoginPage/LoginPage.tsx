import React from 'react'
import LoginForm from './LoginForm/LoginForm'
import './LoginPage.css'

function LoginPage() {

  return (
    <div className="login">
      <LoginForm />
    </div>
  )
}

export default React.memo(LoginPage);