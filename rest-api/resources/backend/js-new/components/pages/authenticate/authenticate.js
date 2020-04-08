import React, { useState } from 'react';
import { Col, Row } from 'antd';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import Login from './login';
import './login.css';
import Register from './register';

const Authenticate = (props) => {
  const [isShowRegister, showRegisterForm] = useState(false);
  const { register, login } = props;

  return (
    <div>
      <ReduxToastr
        getState={(state) => state.get('toastr')}
        timeOut={4000}
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar
        closeOnToastrClick
      />
      <Row type="flex" justify="center" align="middle" >
        {
          isShowRegister ? (
            <Register 
              showLoginForm={showRegisterForm}
              register={register}
            />
          ) : (
            <Login 
              showRegisterForm={showRegisterForm}
              login={login}
            />
          )
        }
        <Col span={16} className="login-background">

        </Col>
      </Row>
    </div>
  );
}

export default Authenticate;