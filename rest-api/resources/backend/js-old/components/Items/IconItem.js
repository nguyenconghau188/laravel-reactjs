import React from 'react';
import {CodeSandboxOutlined} from '@ant-design/icons';

const IconItem = () => {
  const myStyle = {
    textAlign: 'center',
    background: 'white',
    padding: '8px',
    fontSize: '20px',
    fontWeight: 'bold',
    weight: '60px',
    width: '190px',
    margin: '10px',
    lineHeight: '45px'
  }

  return (
    <span style={myStyle}>
      <CodeSandboxOutlined style={{ fontSize: '30px' }} />
      Admin App
    </span>
  );
}

export default IconItem;