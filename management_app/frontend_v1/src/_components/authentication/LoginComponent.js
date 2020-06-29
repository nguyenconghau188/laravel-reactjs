import React, { Fragment } from 'react';

class LoginComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            submitted: false
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        var { onHandleChange } = this.props;
        onHandleChange(name, value);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            submitted: true
        });
        const { onHandleSubmit } = this.props;
        onHandleSubmit();
    }

    render() {
        const { username, password, isLogin } = this.props;
        const { submitted } = this.state;
        return (
            <Fragment>
                <div className="jumbotron">
                    <div className="container">
                        <div className="col-md-6 offset-md-3">
                            <div className="alert alert-info">
                                Username: test <br />
                                    Password: test
                                </div>
                            <h2>Login</h2>
                            <form name="form-login" onSubmit={(e) => { this.handleSubmit(e) }}>
                                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                    <label htmlFor="username">
                                        Username
                                        </label>
                                    <input
                                        type="text" name="username" className="form-control"
                                        value={username}
                                        onChange={(e) => { this.handleChange(e) }}
                                    />
                                    {submitted && !username &&
                                        <div className="help-block">Username is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <label htmlFor="password">
                                        Password
                                        </label>
                                    <input
                                        type="password" name="password" className="form-control"
                                        value={password}
                                        onChange={(e) => { this.handleChange(e) }}
                                    />
                                    {submitted && !password &&
                                        <div className="help-block">Password is required</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">
                                        Login
                                        </button>
                                        {isLogin &&
                                            <img
                                                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                                alt="image1"
                                            />
                                        }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default LoginComponent;