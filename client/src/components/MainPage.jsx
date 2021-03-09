import React from 'react'
import { connect } from "react-redux";
import Header from "./Header"
import {NavLink} from 'react-router-dom'

export const MainPage = (props) => {

  return (
    <div className="container">
      <Header />
     <h1>Главная</h1>
     <li><NavLink to="/country">Страна</NavLink></li>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(MainPage);