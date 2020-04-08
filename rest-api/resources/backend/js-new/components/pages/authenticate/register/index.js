import React from 'react';
import { Col, Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};


const Register = (props) => {
  const [form] = Form.useForm();

  const showLoginForm = () => {
    props.showLoginForm(false);
  };

  const onFinish = (values) => {
    const { register } = props;
    register(values);
  };

  return (
    <Col span={8} className='register_form'>
      <h3>Đăng ký</h3>
      <div className='register_form--wrap'>
        <Form
          {...layout}
          name="basic"
          onFinish={onFinish}
        >
          <Form.Item
            label="Tên"
            name="name"
            rules={[
              { required: true, message: 'Vui lòng nhập tên' },
              { max: 191, message: 'Vui lòng không nhập quá 191 ký tự' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Vui lòng nhập email' },
              { type: 'email', message: 'Vui lòng nhập đúng định dạng email' },
              { max: 191, message: 'Vui lòng không nhập quá 191 ký tự' }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: 'Vui lòng nhập mật khẩu' },
              { max: 16, message: 'Vui lòng không nhập quá 16 kí tự' },
              { min: 6, message: 'Vui lòng không nhập dưới 6 kí tự' }
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Nhập lại mật khẩu"
            name="password_confirmation"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Vui lòng nhập đúng mật khẩu' },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Mật khẩu nhập lại không khớp');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đăng ký
                        </Button>
            <Button className='register_form--wrap__register-btn' type="danger" onClick={showLoginForm}>
              Đăng nhập
                        </Button>
          </Form.Item>
        </Form>
      </div>
    </Col>
  )
};

export default Register;