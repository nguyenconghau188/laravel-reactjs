import React from 'react';
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { AdminApp } from "../_containers/AdminApp";
import { Login } from "../_views/Login";

class App extends React.Component {

    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert when location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div> 
                }
                <Router history={history} >
                    <div>
                        <PrivateRoute exact path="/" component={AdminApp} />
                        <Route path="/login" component={Login} />
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectApp = connect(mapStateToProps)(App);
export { connectApp as App };