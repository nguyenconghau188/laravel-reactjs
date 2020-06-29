import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from "../_common/history";

import PrivateRoute from "./privateRoute";
import LoginPage from './Authentication/LoginPage';
import RegistrationPage from './Authentication/RegistrationPage';
import AdminPage from './AdminApp/AdminPage';
import ClientPage from './ClientApp/ClientPage';

class AppContainer extends React.Component {

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/' exact={true} component={ClientPage} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/register' component={RegistrationPage} />
                    <PrivateRoute path='/admin' component={AdminPage} />
                </Switch>
            </Router>
        );
    }
}

export default AppContainer;