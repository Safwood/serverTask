import React from 'react'

import { logOut } from "../redux/actions/logOutAction";
import { connect } from "react-redux";


export const Header = (props) => {

  const logoutHandler = event => {
    event.preventDefault();
    props.logOut();
  }

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">Travel-app</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          
          <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  )
}

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
})

export default connect(null, mapDispatchToProps)(Header);