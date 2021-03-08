import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";

export const CountryPage = (props) => {

  return (
    <div className="row">
     <h1>Страна</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(CountryPage);