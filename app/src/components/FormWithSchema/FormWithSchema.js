import React from "react";
import validator from "@rjsf/validator-ajv8";
import { Form } from "@rjsf/antd";

export const FormWithSchema = ({
  formData,
  schema,
  uiSchema,
  children,
  onChange,
  onSubmit,
  ...props
}) => {
  return (
    <Form
      formData={formData}
      schema={schema}
      validator={validator}
      uiSchema={uiSchema}
      onChange={onChange}
      onSubmit={onSubmit}
    >
      {children}
    </Form>
  );
};
