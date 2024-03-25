import { FilterOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Space } from "antd";
import React, { useState } from "react";
import { FormItemComponent } from "../FormItem/FormItem";
import { FILTER_BTN } from "./config";

const Filter = ({ config, handleSearch, handleReset, ...props }) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => setOpen(true);

  const onClose = () => setOpen(false);

  const onReset = () => {
    handleReset();
    form?.resetFields();
  };

  const onSubmit = () => handleSearch(form?.getFieldsValue());

  return (
    <div className="filter">
      <Drawer title="Filter" onClose={onClose} open={open}>
        <FormItemComponent form={form} config={config} {...props}>
          <Space>
            {FILTER_BTN({ onSubmit, onReset })?.map((item) => item)}
          </Space>
        </FormItemComponent>
      </Drawer>
      <Button onClick={showDrawer}>
        <FilterOutlined />
      </Button>
    </div>
  );
};

export default Filter;
