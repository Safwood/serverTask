import React from 'react';
import './css/App.css';
import 'materialize-css';
import {Switch, Route, Redirect} from "react-router-dom"
import {CountryPage} from './components/CountryPage'
import AuthPage from './components/AuthPage'
import { connect } from "react-redux";
import Navbar from './components/Navbar'

function App(props) {
  
  return (
        <div className="container">
          <Navbar />
          {props.isAuthenticated 
          ?
          (
          <Switch>
            <Route path="/links" exact>
              <CountryPage />
            </Route>
            <Route path="/create" exact>
              <CountryPage />
            </Route>
            <Route path="/details/:id">
              <CountryPage />
            </Route>
            <Redirect to="/create"/>
          </Switch>
          
          )
            :
          (
            <Switch>
              <Route path="/" exact>
                  <AuthPage />
                </Route>
                <Redirect to="/"/>
            </Switch>
          )
        }
    </div>
  )
}

// export default App

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(App);

