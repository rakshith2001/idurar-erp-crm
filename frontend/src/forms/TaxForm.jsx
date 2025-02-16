import React from 'react';
import { Switch, Form, Input } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

export default function TaxForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Tax Name"
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Tax Value"
        name="value"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mode enabled"
        name="enabled"
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingRight: '5px',
        }}
        valuePropName="checked"
        initialValue={true}
      >
        <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
      </Form.Item>
      <Form.Item
        label="Is Default Mode"
        name="isDefault"
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
        valuePropName="checked"
      >
        <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
      </Form.Item>
    </>
  );
}
