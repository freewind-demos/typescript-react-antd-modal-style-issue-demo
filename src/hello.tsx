import React, {useState} from 'react'
import {Button, Modal} from 'antd';

export default function Hello() {
  const [visible, setVisible] = useState(false);
  return <div>
    <Button type="primary" onClick={() => setVisible(true)}>
      Open Modal
    </Button>
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={() => {
        console.log("### onOk")
        setVisible(false)
      }}
      onCancel={() => {
        console.log("### onCancel")
        setVisible(false)
      }}
    >
      <p>Some content</p>
      <Hello/>
    </Modal>
  </div>
};
