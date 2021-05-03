import React, {useState, useCallback} from 'react'
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const auth = useCallback((email, password) => dispatch({type: "auth/AUTHENTICATE", payload: { email, password }}), [dispatch])
  const register = useCallback((email, password) => dispatch({type: 'registration/REGISTER', payload: { email, password}}), [dispatch]);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleClickReg = () => {
    register(form.email, form.password)
  }

  const handleClickLogin = () => {
    auth(form.email, form.password)
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
          <button className="btn blue lighten-4 black-text"  onClick={handleClickLogin} style={{marginRight: 10}}>Войти</button>
          <button className="btn blue lighten-3 black-text" onClick={handleClickReg} >Авторизация</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default React.memo(LoginForm);