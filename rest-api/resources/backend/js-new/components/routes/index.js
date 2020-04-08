import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Authenticate from '../pages/authenticate';
// import GuestRoute from '../routes/guest-route/guest-route';
import AuthenticatedRoute from '../routes/authenticated-route';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../stores/modules/authenticate';
import propsToJS from '../../utils/prop-to-js';

const Routes = () => {
  <Switch>
    {/* Home page */}
    <AuthenticatedRoute 
      exact
      path='/'
      component={() => {
        return (
          <div>
            This is HOMEPAGE
          </div>
        );
      }}
    />
    <GuestRoute 
      exact
      path='/login'
      component={Authenticate}
    />
  </Switch>
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default withRouter(connect(mapStateToProps, null)(propsToJS(Routes)));