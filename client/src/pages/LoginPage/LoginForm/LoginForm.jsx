import React, {useState, useCallback} from 'react'
import { useDispatch } from "react-redux";
import Typography from '@material-ui/core/Typography';
import './LoginForm.css';
import Button from '@material-ui/core/Button';

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
        <div className="card" style={{backgroundColor: "#54caca"}}>
        <div className="card-content black-text">
          <div>
            <div className="input-field  black-text">
              <input id="email" type="text" className="inputStyle black-text" name="email" onChange={handleForm}/>
              <label htmlFor="email"  className="black-text">
                <Typography variant="body2">Email</Typography>
              </label>
            </div>
            <div className="input-field  black-text">
              <input id="password" type="text"  className=" inputStyle black-text" name="password" onChange={handleForm}/>
              <label htmlFor="password"  className="black-text">
                <Typography variant="body2">Password</Typography>
              </label>
            </div>
          </div>
        </div>
        <div className="card-action">
          <Button onClick={handleClickLogin} style={{marginRight: 10, color: "white",color: "rgba(0, 0, 0, 0.768)", backgroundColor: "#FF9640"}}>
            Login
          </Button>
          <Button onClick={handleClickReg} style={{color: "rgba(0, 0, 0, 0.768)", backgroundColor: "#FF9640"}}>
            Register
          </Button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default React.memo(LoginForm);