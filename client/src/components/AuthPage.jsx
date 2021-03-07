import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
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
      message(data.message)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
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
          <button className="btn blue lighten-4 black-text"  onClick={loginHandler} disable={loading} style={{marginRight: 10}}>Войти</button>
          <button className="btn blue lighten-3 black-text" onClick={registerHandler} disable={loading} >Авторизация</button>
        </div>
      </div>
      </div>
    </div>
  )
}