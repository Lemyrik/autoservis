import { Form, Input, Switch } from "antd";
import React from "react";

const FORM_ITEMS_MAP = {
  textInput: ({ ...props }) => <Input {...props} />,
  switch: ({ handleCheckboxChange }) => (
    <Switch onChange={handleCheckboxChange} />
  ),
};

export const FormItemComponent = ({
  data,
  form,
  config,
  onFinish,
  layout = "vertical",
  children,
  ...props
}) => {
  return (
    <Form
      form={form}
      className="filter-form"
      onFinish={onFinish}
      layout={layout}
    >
      {config?.map(({ label, name, type, dependencies, hidden, rules }) => (
        <Form.Item
          key={label}
          label={label}
          initialValue={data?.[name]}
          name={name}
          dependencies={dependencies}
          hidden={hidden?.(form.getFieldsValue())}
          rules={rules}
        >
          {FORM_ITEMS_MAP?.[type](props)}
        </Form.Item>
      ))}
      {children}
    </Form>
  );
};
