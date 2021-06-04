import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import { RootState } from './redux/rootReducer'

type PropsType = {
  component: any //TODO
  path: string
}

export const PrivateRoute: React.FC<PropsType> = ({component: Component, path, ...rest}) => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);
    return (
    <Route 
      {...rest}
      path={path}
      render={
        (props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/"></Redirect>
      }
    />
  )  
}