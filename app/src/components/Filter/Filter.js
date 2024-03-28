import { FilterOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import React, { useState } from "react";
import { FILTER_BTN } from "./config";
import Form from "@rjsf/antd";
import validator from "@rjsf/validator-ajv8";
import { schema, uiSchema } from "./schema";
import "./filter.css";

const Filter = ({ config, handleSearch, handleReset, ...props }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = React.useState(null);

  const showDrawer = () => setOpen(true);

  const onClose = () => setOpen(false);

  const onReset = () => {
    handleReset();
    setFormData(null)
  };
  const onSubmit = () => {
    handleSearch(formData);
  };
  return (
    <div className="filter">
      <Drawer title="Filter" onClose={onClose} open={open}>
        <Form
          formData={formData}
          schema={schema}
          validator={validator}
          uiSchema={uiSchema}
          onChange={(e) => setFormData(e.formData)}
          onSubmit={onSubmit}
        >
          <Space>
            {FILTER_BTN({ onSubmit, onReset })?.map((item) => item)}
          </Space>
        </Form>
      </Drawer>
      <Button onClick={showDrawer}>
        <FilterOutlined />
      </Button>
    </div>
  );
};

export default Filter;
