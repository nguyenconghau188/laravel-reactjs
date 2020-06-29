import React from 'react';  
import { Redirect, Route } from 'react-router-dom';
import { checkLogin } from "../_common/commonFunctions";

const PrivateRoute = ({ component: Component, ...rest }) => (  
  <Route { ...rest } render={props => (
    checkLogin() !== null ? (
      <Component { ...props } />
    ) : (
      <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}
      />
    )
  )} />
);

export default PrivateRoute;