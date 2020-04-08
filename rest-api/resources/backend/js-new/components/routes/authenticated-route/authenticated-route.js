import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';

const AuthenticatedRoute = ({component: Component, render: Render, ...rest}) => {
  if (isEmpty(rest.currentUser)) {
    return (
      <Redirect 
        to={{pathname: '/login', state: {from: rest.location}}}
      />
    );
  }
  return (
    <Route 
      {...rest}
      render={props => <Component {...props} /> }
    />
  );
}
export default AuthenticatedRoute;