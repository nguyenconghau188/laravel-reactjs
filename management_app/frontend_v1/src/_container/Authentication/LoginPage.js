import React from 'react';
import { connect } from "react-redux";
import LoginComponent from '../../_components/authentication/LoginComponent';
import { loginAction } from "../../_actions/authentication.action";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleChange(name, value) {
        this.setState({
            [name]: value
        });
    }

    onHandleSubmit() {
        if (this.state.username && this.state.password) {
            const user = {
                username: this.state.username,
                password: this.state.password
            };
            this.props.dispatch(loginAction(user));
        }
    }

    render() {
        return (
            <LoginComponent
                username={this.state.username}
                password={this.state.password}
                isLogin={this.props.isLogin}
                onHandleChange={this.onHandleChange}
                onHandleSubmit={this.onHandleSubmit}
            />
        );
    };
}
function mapStateToProps(state) {
    const { isLogin } = state.login;
    return {
        isLogin
    }
}
export default connect(mapStateToProps)(LoginPage);