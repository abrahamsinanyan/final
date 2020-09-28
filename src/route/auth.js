import React from 'react'
import { BrowserRouter as  Route,Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
<Route {...rest} render={(props) => (
      isAuthenticated  ? <Component {...props} /> : <Redirect to='/login' />
    )} />
  )
  export default PrivateRoute;
