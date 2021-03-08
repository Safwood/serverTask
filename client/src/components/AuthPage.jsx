import React, {useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import { connect } from "react-redux";
import { authenticate } from "../redux/actions/authenticateAction";
import { logIn } from "../redux/actions/logInAction";
import { register } from "../redux/actions/registerAction";



export const AuthPage = (props) => {
  const message = useMessage()
  const {request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])


  const handleForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }


  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form}) 
      console.log(data)
      props.logIn(data.userId)// 
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      props.logIn(data.userId)// 
    } catch (e) {}
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <div className="card blue lighten-1">
        <div className="card-content black-text">
          <span className="card-title">Авторизация</span>
          <div>
            <div className="input-field  black-text">
              <input id="email" type="text" className="inputStyle black-text" name="email" onChange={handleForm}/>
              <label htmlFor="email"  className="black-text">Email</label>
            </div>
            <div className="input-field  black-text">
              <input id="password" type="text"  className=" inputStyle black-text" name="password" onChange={handleForm}/>
              <label htmlFor="password"  className="black-text">Password</label>
            </div>
          </div>
        </div>
        <div className="card-action">
          <button className="btn blue lighten-4 black-text"  onClick={loginHandler} style={{marginRight: 10}}>Войти</button>
          <button className="btn blue lighten-3 black-text" onClick={registerHandler} >Авторизация</button>
        </div>
      </div>
      </div>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  auth: (email, password) => dispatch(authenticate({email, password})),
  logIn: (token) => dispatch(logIn(token)),
  register: (token) => dispatch(register(token))
})

export default connect(null, mapDispatchToProps)(AuthPage);