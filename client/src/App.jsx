import React from 'react';
import './css/App.css';
import 'materialize-css';
import {Switch, Route, Redirect} from "react-router-dom"
import {CountryPage} from './components/CountryPage'
import {MainPage} from './components/MainPage'
import AuthPage from './components/AuthPage'
import { connect } from "react-redux";

function App(props) {
  return (
        <div className="container">
          {props.isAuthenticated 
          ?
          (
          <Switch>
            <Route path="/main" exact>
              <MainPage />
            </Route>
            <Route path="/country" exact>
              <CountryPage />
            </Route>
            <Redirect to="/main"/>
          </Switch>
          )
            :
          (
            <Switch>
              <Route path="/main" exact>
                  <AuthPage />
                </Route>
                <Redirect to="/main"/>
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

