import React from 'react'
import { connect } from "react-redux";
import Header from './Header'
import {NavLink} from 'react-router-dom'

export const CountryPage = (props) => {

  return (
    <div className="container">
      <Header />
     <h1>Страна</h1>
     <li><NavLink to="/main">Главная</NavLink></li>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(CountryPage);