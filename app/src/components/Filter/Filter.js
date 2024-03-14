import "./Filter.css";
import React, { useState } from "react";
import { FilterOutlined } from "@ant-design/icons";
import { Form, Input, Button, Drawer, Space } from "antd";
import { entryFields } from "./config";
const Filter = ({ getData }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onFinish = (value) => {
    const params = {};
    for (let key in value) {
      if (value[key] !== undefined) {
        params[key] = value[key];
      }
    }
    getData(params);
  };
  function onReset() {
    getData();
  }
  return (
    <>
      <div className="filter">
        <Drawer title="Filter" onClose={onClose} open={open}>
          <Form className="filter-form" onFinish={onFinish}>
            {entryFields.map(({ label, name }) => (
              <Form.Item label={label} name={name}>
                <Input />
              </Form.Item>
            ))}
            <Space>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button htmlType="reset" onClick={onReset}>
              Reset
            </Button></Space>
          </Form>
        </Drawer>
        <Button onClick={showDrawer}>
          <FilterOutlined />
        </Button>
      </div>
    </>
  );
};

export default Filter;
